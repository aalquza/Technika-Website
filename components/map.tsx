"use client"

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export interface Project {
  id: number;
  name: string;
  type: string;
  location: string;
  coordinates: [number, number];
  year: string;
  client?: string;
  description: string;
  images: string[];
  services?: string[];
}

interface MapProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  // optional id to highlight a specific project feature
  highlightedId?: number | null;
  // Optional: mapbox style url (e.g. 'mapbox://styles/mapbox/dark-v10' or a custom style)
  styleUrl?: string;
  // Optional marker styling
  markerColor?: string; // background of marker
  markerInnerColor?: string; // inner dot color
}

const Map: React.FC<MapProps> = ({ projects, onSelectProject, styleUrl, markerColor, markerInnerColor, highlightedId }) => {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  mapboxgl.accessToken = token || undefined
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  // keep a ref to the latest onSelectProject so handlers don't force effect re-run
  const onSelectRef = useRef(onSelectProject);
  useEffect(() => {
    onSelectRef.current = onSelectProject;
  }, [onSelectProject]);

  useEffect(() => {
    // Only attempt to initialize if we have a token and a container and map is not already created
    if (!token || !mapContainer.current || mapRef.current) return;
    const DEFAULT_STYLE = "mapbox://styles/mapbox/streets-v11"
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: styleUrl || DEFAULT_STYLE,
      center: [-79.9309, 32.7765], // Charleston
      zoom: 12.5,
      attributionControl: false, // we'll render a custom attribution inside the card
    });

    // Requested colors
    const LAND_COLOR = "#303841";
    const ROAD_MAIN_COLOR = "#EEEEEE";
    const ROAD_NEIGHBOR_COLOR = "#EEEEEE";
    const WATER_COLOR = "#3A4750";

    // Helper to set paint property safely
    const safeSetPaint = (layerId: string, paintProp: string, value: any) => {
      try {
        if (mapRef.current && mapRef.current.getLayer(layerId)) {
          // cast to any to avoid strict TypeScript paint property unions
          ;(mapRef.current as any).setPaintProperty(layerId, paintProp, value);
        }
      } catch (e) {
        // ignore layers that can't be changed
      }
    };

    // Apply the theme by iterating existing style layers and applying color changes based on id/type.
    const applyTheme = () => {
      const map = mapRef.current;
      if (!map) return;
      // Avoid calling getStyle before the style is fully loaded — Mapbox will throw.
      if (!map.isStyleLoaded || !map.isStyleLoaded()) return;
      const style = map.getStyle();
      const layers = style?.layers || [];

      layers.forEach((layer) => {
        const id = (layer.id || "").toLowerCase();
        const type = (layer.type || "").toLowerCase();

        // Water layers
        if (id.includes("water") || id.includes("ocean") || id.includes("harbor")) {
          if (type === "fill") safeSetPaint(layer.id, "fill-color", WATER_COLOR);
          if (type === "line") safeSetPaint(layer.id, "line-color", WATER_COLOR);
          if (type === "background") safeSetPaint(layer.id, "background-color", WATER_COLOR);
        }

        // Road layers: attempt to separate main vs neighborhood roads by layer id keywords
        if (id.includes("road") || id.includes("street") || id.includes("bridge") || id.includes("motorway") || id.includes("highway")) {
          const isMain = /motorway|trunk|primary|highway|major|link|motorway_link|primary_link/.test(id);
          const isNeighborhood = /residential|service|local|street|unclassified|tertiary|minor|neighbour|neighborhood/.test(id);
          const colorToUse = isMain ? ROAD_MAIN_COLOR : (isNeighborhood ? ROAD_NEIGHBOR_COLOR : ROAD_NEIGHBOR_COLOR);

          if (type === "line") safeSetPaint(layer.id, "line-color", colorToUse);
          if (type === "fill") safeSetPaint(layer.id, "fill-color", colorToUse);
          if (type === "background") safeSetPaint(layer.id, "background-color", colorToUse);
        }

        // Land / background layers
        if (id.includes("land") || id.includes("earth") || id.includes("landuse") || type === "background") {
          if (type === "fill") safeSetPaint(layer.id, "fill-color", LAND_COLOR);
          if (type === "background") safeSetPaint(layer.id, "background-color", LAND_COLOR);
        }
      });
    };

    // Add project points as a GeoJSON source + circle layer (better scaling and performance)
    const addProjectLayer = () => {
      if (!mapRef.current) return;
      const map = mapRef.current;
      const sourceId = "projects";
  const outerLayer = "project-point-outer";
  const innerLayer = "project-point-inner";

      const geojson = {
        type: "FeatureCollection",
        features: (projects || []).map((p) => ({
          type: "Feature",
          properties: {
            id: p.id,
            name: p.name,
            type: p.type,
          },
          geometry: {
            type: "Point",
            coordinates: p.coordinates,
          },
        })),
      };

      // If source exists, update data and ensure layers exist
      if (map.getSource(sourceId)) {
        try {
          ;(map.getSource(sourceId) as any).setData(geojson as any);
        } catch (e) {
          // ignore
        }
        // If layers are already added, we're done; otherwise add missing layers
        if (map.getLayer(outerLayer)) return;
      } else {
        map.addSource(sourceId, {
          type: "geojson",
          data: geojson as any,
        });
      }

      // Outer circle (marker background with white stroke) — reduced size (≈75%)
      map.addLayer({
        id: outerLayer,
        type: "circle",
        source: sourceId,
        paint: {
          "circle-color": markerColor || "#facc15",
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2,
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            8,
            5,
            12,
            7,
            16,
            10,
          ],
        },
      });

      // Inner dot (reduced)
      map.addLayer({
        id: innerLayer,
        type: "circle",
        source: sourceId,
        paint: {
          "circle-color": markerInnerColor || "#334155",
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            8,
            2,
            12,
            2,
            16,
            3,
          ],
        },
      });

      // No separate highlight layer: we'll change outer circle color for the selected feature instead

      // Click handler
      const onClick = (e: mapboxgl.MapLayerMouseEvent) => {
        const features = e.features;
        if (!features || features.length === 0) return;
        const feature = features[0];
        const idProp = feature.properties && (feature.properties as any).id;
        const id = typeof idProp === "string" ? parseInt(idProp, 10) : idProp;
        const match = projects.find((p) => p.id === id);
        if (match && onSelectRef.current) onSelectRef.current(match);
      };

      const onMouseEnter = () => {
        map.getCanvas().style.cursor = "pointer";
      };
      const onMouseLeave = () => {
        map.getCanvas().style.cursor = "";
      };

  // Attach events to the outer layer (visual target)
  map.on("click", outerLayer, onClick);
  map.on("mouseenter", outerLayer, onMouseEnter);
  map.on("mouseleave", outerLayer, onMouseLeave);

  // store handlers for cleanup
  ;(map as any).__projectHandlers = { onClick, onMouseEnter, onMouseLeave, outerLayer, innerLayer };

      // Store handlers for cleanup by attaching them to the map object (we'll remove by name)
    };

    // Handlers
    const onLoad = () => {
      applyTheme();
      addProjectLayer();
    };
    const onStyleData = () => applyTheme();
    const onIdle = () => applyTheme();

    // Attach handlers
    mapRef.current.on("load", onLoad);
    mapRef.current.on("styledata", onStyleData);
    mapRef.current.on("idle", onIdle);

    // Also attempt to apply theme immediately (best-effort) and reapply after short delays
    try {
      applyTheme();
    } catch (e) {
      // ignore
    }

  const timeouts: number[] = [];
  timeouts.push(window.setTimeout(() => applyTheme(), 150));
  timeouts.push(window.setTimeout(() => applyTheme(), 600));

    // Clean up
    return () => {
      if (mapRef.current) {
        try {
          // remove any attached project handlers
          const handlers = (mapRef.current as any).__projectHandlers;
          if (handlers && handlers.outerLayer) {
            try {
              mapRef.current.off("click", handlers.outerLayer, handlers.onClick);
              mapRef.current.off("mouseenter", handlers.outerLayer, handlers.onMouseEnter);
              mapRef.current.off("mouseleave", handlers.outerLayer, handlers.onMouseLeave);
            } catch (e) {
              // ignore
            }
            delete (mapRef.current as any).__projectHandlers;
          }

          // remove layer and source if present
          if (mapRef.current.getLayer("project-point-outer")) {
            mapRef.current.removeLayer("project-point-outer");
          }
          if (mapRef.current.getLayer("project-point-inner")) {
            mapRef.current.removeLayer("project-point-inner");
          }
          // no separate highlight layer to remove
          if (mapRef.current.getSource("projects")) {
            mapRef.current.removeSource("projects");
          }
        } catch (e) {
          // ignore removal errors
        }

        mapRef.current.off("load", onLoad);
        mapRef.current.off("styledata", onStyleData);
        mapRef.current.off("idle", onIdle);
        mapRef.current.remove();
        mapRef.current = null;
      }
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [styleUrl, markerColor, markerInnerColor, token, projects]);

  // Update source data when projects change (if map already initialized)
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const source = map.getSource("projects") as any | undefined;
    if (!source) return;
    const geojson = {
      type: "FeatureCollection",
      features: (projects || []).map((p) => ({
        type: "Feature",
        properties: { id: p.id, name: p.name, type: p.type },
        geometry: { type: "Point", coordinates: p.coordinates },
      })),
    };
    try {
      source.setData(geojson);
    } catch (e) {
      // ignore
    }
  }, [projects]);

  // When a feature is highlighted, make the whole marker larger (both outer and inner circle radii).
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const outer = "project-point-outer";
    const inner = "project-point-inner";

    let attempts = 0;
    const apply = () => {
      attempts++;
      // Ensure the style is fully loaded before attempting to access layers. Calling
      // getLayer while style data is uninitialized can throw inside mapbox-gl.
      if (!map.isStyleLoaded || !map.isStyleLoaded() ) {
        if (attempts < 5) setTimeout(apply, 200);
        return;
      }

      if (!map.getLayer(outer) || !map.getLayer(inner)) {
        if (attempts < 5) setTimeout(apply, 200);
        return;
      }

      const highlightedStr = highlightedId == null ? "__none__" : String(highlightedId);

      // Create top-level interpolate expressions that choose per-zoom sizes via case() so
      // the "zoom" expression is only used as input to a top-level interpolate (Mapbox requirement).
      const outerExpr: any = [
        "interpolate",
        ["linear"],
        ["zoom"],
        // zoom 8
        8,
        [
          "case",
          ["==", ["to-string", ["get", "id"]], highlightedStr],
          8, // selected size at zoom 8
          5, // default size at zoom 8
        ],
        // zoom 12
        12,
        [
          "case",
          ["==", ["to-string", ["get", "id"]], highlightedStr],
          10, // selected size at zoom 12
          7, // default size at zoom 12
        ],
        // zoom 16
        16,
        [
          "case",
          ["==", ["to-string", ["get", "id"]], highlightedStr],
          14, // selected size at zoom 16
          10, // default size at zoom 16
        ],
      ];

      const innerExpr: any = [
        "interpolate",
        ["linear"],
        ["zoom"],
        // zoom 8
        8,
        [
          "case",
          ["==", ["to-string", ["get", "id"]], highlightedStr],
          3, // selected inner size at zoom 8
          2, // default inner size at zoom 8
        ],
        // zoom 12
        12,
        [
          "case",
          ["==", ["to-string", ["get", "id"]], highlightedStr],
          4, // selected inner size at zoom 12
          2, // default inner size at zoom 12
        ],
        // zoom 16
        16,
        [
          "case",
          ["==", ["to-string", ["get", "id"]], highlightedStr],
          5, // selected inner size at zoom 16
          3, // default inner size at zoom 16
        ],
      ];

      try {
        ;(map as any).setPaintProperty(outer, "circle-radius", outerExpr);
        ;(map as any).setPaintProperty(inner, "circle-radius", innerExpr);
        // Ensure inner color remains the configured color (clear any previous selection color)
        ;(map as any).setPaintProperty(inner, "circle-color", markerInnerColor || "#334155");
      } catch (e) {
        // ignore
      }

      // Optionally fly to the highlighted feature
      if (highlightedId != null) {
        try {
          const src = map.getSource("projects") as any;
          const data = (src && src._data) || (src && src.serialize && src.serialize()) || null;
          const feat = data?.features?.find((f: any) => String(f.properties?.id) === String(highlightedId));
          if (feat && feat.geometry && feat.geometry.coordinates) {
            map.flyTo({ center: feat.geometry.coordinates, zoom: Math.max(map.getZoom(), 13) });
          }
        } catch (e) {
          // ignore
        }
      }
    };

    apply();
  }, [highlightedId, markerColor, markerInnerColor, projects, token]);

  return (
    <div ref={mapContainer} className="relative w-full h-full rounded-lg shadow-lg border border-gray-200">
      <div className="absolute left-2 bottom-2 text-xs text-gray-200 bg-black/30 px-2 py-0.5 rounded">
        © Mapbox © OpenStreetMap Improve this map
      </div>
    </div>
  );
};

export default Map;
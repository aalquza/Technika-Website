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
}

const Map: React.FC<MapProps> = ({ projects, onSelectProject, styleUrl, highlightedId }) => {
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

    // Website color scheme - matching the site's blue, white, gray, and yellow theme
    const WATER_COLOR = "#1e293b"; // Slate-800 - matching header menu color
    const WATER_OUTLINE = "#0f172a"; // Slate-900 - darker blue for water outlines
    const LAND_COLOR = "#f3f4f6"; // Gray-100 - light gray for land
    const BACKGROUND_COLOR = "#e5e7eb"; // Gray-200 - slightly darker for background contrast
    const ROAD_MAJOR = "#ffffff"; // White - major highways and main roads
    const ROAD_MINOR = "#f9fafb"; // Gray-50 - minor streets
    const ROAD_OUTLINE = "#d1d5db"; // Gray-300 - road outlines for definition
    const BUILDING_COLOR = "#e5e7eb"; // Gray-200 - buildings
    const BUILDING_OUTLINE = "#d1d5db"; // Gray-300 - building outlines
    const PARK_COLOR = "#a7f3d0"; // Emerald-200 - parks and green spaces (richer green)
    const PARK_OUTLINE = "#6ee7b7"; // Emerald-300 - park outlines
    const RECREATION_COLOR = "#bfdbfe"; // Blue-200 - recreation areas, playgrounds
    const BEACH_COLOR = "#fde68a"; // Amber-200 - beaches and sand
    const LANDMARK_COLOR = "#fed7aa"; // Orange-200 - landmarks and historic sites
    const POI_COLOR = "#fde047"; // Yellow-300 - points of interest
    const CEMETERY_COLOR = "#d1d5db"; // Gray-300 - cemeteries
    const WOOD_COLOR = "#d9f99d"; // Lime-200 - wooded areas
    const TEXT_COLOR = "#374151"; // Gray-700 - labels and text
    const TEXT_HALO_COLOR = "#ffffff"; // White - text halos for readability

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

    // Helper to set layout property safely
    const safeSetLayout = (layerId: string, layoutProp: string, value: any) => {
      try {
        if (mapRef.current && mapRef.current.getLayer(layerId)) {
          ;(mapRef.current as any).setLayoutProperty(layerId, layoutProp, value);
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

        // Skip our custom project marker layers - don't let theme override them
        if (id === "unclustered-point-outer" || 
            id === "unclustered-point-inner" || 
            id === "clusters" || 
            id === "cluster-count") {
          return;
        }

        // Hide driveway layers
        if (id.includes("driveway")) {
          safeSetLayout(layer.id, "visibility", "none");
          return;
        }

        // Water layers - vibrant blue
        if (id.includes("water") || id.includes("ocean") || id.includes("harbor") || id.includes("bay")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", WATER_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.7);
          }
          if (type === "line") {
            safeSetPaint(layer.id, "line-color", WATER_OUTLINE);
            safeSetPaint(layer.id, "line-width", 1);
          }
          if (type === "background") safeSetPaint(layer.id, "background-color", WATER_COLOR);
        }

        // Building layers
        if (id.includes("building")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", BUILDING_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.8);
          }
          if (type === "fill-extrusion") {
            safeSetPaint(layer.id, "fill-extrusion-color", BUILDING_COLOR);
            safeSetPaint(layer.id, "fill-extrusion-opacity", 0.8);
          }
          if (type === "line") {
            safeSetPaint(layer.id, "line-color", BUILDING_OUTLINE);
            safeSetPaint(layer.id, "line-width", 0.5);
          }
        }

        // Park and green space layers
        if (id.includes("park") || (id.includes("landuse") && (id.includes("grass") || id.includes("park")))) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", PARK_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.7);
          }
          if (type === "line") {
            safeSetPaint(layer.id, "line-color", PARK_OUTLINE);
            safeSetPaint(layer.id, "line-width", 1);
          }
        }

        // Recreation areas and playgrounds
        if (id.includes("recreation") || id.includes("playground") || id.includes("pitch") || id.includes("sports")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", RECREATION_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.6);
          }
        }

        // Beaches and sand
        if (id.includes("beach") || id.includes("sand")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", BEACH_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.7);
          }
        }

        // Wooded areas and natural features
        if (id.includes("wood") || id.includes("forest") || id.includes("scrub") || id.includes("wetland")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", WOOD_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.5);
          }
        }

        // Cemeteries
        if (id.includes("cemetery")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", CEMETERY_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.4);
          }
        }

        // Landmarks and historic sites
        if (id.includes("landmark") || id.includes("monument") || id.includes("historic") || id.includes("memorial")) {
          if (type === "fill") {
            safeSetPaint(layer.id, "fill-color", LANDMARK_COLOR);
            safeSetPaint(layer.id, "fill-opacity", 0.8);
          }
          if (type === "circle") {
            safeSetPaint(layer.id, "circle-color", LANDMARK_COLOR);
            safeSetPaint(layer.id, "circle-stroke-color", "#f97316"); // Orange-500
            safeSetPaint(layer.id, "circle-stroke-width", 1);
          }
        }

        // Points of interest (POI markers)
        if (id.includes("poi") && type === "circle") {
          safeSetPaint(layer.id, "circle-color", POI_COLOR);
          safeSetPaint(layer.id, "circle-stroke-color", "#eab308"); // Yellow-500
          safeSetPaint(layer.id, "circle-stroke-width", 1);
        }

        // Road layers - control visibility by type and zoom level
        if (id.includes("road") || id.includes("street") || id.includes("bridge") || id.includes("motorway") || id.includes("highway") || id.includes("tunnel")) {
          // Completely hide unwanted road types at all zoom levels
          // Expanded list to catch more service roads, alleys, and minor paths
          const isUnwantedRoad = /service|footway|pedestrian|track|steps|cycleway|path|alley|parking|ferry|construction|piste|link-case|link-[\d]|minor/.test(id);
          
          if (isUnwantedRoad) {
            safeSetLayout(layer.id, "visibility", "none");
            return;
          }

          // Identify road categories
          const isMajor = /motorway|trunk|primary/.test(id);
          const isMinor = /secondary|tertiary/.test(id);
          const isResidential = /residential|local|unclassified/.test(id);
          
          // Only show major roads (motorways, trunks, primary, secondary) at all zoom levels
          // Hide residential and other minor streets completely by setting maxzoom very low
          if (isResidential) {
            // Hide residential streets at zoom levels above 14
            safeSetLayout(layer.id, "maxzoom", 14.5);
          }
          else if (isMinor) {
            // Secondary/tertiary roads: visible up to zoom 16
            safeSetLayout(layer.id, "maxzoom", 16);
          }
          else if (isMajor) {
            // Major roads: visible at all zoom levels
            // No maxzoom restriction
          }
          else {
            // Everything else (catch-all): hide at zoom levels above 14
            safeSetLayout(layer.id, "maxzoom", 14.5);
          }
          
          if (type === "line") {
            // Set color based on road type
            if (isMajor) {
              safeSetPaint(layer.id, "line-color", ROAD_MAJOR);
              safeSetPaint(layer.id, "line-width", [
                "interpolate", ["linear"], ["zoom"],
                8, 2,
                12, 3,
                16, 6
              ]);
            } else if (isMinor || isResidential) {
              safeSetPaint(layer.id, "line-color", ROAD_MINOR);
              safeSetPaint(layer.id, "line-width", [
                "interpolate", ["linear"], ["zoom"],
                12, 1,
                16, 3
              ]);
            }
            // Add subtle outline for definition
            if (id.includes("case") || id.includes("outline")) {
              safeSetPaint(layer.id, "line-color", ROAD_OUTLINE);
            }
          }
        }

        // Land / background layers
        if (id.includes("land") || id.includes("earth") || type === "background") {
          if (type === "fill") safeSetPaint(layer.id, "fill-color", LAND_COLOR);
          if (type === "background") safeSetPaint(layer.id, "background-color", BACKGROUND_COLOR);
        }

        // Text and label layers - improve readability
        if (type === "symbol" && (id.includes("label") || id.includes("text") || id.includes("place"))) {
          safeSetPaint(layer.id, "text-color", TEXT_COLOR);
          safeSetPaint(layer.id, "text-halo-color", TEXT_HALO_COLOR);
          safeSetPaint(layer.id, "text-halo-width", 1.5);
          safeSetPaint(layer.id, "text-halo-blur", 0.5);
          
          // Adjust text size based on zoom for better readability
          if (id.includes("place") || id.includes("city")) {
            safeSetLayout(layer.id, "text-size", [
              "interpolate", ["linear"], ["zoom"],
              8, 12,
              12, 14,
              16, 18
            ]);
          }
        }
      });
    };

    // Add project points as a GeoJSON source with clustering enabled
    const addProjectLayer = () => {
      if (!mapRef.current) return;
      const map = mapRef.current;
      const sourceId = "projects";
      const clusterLayer = "clusters";
      const clusterCountLayer = "cluster-count";
      const unclusteredOuterLayer = "unclustered-point-outer";
      const unclusteredInnerLayer = "unclustered-point-inner";

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
        if (map.getLayer(clusterLayer)) return;
      } else {
        // Add source with clustering enabled
        map.addSource(sourceId, {
          type: "geojson",
          data: geojson as any,
          cluster: true,
          clusterMaxZoom: 16, // Max zoom to cluster points on
          clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
        });
      }

      // Add cluster circle layer
      map.addLayer({
        id: clusterLayer,
        type: "circle",
        source: sourceId,
        filter: ["has", "point_count"],
        paint: {
          // Use step expressions to implement three types of circles:
          // * Small clusters (< 10 points): smaller circle
          // * Medium clusters (10-30 points): medium circle  
          // * Large clusters (30+ points): large circle
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#facc15", // Default yellow
            10,
            "#f59e0b", // Orange for 10-30
            30,
            "#d97706", // Darker orange for 30+
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            15, // Default radius for small clusters
            10,
            20, // Radius for 10-30 points
            30,
            25, // Radius for 30+ points
          ],
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2,
        },
      });

      // Add cluster count labels
      map.addLayer({
        id: clusterCountLayer,
        type: "symbol",
        source: sourceId,
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
        paint: {
          "text-color": "#334155",
        },
      });

      // Add unclustered point outer circle layer (yellow background with blue outline)
      map.addLayer({
        id: unclusteredOuterLayer,
        type: "circle",
        source: sourceId,
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#facc15", // yellow background
          "circle-stroke-color": "#1e293b", // slate-800 to match navbar - blue outline
          "circle-stroke-width": 2, // visible blue outline by default
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

      // Add unclustered point inner dot layer
      map.addLayer({
        id: unclusteredInnerLayer,
        type: "circle",
        source: sourceId,
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#1e293b", // slate-800 to match navbar - dark blue dot
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

      // Click handler for clusters - zoom in
      const onClusterClick = (e: mapboxgl.MapLayerMouseEvent) => {
        const features = e.features;
        if (!features || features.length === 0) return;
        const clusterId = features[0].properties?.cluster_id;
        const source = map.getSource(sourceId) as mapboxgl.GeoJSONSource;
        
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;
          
          map.easeTo({
            center: (features[0].geometry as any).coordinates,
            zoom: zoom || map.getZoom() + 2,
          });
        });
      };

      // Click handler for unclustered points
      const onPointClick = (e: mapboxgl.MapLayerMouseEvent) => {
        const features = e.features;
        if (!features || features.length === 0) return;
        const feature = features[0];
        const idProp = feature.properties && (feature.properties as any).id;
        const id = typeof idProp === "string" ? parseInt(idProp, 10) : idProp;
        const match = projects.find((p) => p.id === id);
        
        // Always fly to the clicked marker's location
        if (feature.geometry && (feature.geometry as any).coordinates) {
          map.flyTo({ 
            center: (feature.geometry as any).coordinates, 
            zoom: Math.max(map.getZoom(), 15) 
          });
        }
        
        if (match && onSelectRef.current) onSelectRef.current(match);
      };

      const onMouseEnter = () => {
        map.getCanvas().style.cursor = "pointer";
      };
      const onMouseLeave = () => {
        map.getCanvas().style.cursor = "";
      };

      // Attach events to clusters
      map.on("click", clusterLayer, onClusterClick);
      map.on("mouseenter", clusterLayer, onMouseEnter);
      map.on("mouseleave", clusterLayer, onMouseLeave);

      // Attach events to unclustered points (both outer and inner layers)
      map.on("click", unclusteredOuterLayer, onPointClick);
      map.on("mouseenter", unclusteredOuterLayer, onMouseEnter);
      map.on("mouseleave", unclusteredOuterLayer, onMouseLeave);
      
      map.on("click", unclusteredInnerLayer, onPointClick);
      map.on("mouseenter", unclusteredInnerLayer, onMouseEnter);
      map.on("mouseleave", unclusteredInnerLayer, onMouseLeave);

      // Store handlers for cleanup
      ;(map as any).__projectHandlers = {
        onClusterClick,
        onPointClick,
        onMouseEnter,
        onMouseLeave,
        clusterLayer,
        clusterCountLayer,
        unclusteredOuterLayer,
        unclusteredInnerLayer,
      };
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
          if (handlers) {
            try {
              // Remove cluster handlers
              if (handlers.clusterLayer) {
                mapRef.current.off("click", handlers.clusterLayer, handlers.onClusterClick);
                mapRef.current.off("mouseenter", handlers.clusterLayer, handlers.onMouseEnter);
                mapRef.current.off("mouseleave", handlers.clusterLayer, handlers.onMouseLeave);
              }
              // Remove unclustered point handlers (outer layer)
              if (handlers.unclusteredOuterLayer) {
                mapRef.current.off("click", handlers.unclusteredOuterLayer, handlers.onPointClick);
                mapRef.current.off("mouseenter", handlers.unclusteredOuterLayer, handlers.onMouseEnter);
                mapRef.current.off("mouseleave", handlers.unclusteredOuterLayer, handlers.onMouseLeave);
              }
              // Remove unclustered point handlers (inner layer)
              if (handlers.unclusteredInnerLayer) {
                mapRef.current.off("click", handlers.unclusteredInnerLayer, handlers.onPointClick);
                mapRef.current.off("mouseenter", handlers.unclusteredInnerLayer, handlers.onMouseEnter);
                mapRef.current.off("mouseleave", handlers.unclusteredInnerLayer, handlers.onMouseLeave);
              }
            } catch (e) {
              // ignore
            }
            delete (mapRef.current as any).__projectHandlers;
          }

          // remove layers if present
          const layersToRemove = [
            "unclustered-point-inner",
            "unclustered-point-outer",
            "cluster-count",
            "clusters",
          ];
          
          layersToRemove.forEach((layerId) => {
            try {
              if (mapRef.current && mapRef.current.getLayer(layerId)) {
                mapRef.current.removeLayer(layerId);
              }
            } catch (e) {
              // ignore
            }
          });

          // remove source if present
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
  }, [styleUrl, token, projects]);

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
    const outer = "unclustered-point-outer";
    const inner = "unclustered-point-inner";

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

      // Create stroke width expression for selection state (thicker outline when selected)
      const strokeWidthExpr: any = [
        "case",
        ["==", ["to-string", ["get", "id"]], highlightedStr],
        4, // selected: thicker blue outline
        2, // default: standard blue outline
      ];

      try {
        ;(map as any).setPaintProperty(outer, "circle-radius", outerExpr);
        ;(map as any).setPaintProperty(inner, "circle-radius", innerExpr);
        ;(map as any).setPaintProperty(outer, "circle-stroke-width", strokeWidthExpr);
        // Ensure inner dot remains dark blue (slate-800) always
        ;(map as any).setPaintProperty(inner, "circle-color", "#1e293b");
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
            map.flyTo({ center: feat.geometry.coordinates, zoom: Math.max(map.getZoom(), 15) });
          }
        } catch (e) {
          // ignore
        }
      }
    };

    apply();
  }, [highlightedId]);

  return (
    <div ref={mapContainer} className="relative w-full h-full rounded-lg shadow-lg border border-gray-200">
      <div className="absolute left-2 bottom-2 text-xs text-gray-600 bg-white/90 px-2 py-0.5 rounded shadow-sm border border-gray-200">
        © Mapbox © OpenStreetMap
      </div>
    </div>
  );
};

export default Map;
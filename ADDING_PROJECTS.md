# Adding New Projects to Your Website

This guide explains how to add new projects to your Technika website. All projects are managed from a single centralized file.

## Quick Start

**File to edit:** `lib/projects-data.ts`

## Gallery Organization

The gallery is organized into the following folders:
- `/public/gallery/projects/` - Historic residential projects (street addresses)
- `/public/gallery/featured-projects/` - Major featured projects with multiple photos
- `/public/gallery/electrical/` - Electrical panel and wiring photos
- `/public/gallery/mechanical/` - HVAC and mechanical system photos
- `/public/gallery/structural/` - Foundation, beams, and structural components
- `/public/gallery/building-science/` - Building envelope and assessment photos
- `/public/gallery/construction/` - Engineering drawings and construction site photos

## Step-by-Step: Adding a Full Project (with Map Marker)

### 1. Prepare Your Photos
- Take photos of the completed project
- Save them to the appropriate gallery subfolder:
  - For street address projects: `/public/gallery/projects/`
  - For featured projects: `/public/gallery/featured-projects/project-name/`
- Use descriptive filenames like `123 Main St.JPG`

### 2. Get the Coordinates
To show the project on the map, you need coordinates:

1. Go to [Google Maps](https://maps.google.com)
2. Search for the project address
3. Right-click on the exact location
4. Click "Copy coordinates" or select the coordinates shown
5. You'll get something like: `32.7765, -79.9311`
6. **IMPORTANT:** Swap them for Mapbox format: `[-79.9311, 32.7765]` (longitude first!)

### 3. Add the Project
Open `lib/projects-data.ts` and add a new entry to the `projects` array:

```typescript
{
  id: 52, // Increment from the last project ID
  name: "123 Main Street Renovation",
  location: "123 Main St, Charleston, SC",
  coordinates: [-79.9311, 32.7765], // [longitude, latitude]
  type: "Historic Preservation", // or "Commercial", "Residential", etc.
  year: "2024",
  description: "Complete structural renovation including foundation repair and seismic retrofitting.",
  services: ["Structural Analysis", "Historic Preservation", "Foundation Design"],
  images: [
    "/gallery/projects/123 Main St.JPG",
    "/gallery/projects/123 Main St - Interior.JPG", // You can add multiple images
  ],
},
```

### 4. Save and Done!
The project will automatically appear:
- ✅ On the homepage map
- ✅ On the projects page map (clickable marker)
- ✅ In the photo gallery
- ✅ With full project details when marker is clicked

## Quick Add: Gallery-Only Images

If you have photos but don't have time to add full project details yet:

1. Add the photo to the appropriate `/public/gallery/` subfolder
2. Add the full path to the `standaloneGalleryImages` array in `lib/projects-data.ts`:

```typescript
export const standaloneGalleryImages = [
  "/gallery/electrical/new-panel-install.jpg", // Add here with full path
  "/gallery/structural/foundation-work.jpg",
  // ... other images
]
```

The photo will appear in the gallery but won't have a map marker until you create a full project entry.

## Adding Technical Photos

For technical work photos (not tied to specific projects), organize by category:

**Electrical Work:**
- Save to: `/public/gallery/electrical/`
- Example: `/gallery/electrical/panel-installation.jpg`

**Mechanical Work:**
- Save to: `/public/gallery/mechanical/`
- Example: `/gallery/mechanical/hvac-unit.jpg`

**Structural Work:**
- Save to: `/public/gallery/structural/`
- Example: `/gallery/structural/beam-install.jpg`

**Building Science:**
- Save to: `/public/gallery/building-science/`
- Example: `/gallery/building-science/moisture-test.jpg`

**Construction/Consulting:**
- Save to: `/public/gallery/construction/`
- Example: `/gallery/construction/site-plans.jpg`

Then add to `standaloneGalleryImages` array in `lib/projects-data.ts`.

## Project Types

Common types to use:
- `"Historic Preservation"` - Historic building work
- `"Commercial"` - Commercial buildings
- `"Residential"` - Residential projects
- `"Foundation Design"` - Foundation work
- `"Structural Analysis"` - Inspection/analysis projects

## Services List

Common services to include:
- `"Structural Analysis"`
- `"Historic Preservation"`
- `"Foundation Design"`
- `"Building Inspections"`
- `"Commercial Buildings"`
- `"Seismic Retrofitting"`
- `"MEP Design"`
- `"Building Science"`

## Tips

### Multiple Photos Per Project
Add multiple photos to showcase different aspects:
```typescript
images: [
  "/gallery/projects/project-exterior.JPG",
  "/gallery/projects/project-interior.JPG",
  "/gallery/projects/project-detail.JPG",
],
```

For featured projects with many photos, create a subfolder:
```typescript
images: [
  "/gallery/featured-projects/my-project/photo-1.webp",
  "/gallery/featured-projects/my-project/photo-2.webp",
],
```

### Finding Coordinates
- Use the exact building address for accuracy
- Make sure to swap lat/long to lon/lat for Mapbox
- Test by checking if the marker appears in the right spot

### Photo Naming
- Use consistent naming: `"Address.JPG"` 
- Include suite/unit numbers if relevant: `"123 Main St Suite A.JPG"`
- Use descriptive names for multiple photos: `"123 Main St - Before.JPG"`

## Example: Complete Project Entry

```typescript
{
  id: 52,
  name: "Historic Battery Mansion Restoration",
  location: "5 East Battery, Charleston, SC 29401",
  coordinates: [-79.9254, 32.7703],
  type: "Historic Preservation",
  year: "2024",
  description: "Complete structural restoration of 1850s Charleston single house including foundation stabilization, seismic retrofitting, and historic preservation compliance. Project involved extensive structural analysis and custom engineering solutions for coastal construction challenges.",
  services: [
    "Structural Analysis",
    "Historic Preservation", 
    "Foundation Design",
    "Seismic Retrofitting"
  ],
  images: [
    "/gallery/projects/5 East Battery - Exterior.JPG",
    "/gallery/projects/5 East Battery - Foundation.JPG",
    "/gallery/projects/5 East Battery - Interior Detail.JPG",
  ],
},
```

## Troubleshooting

**Map marker not showing?**
- Check coordinates are in [longitude, latitude] format
- Longitude should be negative for Charleston (around -79.xx)
- Latitude should be positive (around 32.xx)

**Photos not appearing?**
- Verify images are in the appropriate `/public/gallery/` subfolder
- For projects: `/public/gallery/projects/`
- For featured projects: `/public/gallery/featured-projects/project-name/`
- For technical photos: `/public/gallery/electrical/`, `/mechanical/`, `/structural/`, etc.
- Check filename matches exactly (case-sensitive - use lowercase folder names!)
- Make sure path starts with `/gallery/`

**Changes not showing?**
- Save the file
- Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few seconds for the dev server to rebuild

## Need Help?

Contact your developer or refer to the project documentation.

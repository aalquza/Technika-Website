# Adding New Projects to Your Website

This guide explains how to add new projects to your Technika website. All projects are managed from a single centralized file.

## Quick Start

**File to edit:** `lib/projects-data.ts`

## Step-by-Step: Adding a Full Project (with Map Marker)

### 1. Prepare Your Photos
- Take photos of the completed project
- Save them to `/public/gallery/` folder
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
  id: 6, // Increment from the last project ID
  name: "123 Main Street Renovation",
  location: "123 Main St, Charleston, SC",
  coordinates: [-79.9311, 32.7765], // [longitude, latitude]
  type: "Historic Preservation", // or "Commercial", "Residential", etc.
  year: "2024",
  description: "Complete structural renovation including foundation repair and seismic retrofitting.",
  services: ["Structural Analysis", "Historic Preservation", "Foundation Design"],
  images: [
    "/gallery/123 Main St.JPG",
    "/gallery/123 Main St - Interior.JPG", // You can add multiple images
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

1. Add the photo to `/public/gallery/`
2. Add just the filename to the `standaloneGalleryImages` array in `lib/projects-data.ts`:

```typescript
export const standaloneGalleryImages = [
  "123 Main St.JPG", // Add here
  "108 Tradd St.JPG",
  // ... other images
]
```

The photo will appear in the gallery but won't have a map marker until you create a full project entry.

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
  "/gallery/project-exterior.JPG",
  "/gallery/project-interior.JPG",
  "/gallery/project-detail.JPG",
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
  id: 10,
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
    "/gallery/5 East Battery - Exterior.JPG",
    "/gallery/5 East Battery - Foundation.JPG",
    "/gallery/5 East Battery - Interior Detail.JPG",
  ],
},
```

## Troubleshooting

**Map marker not showing?**
- Check coordinates are in [longitude, latitude] format
- Longitude should be negative for Charleston (around -79.xx)
- Latitude should be positive (around 32.xx)

**Photos not appearing?**
- Verify images are in `/public/gallery/` folder
- Check filename matches exactly (case-sensitive)
- Make sure path starts with `/gallery/`

**Changes not showing?**
- Save the file
- Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few seconds for the dev server to rebuild

## Need Help?

Contact your developer or refer to the project documentation.

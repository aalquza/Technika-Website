import type { Project } from "@/components/map"

/**
 * Centralized project database - All projects geocoded using Mapbox API
 * 
 * To add a new project:
 * 1. Add images to /public/gallery/ folder
 * 2. Run: node scripts/geocode.js "Address, Charleston, SC"
 * 3. Copy the coordinates from the output
 * 4. Add a new entry below with project details
 * 
 * The project will automatically appear:
 * - On the homepage map (first 10 projects)
 * - On the projects page map (all projects)  
 * - In the gallery (if images are provided)
 */

export const projects: Project[] = [
  {
    id: 1,
    name: "0 Gibbes Street",
    location: "0 Gibbes Street, Charleston, SC 29401",
    coordinates: [-79.934816, 32.772244],
    type: "Historic Preservation",
    year: "2023",
    description: "Structural assessment and restoration of historic building in Charleston's French Quarter.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/0 Gibbes St.JPG"],
  },
  {
    id: 2,
    name: "10 Tradd Street",
    location: "10 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.927883, 32.775186],
    type: "Historic Preservation",
    year: "2023",
    description: "Comprehensive structural evaluation of historic South of Broad residence.",
    services: ["Structural Analysis", "Building Inspections", "Historic Preservation"],
    images: ["/gallery/projects/10 Tradd St.JPG"],
  },
  {
    id: 3,
    name: "104 Murray Boulevard",
    location: "104 Murray Boulevard, Charleston, SC 29401",
    coordinates: [-79.942514, 32.772873],
    type: "Residential",
    year: "2023",
    description: "Structural engineering for waterfront property on The Battery.",
    services: ["Structural Analysis", "Foundation Design"],
    images: ["/gallery/projects/104 Murray Blvd.JPG"],
  },
  {
    id: 4,
    name: "108 Tradd Street",
    location: "108 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.933725, 32.77454],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic building structural assessment and renovation planning.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/108 Tradd St.JPG"],
  },
  {
    id: 5,
    name: "11 King Street",
    location: "11 King Street, Charleston, SC 29401",
    coordinates: [-79.932263, 32.771317],
    type: "Commercial",
    year: "2023",
    description: "Commercial building structural evaluation on historic King Street.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/11 King St.JPG"],
  },
  {
    id: 6,
    name: "112 Gordon Street",
    location: "112 Gordon Street, Charleston, SC 29403",
    coordinates: [-79.95945, 32.80398],
    type: "Residential",
    year: "2023",
    description: "Residential structural engineering services.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/112 Gordon St.JPG"],
  },
  {
    id: 7,
    name: "124 Rutledge Avenue",
    location: "124 Rutledge Avenue, Charleston, SC 29401",
    coordinates: [-79.94348, 32.78321],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic property structural assessment and restoration.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/124 Rutledge Ave.JPG"],
  },
  {
    id: 8,
    name: "129 Tradd Street",
    location: "129 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.935146, 32.773562],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic residence structural evaluation.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/129 Tradd St.JPG"],
  },
  {
    id: 9,
    name: "141 Beaufain Street",
    location: "141 Beaufain Street, Charleston, SC 29401",
    coordinates: [-79.94446, 32.776922],
    type: "Residential",
    year: "2023",
    description: "Residential structural engineering and analysis.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/141 Beaufain St.JPG"],
  },
  {
    id: 10,
    name: "15 Meeting Street",
    location: "15 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.93062, 32.77161],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic downtown Charleston property structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/15 Meeting St.JPG"],
  },
  {
    id: 11,
    name: "161 Rutledge Avenue",
    location: "161 Rutledge Avenue, Charleston, SC 29403",
    coordinates: [-79.94551, 32.785773],
    type: "Residential",
    year: "2023",
    description: "Residential property structural engineering.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/161 Rutledge Ave.JPG"],
  },
  {
    id: 12,
    name: "162 Wentworth Street",
    location: "162 Wentworth Street, Charleston, SC 29401",
    coordinates: [-79.941591, 32.779626],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic building structural evaluation.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/162 Wentworth St.JPG"],
  },
  {
    id: 13,
    name: "163 Rutledge Avenue",
    location: "163 Rutledge Avenue, Charleston, SC 29403",
    coordinates: [-79.945654, 32.786007],
    type: "Residential",
    year: "2023",
    description: "Residential structural engineering services.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/163 Rutledge Ave.JPG"],
  },
  {
    id: 14,
    name: "169 Wentworth Street",
    location: "169 Wentworth Street, Charleston, SC 29401",
    coordinates: [-79.94206, 32.778991],
    type: "Residential",
    year: "2023",
    description: "Residential property structural assessment.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/169 Wentworth.JPG"],
  },
  {
    id: 15,
    name: "2 Lamboll Street",
    location: "2 Lamboll Street, Charleston, SC 29401",
    coordinates: [-79.931035, 32.771959],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic South of Broad property structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/2 Lamboll St.JPG"],
  },
  {
    id: 16,
    name: "2 Meeting Street",
    location: "2 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.930037, 32.770542],
    type: "Historic Preservation",
    year: "2023",
    description: "Iconic waterfront property structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/2 Meeting St.JPG"],
  },
  {
    id: 17,
    name: "20 Atlantic Street",
    location: "20 Atlantic Street, Charleston, SC 29401",
    coordinates: [-79.929927, 32.772158],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic residential structural evaluation.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/20 Atlantic St.JPG"],
  },
  {
    id: 18,
    name: "207 Rutledge Avenue",
    location: "207 Rutledge Avenue, Charleston, SC 29403",
    coordinates: [-79.946877, 32.788794],
    type: "Residential",
    year: "2023",
    description: "Residential structural engineering services.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/207 Rutledge Ave.JPG"],
  },
  {
    id: 19,
    name: "22 King Street",
    location: "22 King Street, Charleston, SC 29401",
    coordinates: [-79.931976, 32.772052],
    type: "Commercial",
    year: "2023",
    description: "Commercial property structural assessment on King Street.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/22 King St.JPG"],
  },
  {
    id: 20,
    name: "23 Tradd Street",
    location: "23 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.92845, 32.774885],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic South of Broad residence structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/23 Tradd St.JPG"],
  },
  {
    id: 21,
    name: "237 Gordon Street",
    location: "237 Gordon Street, Charleston, SC 29403",
    coordinates: [-79.964944, 32.801851],
    type: "Residential",
    year: "2023",
    description: "Residential property structural assessment.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/237 Gordon St.JPG"],
  },
  {
    id: 22,
    name: "25 Meeting Street",
    location: "25 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.93065, 32.77219],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic downtown property structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/25 Meeting St.JPG", "/gallery/25 Meeting St (2).JPG"],
  },
  {
    id: 23,
    name: "26 Church Street",
    location: "26 Church Street, Charleston, SC 29401",
    coordinates: [-79.92925, 32.771945],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic Church Street property structural evaluation.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/26 Church St.JPG"],
  },
  {
    id: 24,
    name: "28 Pitt Street",
    location: "28 Pitt Street, Charleston, SC 29401",
    coordinates: [-79.939205, 32.781517],
    type: "Residential",
    year: "2023",
    description: "Residential structural engineering services.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/28 Pitt St.JPG"],
  },
  {
    id: 25,
    name: "3 Gibbes Street",
    location: "3 Gibbes Street, Charleston, SC 29401",
    coordinates: [-79.934503, 32.771705],
    type: "Historic Preservation",
    year: "2023",
    description: "French Quarter historic property structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/3 Gibbes St.jpg"],
  },
  {
    id: 26,
    name: "33 King Street",
    location: "33 King Street, Charleston, SC 29401",
    coordinates: [-79.93244, 32.77269],
    type: "Commercial",
    year: "2023",
    description: "Commercial building structural engineering on King Street.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/33 King St.JPG"],
  },
  {
    id: 27,
    name: "34 Meeting Street",
    location: "34 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.930201, 32.772806],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic Meeting Street property structural evaluation.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/34 Meeting St.JPG"],
  },
  {
    id: 28,
    name: "37 Meeting Street",
    location: "37 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.93074, 32.773],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic downtown property structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/37 Meeting St.JPG"],
  },
  {
    id: 29,
    name: "41 King Street",
    location: "41 King Street, Charleston, SC 29401",
    coordinates: [-79.93246, 32.77313],
    type: "Commercial",
    year: "2023",
    description: "Commercial property structural engineering.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/41 King St.JPG"],
  },
  {
    id: 30,
    name: "45 Meeting Street",
    location: "45 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.930958, 32.773439],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic Meeting Street building structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/45 Meeting St.JPG"],
  },
  {
    id: 31,
    name: "45 Pitt Street",
    location: "45 Pitt Street, Charleston, SC 29401",
    coordinates: [-79.94049, 32.78315],
    type: "Residential",
    year: "2023",
    description: "Residential property structural engineering.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/45 Pitt St.JPG"],
  },
  {
    id: 32,
    name: "48 Murray Boulevard",
    location: "48 Murray Boulevard, Charleston, SC 29401",
    coordinates: [-79.937133, 32.770355],
    type: "Residential",
    year: "2023",
    description: "Waterfront property structural assessment.",
    services: ["Structural Analysis", "Foundation Design"],
    images: ["/gallery/projects/48 Murray Blvd.JPG"],
  },
  {
    id: 33,
    name: "5 Tradd Street",
    location: "5 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.927754, 32.774979],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic South of Broad residence structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/5 Tradd St.JPG"],
  },
  {
    id: 34,
    name: "50 Church Street",
    location: "50 Church Street, Charleston, SC 29401",
    coordinates: [-79.928731, 32.773297],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic Church Street property structural evaluation.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/50 Church St.JPG"],
  },
  {
    id: 35,
    name: "52 Legare Street",
    location: "52 Legare Street, Charleston, SC 29401",
    coordinates: [-79.93442, 32.775561],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic residential property structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/52 Legare St.JPG"],
  },
  {
    id: 36,
    name: "6 Legare Street",
    location: "6 Legare Street, Charleston, SC 29401",
    coordinates: [-79.93368, 32.77198],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic South of Broad property structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/6 Legare St.JPG"],
  },
  {
    id: 37,
    name: "63 King Street",
    location: "63 King Street, Charleston, SC 29401",
    coordinates: [-79.932981, 32.773955],
    type: "Commercial",
    year: "2023",
    description: "Commercial building structural assessment.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/63 King St.JPG"],
  },
  {
    id: 38,
    name: "69 Meeting Street",
    location: "69 Meeting Street, Charleston, SC 29401",
    coordinates: [-79.93124, 32.775505],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic downtown property structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/69 Meeting St.JPG"],
  },
  {
    id: 39,
    name: "70 King Street",
    location: "70 King Street, Charleston, SC 29401",
    coordinates: [-79.932324, 32.774285],
    type: "Commercial",
    year: "2023",
    description: "Commercial property on King Street structural evaluation.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/70 King St.JPG"],
  },
  {
    id: 40,
    name: "71 Church Street",
    location: "71 Church Street, Charleston, SC 29401",
    coordinates: [-79.929319, 32.774517],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic Church Street building structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/71 Church St.JPG"],
  },
  {
    id: 41,
    name: "71 King Street",
    location: "71 King Street, Charleston, SC 29401",
    coordinates: [-79.932631, 32.77435],
    type: "Commercial",
    year: "2023",
    description: "Commercial building structural engineering.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/71 King St.JPG"],
  },
  {
    id: 42,
    name: "73 Gordon Street",
    location: "73 Gordon Street, Charleston, SC 29403",
    coordinates: [-79.95739, 32.803968],
    type: "Residential",
    year: "2023",
    description: "Residential structural engineering services.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/73 Gordon St.JPG"],
  },
  {
    id: 43,
    name: "76 Pitt Street",
    location: "76 Pitt Street, Charleston, SC 29403",
    coordinates: [-79.94144, 32.785455],
    type: "Residential",
    year: "2023",
    description: "Residential property structural assessment.",
    services: ["Structural Analysis"],
    images: ["/gallery/projects/76 Pitt St.JPG"],
  },
  {
    id: 44,
    name: "83 Tradd Street",
    location: "83 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.931937, 32.774363],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic Tradd Street residence structural engineering.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/83 Tradd St.JPG"],
  },
  {
    id: 45,
    name: "84 King Street",
    location: "84 King Street, Charleston, SC 29401",
    coordinates: [-79.932228, 32.775109],
    type: "Commercial",
    year: "2023",
    description: "Commercial building on King Street structural evaluation.",
    services: ["Structural Analysis", "Commercial Buildings"],
    images: ["/gallery/projects/84 King St.JPG"],
  },
  {
    id: 46,
    name: "94 Tradd Street",
    location: "94 Tradd Street, Charleston, SC 29401",
    coordinates: [-79.93241, 32.77457],
    type: "Historic Preservation",
    year: "2023",
    description: "Historic residential property structural assessment.",
    services: ["Structural Analysis", "Historic Preservation"],
    images: ["/gallery/projects/94 Tradd St.JPG"],
  },
  {
    id: 47,
    name: "Crescent Addition",
    location: "Charleston, SC",
    coordinates: [-79.9311, 32.7765],
    type: "Residential Addition",
    year: "2024",
    description: "Residential addition project featuring modern design and structural enhancements.",
    services: ["Structural Design", "Architectural Coordination"],
    images: [
      "/gallery/featured-projects/crescent-addition/Crescent Addition 1.webp",
      "/gallery/featured-projects/crescent-addition/Crescent Addition 2.webp",
      "/gallery/featured-projects/crescent-addition/Crescent Addition 3.webp",
    ],
  },
  {
    id: 48,
    name: "Edisto Boardwalk",
    location: "Edisto Island, SC",
    coordinates: [-80.3216, 32.4829],
    type: "Coastal Infrastructure",
    year: "2024",
    description: "Boardwalk design and structural engineering for coastal environment.",
    services: ["Structural Design", "Coastal Engineering"],
    images: [
      "/gallery/featured-projects/edisto-boardwalk/Edisto Boardwalk.webp",
      "/gallery/featured-projects/edisto-boardwalk/Edisto Boardwalk 2.webp",
      "/gallery/featured-projects/edisto-boardwalk/Edisto Boardwalk 3.webp",
    ],
  },
  {
    id: 49,
    name: "Gibbes Street Building Envelope",
    location: "Gibbes Street, Charleston, SC",
    coordinates: [-79.9348, 32.7722],
    type: "Building Science",
    year: "2024",
    description: "Comprehensive building envelope assessment and restoration.",
    services: ["Building Science", "Building Envelope Assessment"],
    images: [
      "/gallery/featured-projects/gibbes-street-building-envelope/Gibbes Street Building Envelope 1.webp",
    ],
  },
  {
    id: 50,
    name: "King's Grant",
    location: "Charleston, SC",
    coordinates: [-79.9311, 32.7765],
    type: "Residential",
    year: "2024",
    description: "Comprehensive structural and MEP engineering for residential development.",
    services: ["Structural Design", "MEP Engineering"],
    images: [
      "/gallery/featured-projects/kings-grant/Kings Grant 1.webp",
      "/gallery/featured-projects/kings-grant/Kings Grant 2.webp",
      "/gallery/featured-projects/kings-grant/Kings Grant 3.webp",
    ],
  },
  {
    id: 51,
    name: "Meeting Street Residence",
    location: "Meeting Street, Charleston, SC",
    coordinates: [-79.9316, 32.7821],
    type: "Historic Preservation",
    year: "2024",
    description: "Historic residence structural renovation and preservation.",
    services: ["Structural Design", "Historic Preservation"],
    images: [
      "/gallery/featured-projects/meeting-st-residence/Meeting Str 1.webp",
      "/gallery/featured-projects/meeting-st-residence/Meeting Str 2.webp",
      "/gallery/featured-projects/meeting-st-residence/Meeting Str 3.webp",
      "/gallery/featured-projects/meeting-st-residence/Meeting Str 4.webp",
      "/gallery/featured-projects/meeting-st-residence/Meeting Str 5.webp",
    ],
  },
]

/**
 * Gallery images without full project data
 * Technical photos organized by category for service pages and general gallery
 * Note: HEIC format files are excluded as they don't render in web browsers
 */
export const standaloneGalleryImages: string[] = [
  // Electrical Systems
  "/gallery/electrical/electrical-panel-construction.jpg",
  "/gallery/electrical/electrical-panel-layout.jpg",
  "/gallery/electrical/electrical-panel-layout-2.jpg",
  "/gallery/electrical/electrical-wiring-layout.jpg",
  
  // Mechanical Systems
  "/gallery/mechanical/hvac-installation.jpg",
  
  // Structural Engineering
  "/gallery/structural/support-beam-layout.png",
  
  // Building Science
  "/gallery/building-science/rotting-wood-inspection.jpg",
]

/**
 * Get all gallery images from the projects database
 */
export function getAllGalleryImages(): string[] {
  const images = new Set<string>()
  
  projects.forEach(project => {
    project.images.forEach(image => {
      images.add(image)
    })
  })
  
  return Array.from(images)
}

/**
 * Get project by ID
 */
export function getProjectById(id: number): Project | undefined {
  return projects.find(p => p.id === id)
}

/**
 * Get all unique project types
 */
export function getProjectTypes(): string[] {
  const types = new Set<string>()
  projects.forEach(project => {
    types.add(project.type)
  })
  return Array.from(types)
}

/**
 * Filter projects by type
 */
export function getProjectsByType(type: string): Project[] {
  return projects.filter(p => p.type === type)
}

/**
 * Filter projects by year
 */
export function getProjectsByYear(year: string): Project[] {
  return projects.filter(p => p.year === year)
}

/**
 * Search projects by name or location
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase()
  return projects.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.location.toLowerCase().includes(lowerQuery)
  )
}


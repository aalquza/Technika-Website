type RouteImageProfile = {
  prefix: string
  heroImages: string[]
  warmupImages?: string[]
}

// Add new pages here to automatically participate in homepage and route-level warmup.
const routeImageProfiles: RouteImageProfile[] = [
  {
    prefix: "/services/structural-design",
    heroImages: ["/Structural%20Design.webp"],
    warmupImages: [
      "/gallery/structural/support-beam-layout.webp",
      "/gallery/structural/foundation-construction.webp",
      "/gallery/structural/structural-components.webp",
    ],
  },
  {
    prefix: "/services/mechanical-design",
    heroImages: ["/gallery/mechanical/hvac-installation.webp"],
    warmupImages: [
      "/gallery/mechanical/mechanical-plans-1.webp",
      "/gallery/mechanical/mechanical-plans-2.webp",
      "/gallery/mechanical/Mechanical%20Ductwork.webp",
    ],
  },
  {
    prefix: "/services/electrical-design",
    heroImages: ["/gallery/electrical/electrical-wiring-layout.webp"],
    warmupImages: [
      "/gallery/electrical/electrical-panel-construction.webp",
      "/gallery/electrical/electrical-panel-layout.webp",
      "/gallery/electrical/electrical-panel-layout-alternate.webp",
    ],
  },
  {
    prefix: "/services/building-science",
    heroImages: ["/Building%20Science.webp"],
    warmupImages: ["/gallery/building-science/rotting-wood-inspection.webp"],
  },
  {
    prefix: "/services/engineering-consulting",
    heroImages: ["/Engineering%20Consulting.webp"],
    warmupImages: [
      "/gallery/featured-projects/allstar-pediatrics/allstar-pediatrics-main.webp",
      "/gallery/construction/engineering-drawings-site.webp",
      "/gallery/construction/foundation-construction.webp",
    ],
  },
  {
    prefix: "/projects",
    heroImages: ["/Projects.webp"],
    warmupImages: [
      "/gallery/projects/0 Gibbes St.webp",
      "/gallery/projects/10 Tradd St.webp",
      "/gallery/projects/104 Murray Blvd.webp",
    ],
  },
  {
    prefix: "/about/team",
    heroImages: ["/Meet the team.png"],
    warmupImages: [
      "/Team/chris.webp",
      "/Team/LINZ.webp",
      "/Team/gabrielle-1.webp",
      "/Team/justin-1.webp",
      "/Team/mike-7.webp",
      "/Team/Evan Dog 2.webp",
      "/Team/Evan Dog 1.webp",
    ],
  },
  {
    prefix: "/about/company",
    heroImages: ["/Meet the team.png"],
  },
  {
    prefix: "/contact",
    heroImages: ["/Contact%20Us.webp"],
    warmupImages: ["/Megget Office.png"],
  },
]

const dedupe = (images: string[]) => Array.from(new Set(images))

const sortByPrefixLengthDesc = (a: RouteImageProfile, b: RouteImageProfile) => b.prefix.length - a.prefix.length

const sortedProfiles = [...routeImageProfiles].sort(sortByPrefixLengthDesc)

export const homepageHeaderWarmupImages = dedupe(sortedProfiles.flatMap((profile) => profile.heroImages))

export const getRouteWarmupImages = (pathname: string, pageHeroImage?: string) => {
  const match = sortedProfiles.find((profile) => pathname.startsWith(profile.prefix))
  const routeImages = match ? [...match.heroImages, ...(match.warmupImages || [])] : []
  return dedupe([...(pageHeroImage ? [pageHeroImage] : []), ...routeImages])
}

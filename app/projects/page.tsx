// building icon is resolved client-side in Hero by string key
import type { Project } from "@/components/map"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectsApp from "@/components/projects/ProjectsApp"

const projects: Project[] = [
	{
		id: 1,
		name: "Historic Charleston Foundation Building",
		location: "40 E Bay St, Charleston, SC 29401",
		coordinates: [-79.9311, 32.7765],
		type: "Historic Preservation",
		year: "2023",
		description: "Structural assessment and restoration of historic foundation building in downtown Charleston.",
		services: ["Structural Analysis", "Historic Preservation", "Foundation Design"],
		images: [
			"/placeholder.svg?height=300&width=400&text=Historic+Foundation+Building",
			"/placeholder.svg?height=300&width=400&text=Foundation+Interior",
			"/placeholder.svg?height=300&width=400&text=Restoration+Work",
		],
	},
	{
		id: 2,
		name: "Rainbow Row Structural Analysis",
		location: "83-107 E Bay St, Charleston, SC 29401",
		coordinates: [-79.9292, 32.7772],
		type: "Structural Analysis",
		year: "2023",
		description: "Comprehensive structural evaluation of iconic Rainbow Row buildings.",
		services: ["Structural Analysis", "Building Inspections", "Historic Preservation"],
		images: [
			"/placeholder.svg?height=300&width=400&text=Rainbow+Row+Exterior",
			"/placeholder.svg?height=300&width=400&text=Structural+Assessment",
			"/placeholder.svg?height=300&width=400&text=Historic+Details",
		],
	},
	{
		id: 3,
		name: "Charleston City Market Renovation",
		location: "188 N Market St, Charleston, SC 29401",
		coordinates: [-79.9317, 32.7809],
		type: "Commercial Building",
		year: "2022",
		description: "Structural upgrades for historic market building renovation.",
		services: ["Commercial Buildings", "Structural Analysis", "Historic Preservation"],
		images: [
			"/placeholder.svg?height=300&width=400&text=City+Market+Exterior",
			"/placeholder.svg?height=300&width=400&text=Market+Interior",
			"/placeholder.svg?height=300&width=400&text=Renovation+Progress",
		],
	},
]

export default function ProjectsPage(props: any) {
	// Read the search param on the server and pass an initialSelectedId to the client component.
	const searchParams = props?.searchParams as { selected?: string } | undefined
	const rawSelected = searchParams?.selected
	const initialSelectedId = rawSelected ? parseInt(rawSelected, 10) : undefined

	return (
		<div className="min-h-screen bg-white">
			<Hero
				title="Our Projects"
				subtitle="Explore our portfolio of structural engineering projects across Charleston and the Lowcountry"
				icon="building"
				imageSrc="/Projects.jpg"
			/>

			<div className="container mx-auto px-4 py-12">
				<ProjectsApp projects={projects} initialSelectedId={Number.isNaN(initialSelectedId as number) ? undefined : initialSelectedId} />
			</div>

			<Footer />
		</div>
	)
}

// building icon is resolved client-side in Hero by string key
import type { Project } from "@/components/map"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectsApp from "@/components/projects/ProjectsApp"
import ProjectGallery from "@/components/projects/ProjectGallery"
import { projects } from "@/lib/projects-data"

export default async function ProjectsPage(props: any) {
	// Read the search param on the server and pass an initialSelectedId to the client component.
	const searchParams = await props?.searchParams
	const rawSelected = searchParams?.selected
	const initialSelectedId = rawSelected ? parseInt(rawSelected, 10) : undefined

	return (
		<div className="min-h-screen bg-white">
			<Hero
				title="Our Projects"
				subtitle="Explore our portfolio of structural engineering projects across Charleston and the Lowcountry"
				icon="building"
				imageSrc="/Projects.webp"
			/>

			<div className="container mx-auto px-4 py-12">
				<ProjectsApp projects={projects} initialSelectedId={Number.isNaN(initialSelectedId as number) ? undefined : initialSelectedId} />
			</div>

			<ProjectGallery />

			<Footer />
		</div>
	)
}

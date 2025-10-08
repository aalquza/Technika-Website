"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Building } from "lucide-react"
import Map, { type Project } from "@/components/map"
import Footer from "@/components/footer"

const projects: Project[] = [
	{
		id: 1,
		name: "Historic Charleston Foundation Building",
		location: "40 E Bay St, Charleston, SC 29401",
		coordinates: [-79.9311, 32.7765],
		type: "Historic Preservation",
		year: "2023",
		description:
			"Structural assessment and restoration of historic foundation building in downtown Charleston.",
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

const serviceColors: { [key: string]: string } = {
	"Structural Analysis": "bg-blue-100 text-blue-800",
	"Building Inspections": "bg-green-100 text-green-800",
	"Historic Preservation": "bg-purple-100 text-purple-800",
	"Commercial Buildings": "bg-orange-100 text-orange-800",
	"Residential Projects": "bg-pink-100 text-pink-800",
	"Foundation Design": "bg-yellow-100 text-yellow-800",
}

export default function ProjectsPage() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const searchParams = useSearchParams()

	useEffect(() => {
		const selected = searchParams?.get("selected")
		if (selected) {
			const id = parseInt(selected, 10)
			const match = projects.find((p) => p.id === id)
			if (match) {
				setSelectedProject(match)
				setCurrentImageIndex(0)
			}
		}
	}, [searchParams])

	const handleProjectSelect = (project: Project) => {
		setSelectedProject(project)
		setCurrentImageIndex(0)
	}

	const nextImage = () => {
		if (selectedProject?.images && selectedProject.images.length > 0) {
			setCurrentImageIndex((prev) =>
				prev === selectedProject.images.length - 1 ? 0 : prev + 1
			)
		}
	}

	const prevImage = () => {
		if (selectedProject?.images && selectedProject.images.length > 0) {
			setCurrentImageIndex((prev) =>
				prev === 0 ? selectedProject.images.length - 1 : prev - 1
			)
		}
	}

	return (
		<div className="min-h-screen bg-white">
			<section className="relative bg-slate-800 text-white py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
						<p className="text-xl text-gray-300 mb-8">
							Explore our portfolio of structural engineering projects across
							Charleston and the Lowcountry
						</p>
						<p className="text-lg text-yellow-400">
							Click on map markers to view project details and photos
						</p>
					</div>
				</div>
			</section>

			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div>
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Project Locations
						</h2>
						<p className="text-gray-600 mb-6">
							Click on any marker to view project details and photos
						</p>
						<div className="h-96">
							<Map projects={projects} onSelectProject={handleProjectSelect} highlightedId={selectedProject?.id} />
						</div>
					</div>

					<div>
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Project Details
						</h2>
						{selectedProject ? (
							<div className="bg-white rounded-lg shadow-lg overflow-hidden">
								<div className="relative h-64 bg-gray-200">
									<img
										src={
											selectedProject.images?.[currentImageIndex] ??
											"/placeholder.svg"
										}
										alt={`${selectedProject.name} - Image ${
											currentImageIndex + 1
										}`}
										className="w-full h-full object-cover"
									/>

									{selectedProject.images &&
										selectedProject.images.length > 1 && (
											<>
												<button
													onClick={prevImage}
													className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
												>
													<ChevronLeft className="w-5 h-5" />
												</button>
												<button
													onClick={nextImage}
													className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
												>
													<ChevronRight className="w-5 h-5" />
												</button>
											</>
										)}

									<div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
										{currentImageIndex + 1} /{" "}
										{selectedProject.images?.length}
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{selectedProject.name}
									</h3>

									<div className="flex items-center text-gray-600 mb-2">
										<MapPin className="w-4 h-4 mr-2" />
										<span className="text-sm">{selectedProject.location}</span>
									</div>

									<div className="flex items-center text-gray-600 mb-2">
										<Building className="w-4 h-4 mr-2" />
										<span className="text-sm">{selectedProject.type}</span>
									</div>

									<div className="flex items-center text-gray-600 mb-4">
										<Calendar className="w-4 h-4 mr-2" />
										<span className="text-sm">{selectedProject.year}</span>
									</div>

									<div className="mb-4">
										<h4 className="text-sm font-semibold text-gray-900 mb-2">
											Services Provided:
										</h4>
										<div className="flex flex-wrap gap-2">
											{selectedProject.services?.map((service, index) => (
												<span
													key={index}
													className={`text-xs px-2 py-1 rounded-full font-medium ${
														serviceColors[service] ||
														"bg-gray-100 text-gray-800"
													}`}
												>
													{service}
												</span>
											))}
										</div>
									</div>

									<p className="text-gray-700">
										{selectedProject.description}
									</p>
								</div>
							</div>
						) : (
							<div className="bg-gray-50 rounded-lg p-8 text-center">
								<MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Select a Project
								</h3>
								<p className="text-gray-600">
									Click on any marker on the map to view detailed information
									about that project.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

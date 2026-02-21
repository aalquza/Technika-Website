"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Building } from "lucide-react"
import type { Project } from "@/components/map"
import { getPrivateAddress } from "@/lib/address-utils"
const Map = dynamic(() => import("@/components/map"), { ssr: false }) as any

const serviceColors: { [key: string]: string } = {
  "Structural Analysis": "bg-blue-100 text-blue-800",
  "Building Inspections": "bg-green-100 text-green-800",
  "Historic Preservation": "bg-purple-100 text-purple-800",
  "Commercial Buildings": "bg-orange-100 text-orange-800",
  "Residential Projects": "bg-pink-100 text-pink-800",
  "Foundation Design": "bg-yellow-100 text-yellow-800",
}

type Props = {
  projects: Project[]
  initialSelectedId?: number
}

export default function ProjectsApp({ projects, initialSelectedId }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    if (typeof initialSelectedId === "number") {
      return projects.find((p) => p.id === initialSelectedId) ?? null
    }
    return null
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (selectedProject) setCurrentImageIndex(0)
  }, [selectedProject])

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Locations</h2>
        <p className="text-gray-600 mb-6">Click on any marker to view project details and photos</p>
        <div className="h-[600px] rounded-lg overflow-hidden">
          <Map projects={projects} onSelectProject={handleProjectSelect} highlightedId={selectedProject?.id} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
        <p className="text-gray-600 mb-6">View photos and information for selected projects</p>
        {selectedProject ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 bg-gray-200">
              <Image
                src={selectedProject.images?.[currentImageIndex] ?? "/placeholder.svg"}
                alt={`${getPrivateAddress(selectedProject.name)} - Image ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {selectedProject.images && selectedProject.images.length > 1 && (
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
                {currentImageIndex + 1} / {selectedProject.images?.length}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{getPrivateAddress(selectedProject.name)}</h3>

              <div className="flex items-center gap-4 text-gray-600 mb-4 flex-wrap">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{getPrivateAddress(selectedProject.location)}</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="text-sm">{selectedProject.type}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{selectedProject.year}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Provided:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services?.map((service, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        (serviceColors as any)[service] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Project</h3>
            <p className="text-gray-600">Click on any marker on the map to view detailed information about that project.</p>
          </div>
        )}
      </div>
    </div>
  )
}

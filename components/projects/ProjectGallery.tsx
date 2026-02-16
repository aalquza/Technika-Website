"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { projects, standaloneGalleryImages } from "@/lib/projects-data"
import { getPrivateAddress } from "@/lib/address-utils"

// Shuffle function to randomize array order
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Combine all gallery images (both have /gallery/ prefix already)
const projectImages = projects.flatMap(project => project.images)
const allImages = [...projectImages, ...standaloneGalleryImages]

export default function ProjectGallery() {
  // Initialize with non-shuffled images to match server render, then shuffle on client
  const [galleryImages, setGalleryImages] = useState(allImages)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Shuffle images only on client-side after mount to avoid hydration mismatch
  useEffect(() => {
    setGalleryImages(shuffleArray(allImages))
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
      )
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return
      
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  const getImageTitle = (imagePath: string) => {
    // Extract just the filename from the full path
    const filename = imagePath.split('/').pop() || ''
    
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.(JPG|jpg|webp|png|PNG|HEIC|heic)$/i, '')
    
    // Check if it's a street address (projects folder)
    if (imagePath.includes('/projects/')) {
      // Apply privacy filter to remove house numbers
      return getPrivateAddress(nameWithoutExt)
    }
    
    // Check if it's a featured project
    if (imagePath.includes('/featured-projects/')) {
      // Extract project name from folder and format nicely
      const parts = imagePath.split('/')
      const projectFolder = parts[parts.length - 2] // Get folder name
      // Convert kebab-case to Title Case
      return projectFolder
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
    
    // For technical photos (electrical, mechanical, etc.)
    if (imagePath.includes('/electrical/') || 
        imagePath.includes('/mechanical/') || 
        imagePath.includes('/structural/') ||
        imagePath.includes('/building-science/') ||
        imagePath.includes('/construction/')) {
      // Convert filename to readable format
      return nameWithoutExt
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
    
    // Default: just clean up the filename
    return nameWithoutExt
  }

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Project Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              A visual showcase of our structural engineering projects across Charleston
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={getImageTitle(image)}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  quality={90}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">
                      {getImageTitle(image)}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 text-white hover:text-yellow-400 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 text-white hover:text-yellow-400 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt={getImageTitle(galleryImages[selectedImageIndex])}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-lg sm:text-xl font-medium mb-2">
                  {getImageTitle(galleryImages[selectedImageIndex])}
                </p>
                <p className="text-gray-400 text-sm">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import React, { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building,
  Building2,
  Shield,
  Home,
  FocusIcon as Foundation,
  Search,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Calculator,
  Wind,
  Zap,
  Microscope,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import type { Project } from "@/components/map"
const Map = dynamic(() => import("@/components/map"), { ssr: false }) as any
import Footer from "@/components/footer"
import { projects } from "@/lib/projects-data"

export default function TechnikaHomepage() {
  const router = useRouter()

  // Set a gentle slow-down to 0.85x for the intro video to reduce perceived speed without choppiness
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      try {
        v.playbackRate = 0.85;
      } catch (e) {
        // ignore
      }
    };
    v.addEventListener('loadedmetadata', onMeta);
    onMeta();
    return () => v.removeEventListener('loadedmetadata', onMeta);
  }, []);

  const services = [
    {
      title: "Structural Design",
      description: "Complete structural engineering services for new construction, renovations, and additions.",
      icon: Calculator,
      href: "/services/structural-design",
    },
    {
      title: "Mechanical Design",
      description: "HVAC system design, energy efficiency solutions, and mechanical engineering services.",
      icon: Wind,
      href: "/services/mechanical-design",
    },
    {
      title: "Electrical Design",
      description: "Electrical system design, power distribution, and lighting design for all project types.",
      icon: Zap,
      href: "/services/electrical-design",
    },
    {
      title: "Building Science",
      description: "Building envelope consulting, energy analysis, and performance optimization.",
      icon: Microscope,
      href: "/services/building-science",
    },
    {
      title: "Engineering Consulting",
      description: "Expert engineering consultation for complex projects and specialized requirements.",
      icon: Lightbulb,
      href: "/services/engineering-consulting",
    },
  ]
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-slate-800 text-white py-20 md:py-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-800/40 to-slate-800/30"></div>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
          src="/Technika Intro Page Video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Engineering Excellence in <span className="text-yellow-400">Charleston</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto px-2">
              Premier structural engineering and design firm specializing in historic preservation, commercial
              buildings, and residential projects throughout South Carolina.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">100+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">100+</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfied Clients</div>
              </div>
            </div>

            <p className="text-base sm:text-lg font-semibold text-yellow-400 mb-6 sm:mb-8">Precision • Innovation • Excellence</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
              <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-6 py-3 sm:px-4 sm:py-2 font-medium transition-colors rounded-md inline-flex items-center w-full sm:w-auto justify-center text-center">
                Start Your Project
              </Link>
              <a href="tel:843-580-3769" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-6 py-3 sm:px-4 sm:py-2 font-medium flex items-center justify-center gap-2 bg-transparent rounded-md transition-colors w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                843-580-3769
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Comprehensive structural engineering solutions for residential, commercial, and historic properties
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="block w-full"
              >
                <Card className="w-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer h-full flex flex-col rounded-2xl overflow-hidden group">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={
                        service.title === 'Structural Design' ? '/Structural%20Design.webp' :
                        service.title === 'Mechanical Design' ? '/Mechanical%20Design.webp' :
                        service.title === 'Electrical Design' ? '/Electrical%20Design.webp' :
                        service.title === 'Building Science' ? '/Building%20Science.webp' :
                        service.title === 'Engineering Consulting' ? '/Engineering%20Consulting.webp' :
                        '/placeholder.svg?height=200&width=400&text=' + encodeURIComponent(service.title)
                      }
                      alt={service.title}
                      width={400}
                      height={300}
                      priority={index < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/20"></div>
                  </div>
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 line-clamp-3">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Map Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Our Projects Across the Southeast</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Explore our engineering projects from Charleston to Atlanta and throughout the region
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
            <div className="h-64 sm:h-80 md:h-96 mb-4 sm:mb-6">
              <Map
                projects={projects as Project[]}
                onSelectProject={(project: Project) => {
                  router.push(`/projects?selected=${project.id}`)
                }}
              />
            </div>
            {/* Removed inline project info on homepage — marker clicks navigate to the Projects page */}
            <div className="text-center mt-6 sm:mt-8">
              <Link href="/projects" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-6 py-3 sm:px-4 sm:py-2 font-medium transition-colors rounded-md inline-flex items-center justify-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Why Choose Technika</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Our team brings decades of experience and specialized knowledge to every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Senior Engineering Team",
                description: "15+ years experience with Charleston projects and local building codes",
              },
              {
                title: "Specialized Knowledge",
                description: "Coastal engineering, historic preservation, and seismic analysis expertise",
              },
              {
                title: "Continuing Education",
                description: "Regular training on latest codes, technologies, and methodologies",
              },
              {
                title: "Professional Credentials",
                description: "Licensed Professional Engineers in South Carolina",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

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

  // Sample projects for the homepage map (same shape used on Projects page)
  const projects: Array<any> = [
    {
      id: 1,
      name: "Historic Charleston Foundation Building",
      location: "40 E Bay St, Charleston, SC 29401",
      coordinates: [-79.9311, 32.7765],
      type: "Historic Preservation",
      year: "2023",
      description: "Structural assessment and restoration of historic foundation building in downtown Charleston.",
      services: ["Historic Preservation", "Foundation Design"],
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
          preload="auto"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Engineering Excellence in <span className="text-yellow-400">Charleston</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Premier structural engineering and design firm specializing in historic preservation, commercial
              buildings, and residential projects throughout South Carolina.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-gray-400">Satisfied Clients</div>
              </div>
            </div>

            <p className="text-lg font-semibold text-yellow-400 mb-8">Precision • Innovation • Excellence</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-500 px-8 py-3 text-lg font-semibold">
                  Start Your Project
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg font-semibold flex items-center gap-2 bg-transparent"
              >
                <Phone className="h-5 w-5" />
                843-580-3769
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive structural engineering solutions for residential, commercial, and historic properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="block"
              >
                <Card className="w-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer h-full aspect-square flex flex-col rounded-2xl overflow-hidden group">
                  <div className="relative h-1/2 overflow-hidden min-h-[8rem] max-h-[14rem] md:min-h-[10rem] md:max-h-[16rem]">
                    <Image
                      src={
                        service.title === 'Structural Design' ? '/Structural%20Design.jpg' :
                        service.title === 'Mechanical Design' ? '/Mechanical%20Design.jpg' :
                        service.title === 'Electrical Design' ? '/Electrical%20Design.jpg' :
                        service.title === 'Building Science' ? '/Building%20Science.jpg' :
                        service.title === 'Engineering Consulting' ? '/Engineering%20Consulting.jpg' :
                        '/placeholder.svg?height=200&width=400&text=' + encodeURIComponent(service.title)
                      }
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/20"></div>
                  </div>
                  <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                    <service.icon className="h-16 w-16 text-yellow-400 mb-6 mx-auto" />
                    <h3
                      className="text-2xl font-semibold text-slate-900 mb-3"
                      style={{
                        display: '-webkit-box' as any,
                        WebkitLineClamp: 2 as any,
                        WebkitBoxOrient: 'vertical' as any,
                        overflow: 'hidden' as any,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-slate-600 mb-4 min-h-[4.5rem]"
                      style={{
                        display: '-webkit-box' as any,
                        WebkitLineClamp: 3 as any,
                        WebkitBoxOrient: 'vertical' as any,
                        overflow: 'hidden' as any,
                      }}
                    >
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
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Projects Across the Southeast</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our engineering projects from Charleston to Atlanta and throughout the region
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="h-96 mb-6">
              <Map
                projects={projects as Project[]}
                onSelectProject={(project: Project) => {
                  router.push(`/projects?selected=${project.id}`)
                }}
              />
            </div>
            {/* Removed inline project info on homepage — marker clicks navigate to the Projects page */}
            <div className="text-center mt-8">
              <Link href="/projects">
                <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Technika</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings decades of experience and specialized knowledge to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="text-center p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

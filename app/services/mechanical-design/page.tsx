"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getPrivateAddress } from "@/lib/address-utils"
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Wind,
  Thermometer,
  Droplets,
  Zap,
  Leaf,
  Settings,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function MechanicalDesignPage() {
  // Layout provides the global Navbar; page-level nav state removed

  const services = [
    {
      icon: Wind,
      title: "HVAC System Design",
      description:
        "Complete heating, ventilation, and air conditioning system design for optimal comfort and efficiency.",
    },
    {
      icon: Thermometer,
      title: "Energy Modeling",
      description: "Advanced energy analysis and modeling to optimize building performance and reduce operating costs.",
    },
    {
      icon: Droplets,
      title: "Plumbing Design",
      description: "Comprehensive plumbing system design including water supply, drainage, and specialty systems.",
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Green building solutions and renewable energy integration for environmentally conscious projects.",
    },
    {
      icon: Settings,
      title: "Building Automation",
      description: "Smart building controls and automation systems for enhanced efficiency and user comfort.",
    },
    {
      icon: Zap,
      title: "Equipment Selection",
      description: "Expert selection and specification of mechanical equipment for optimal performance and longevity.",
    },
  ]

  const projects = [
    {
      title: "Historic Building HVAC Retrofit",
      location: "108 Tradd Street, Charleston, SC 29401",
      description:
        "Complete HVAC system upgrade for a historic building while preserving architectural integrity and improving energy efficiency.",
      image: "/gallery/projects/108 Tradd St.webp",
      services: ["HVAC System Design", "Energy Modeling"],
    },
    {
      title: "Residential Mechanical Systems",
      location: "104 Murray Boulevard, Charleston, SC 29401",
      description:
        "Comprehensive mechanical systems for waterfront residence with advanced climate control and humidity management for coastal environment.",
      image: "/gallery/projects/104 Murray Blvd.webp",
      services: ["HVAC System Design", "Equipment Selection"],
    },
    {
      title: "Commercial Building MEP",
      location: "124 Rutledge Avenue, Charleston, SC 29401",
      description: "Modern mechanical systems for commercial property with energy-efficient HVAC and smart building controls.",
      image: "/gallery/projects/124 Rutledge Ave.webp",
      services: ["HVAC System Design", "Building Automation"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
  {/* Navigation (provided by layout) */}

      <Hero
        title="Mechanical Design"
  subtitle="HVAC systems and mechanical engineering solutions optimized for Charleston&apos;s climate"
        icon={Wind}
        ctaText="Get a Quote"
        ctaHref="/contact"
  imageSrc="/Mechanical%20Design.webp"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mechanical Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mechanical engineering solutions designed for efficiency, comfort, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Technika for Mechanical Design?</h2>
              <p className="text-xl text-gray-600">
                Our expertise in Charleston&apos;s humid subtropical climate and energy efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Climate-Optimized Design</h3>
                    <p className="text-gray-600">
                      Systems specifically designed for Charleston&apos;s hot, humid summers and mild winters with optimal
                      dehumidification.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Energy Efficiency Focus</h3>
                    <p className="text-gray-600">
                      Advanced energy modeling and high-efficiency equipment selection to minimize operating costs and
                      environmental impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Historic Building Expertise</h3>
                    <p className="text-gray-600">
                      Specialized solutions for integrating modern HVAC systems into historic buildings without
                      compromising architectural integrity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Smart Building Integration</h3>
                    <p className="text-gray-600">
                      Advanced building automation and control systems for optimal comfort, efficiency, and remote
                      monitoring capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Sustainable Solutions</h3>
                    <p className="text-gray-600">
                      Green building technologies including geothermal systems, energy recovery, and renewable energy
                      integration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Analysis</h3>
                    <p className="text-gray-600">
                      Detailed load calculations, energy modeling, and system optimization to ensure peak performance
                      and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recent Mechanical Design Projects</h2>
            <p className="text-xl text-gray-600">
              Examples of our mechanical engineering work across different building types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{getPrivateAddress(project.location)}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mechanical Systems Gallery</h2>
            <p className="text-xl text-gray-600">
              Professional HVAC installations and mechanical systems from our projects
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/mechanical/hvac-installation.webp"
                alt="Final HVAC Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Building&apos;s Mechanical Systems?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your mechanical design needs and discover how we can improve your building&apos;s
            efficiency and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-8 py-3 font-medium transition-colors rounded-md inline-flex items-center justify-center w-full sm:w-auto">
              Get Started
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-lg bg-transparent w-full"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


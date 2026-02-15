"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getPrivateAddress } from "@/lib/address-utils"
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Microscope,
  Thermometer,
  Droplets,
  Wind,
  Leaf,
  BarChart3,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function BuildingSciencePage() {
  // Layout provides the global Navbar; page-level nav state removed

  const services = [
    {
      icon: Thermometer,
      title: "Energy Analysis",
      description: "Comprehensive energy modeling and performance analysis to optimize building efficiency.",
    },
    {
      icon: Droplets,
      title: "Moisture Management",
      description: "Advanced moisture control strategies to prevent mold, rot, and structural damage.",
    },
    {
      icon: Wind,
      title: "Indoor Air Quality",
      description: "Ventilation design and air quality assessment for healthy indoor environments.",
    },
    {
      icon: Leaf,
      title: "Building Envelope Design",
      description: "High-performance building envelope solutions for thermal comfort and energy efficiency.",
    },
    {
      icon: BarChart3,
      title: "Performance Testing",
      description: "Blower door testing, thermal imaging, and commissioning to verify building performance.",
    },
    {
      icon: Microscope,
      title: "Forensic Analysis",
      description: "Investigation and diagnosis of building performance issues and failure analysis.",
    },
  ]

  const projects = [
    {
      title: "Historic Charleston Home Energy Retrofit",
      location: "10 Tradd Street, Charleston, SC 29401",
      description:
        "Comprehensive building science analysis and retrofit of an 1890s Charleston single house to improve energy efficiency while preserving historic character.",
      image: "/gallery/projects/10 Tradd St.webp",
      services: ["Energy Analysis", "Building Envelope Design"],
    },
    {
      title: "Coastal Moisture Management Study",
      location: "162 Wentworth Street, Charleston, SC 29401",
      description:
        "Advanced moisture control design for beachfront home to prevent humidity issues and extend building lifespan in harsh coastal environment.",
      image: "/gallery/projects/162 Wentworth St.webp",
      services: ["Moisture Management", "Performance Testing"],
    },
    {
      title: "Commercial Building Performance Optimization",
      location: "36 Montagu Street, Charleston, SC 29401",
      description:
        "Building science analysis and improvements for office building to reduce energy costs by 30% and improve occupant comfort.",
      image: "/gallery/projects/36 Montagu St.webp",
      services: ["Energy Analysis", "Indoor Air Quality"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
  {/* Navigation (provided by layout) */}

      <Hero
        title="Building Science"
        subtitle="Building envelope and performance optimization through scientific analysis and testing"
        icon={Microscope}
        ctaText="Get a Quote"
        ctaHref="/contact"
  imageSrc="/Building%20Science.webp"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Building Science Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientific approach to building performance, energy efficiency, and occupant comfort
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Technika for Building Science?</h2>
              <p className="text-xl text-gray-600">
                Our scientific approach to building performance in Charleston&apos;s challenging climate
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Climate-Specific Expertise</h3>
                    <p className="text-gray-600">
                Deep understanding of Charleston&apos;s hot, humid climate and its impact on building performance and
                      durability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Testing Equipment</h3>
                    <p className="text-gray-600">
                      State-of-the-art diagnostic tools including thermal imaging, blower door testing, and moisture
                      meters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Historic Building Specialization</h3>
                    <p className="text-gray-600">
                      Expertise in improving performance of historic buildings while preserving architectural integrity
                      and character.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Energy Modeling Expertise</h3>
                    <p className="text-gray-600">
                      Advanced computer modeling to predict and optimize building energy performance before
                      construction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Moisture Control Mastery</h3>
                    <p className="text-gray-600">
                      Comprehensive moisture management strategies to prevent mold, rot, and structural damage in humid
                      conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Holistic Approach</h3>
                    <p className="text-gray-600">
                      Integration of building science principles with structural, mechanical, and electrical systems for
                      optimal performance.
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
            <h2 className="text-3xl font-bold mb-4">Recent Building Science Projects</h2>
            <p className="text-xl text-gray-600">
              Examples of our building science work improving performance and efficiency
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
            <h2 className="text-3xl font-bold mb-4">Building Science Gallery</h2>
            <p className="text-xl text-gray-600">
              Building envelope assessments and diagnostic work from our projects
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/building-science/rotting-wood-inspection.webp"
                alt="Wood Rot Inspection and Assessment"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Building&apos;s Performance?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your building science needs and discover how we can improve efficiency, comfort,
            and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-4 py-2 font-medium transition-colors rounded-md inline-flex items-center">
              Get Started
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-lg bg-transparent"
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


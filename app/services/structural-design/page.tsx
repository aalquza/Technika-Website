"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getPrivateAddress } from "@/lib/address-utils"
import {
  Building,
  Menu,
  Phone,
  Mail,
  MapPin,
  X,
  ChevronDown,
  Calculator,
  Home,
  Factory,
  Hammer,
  Shield,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function StructuralDesignPage() {
  // Navigation is provided by the root layout's Navbar; per-page nav removed

  const services = [
    {
      icon: Home,
      title: "New Construction",
      description: "Complete structural design for residential and commercial new construction projects.",
    },
    {
      icon: Hammer,
      title: "Renovations & Additions",
      description: "Structural modifications and additions to existing buildings with careful integration.",
    },
    {
      icon: Building,
      title: "Historic Preservation",
      description: "Specialized structural solutions for Charleston&apos;s historic buildings and landmarks.",
    },
    {
      icon: Calculator,
      title: "Foundation Design",
      description: "Custom foundation systems designed for Charleston's unique soil conditions.",
    },
    {
      icon: Shield,
      title: "Seismic Analysis",
      description: "Earthquake-resistant design and retrofitting for enhanced structural safety.",
    },
    {
      icon: Factory,
      title: "Commercial Structures",
      description: "Large-scale structural engineering for office buildings, retail, and industrial facilities.",
    },
  ]

  const projects = [
    {
      title: "Historic Charleston Single House Restoration",
      location: "0 Gibbes Street, Charleston, SC 29401",
      description:
        "Complete structural restoration of an 1850s Charleston single house including foundation stabilization and seismic retrofitting.",
      image: "/gallery/projects/0 Gibbes St.webp",
      services: ["Historic Preservation", "Foundation Design"],
    },
    {
      title: "Modern Residential Addition",
      location: "104 Murray Boulevard, Charleston, SC 29401",
      description:
        "Contemporary addition to a traditional home with seamless structural integration and enhanced seismic performance.",
      image: "/gallery/projects/104 Murray Blvd.webp",
      services: ["New Construction", "Seismic Analysis"],
    },
    {
      title: "Commercial Office Building",
      location: "11 King Street, Charleston, SC 29401",
      description:
        "Five-story mixed-use building with retail ground floor and office spaces above, designed for coastal wind loads.",
      image: "/gallery/projects/11 King St.webp",
      services: ["Commercial Structures", "Foundation Design"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (provided by layout) */}

      <Hero
        title="Structural Design"
        subtitle="Complete structural engineering services for new construction, renovations, and historic preservation"
        icon={Calculator}
        ctaText="Get a Quote"
        ctaHref="/contact"
  imageSrc="/Structural%20Design.webp"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Structural Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From foundation to roof, we provide comprehensive structural engineering solutions tailored to
              Charleston&apos;s unique conditions
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Technika for Structural Design?</h2>
              <p className="text-xl text-gray-600">
                Our expertise in Charleston&apos;s unique structural challenges sets us apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Historic Preservation Expertise</h3>
                    <p className="text-gray-600">
                      Specialized knowledge in preserving Charleston&apos;s architectural heritage while meeting modern
                      safety standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Coastal Engineering Experience</h3>
                    <p className="text-gray-600">
                      Deep understanding of coastal wind loads, flood requirements, and soil conditions specific to the
                      Lowcountry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Seismic Design Specialization</h3>
                    <p className="text-gray-600">
                      Advanced expertise in earthquake-resistant design and retrofitting for enhanced structural safety.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Project Management</h3>
                    <p className="text-gray-600">
                      Direct involvement from our principal engineer throughout the entire project lifecycle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Analysis Tools</h3>
                    <p className="text-gray-600">
                      State-of-the-art structural analysis software and modeling techniques for optimal design
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Code Compliance Assurance</h3>
                    <p className="text-gray-600">
                      Thorough knowledge of local building codes and permitting processes to ensure smooth project
                      approval.
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
            <h2 className="text-3xl font-bold mb-4">Recent Structural Design Projects</h2>
            <p className="text-xl text-gray-600">
              Examples of our structural engineering work across different project types
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
            <h2 className="text-3xl font-bold mb-4">Structural Engineering Gallery</h2>
            <p className="text-xl text-gray-600">
              Foundation work, support beams, and structural components from our projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/structural/support-beam-layout.webp"
                alt="2nd Floor Support Beam Layout"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/structural/foundation-construction.webp"
                alt="Foundation Construction"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/structural/foundation-construction-alternate.webp"
                alt="Foundation Construction Detail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/structural/structural-components.webp"
                alt="Structural Components"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/structural/wall-support-construction.webp"
                alt="Wall and Support Construction"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Structural Design Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your structural engineering needs and get a personalized quote.
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


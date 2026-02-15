"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getPrivateAddress } from "@/lib/address-utils"
import {
  Building,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Search,
  Lightbulb,
  FileText,
  Ruler,
  Microscope,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function EngineeringConsultingPage() {
  const services = [
    {
      icon: Search,
      title: "Feasibility Studies",
      description:
        "Comprehensive analysis of project viability, structural possibilities, and engineering constraints.",
    },
    {
      icon: Lightbulb,
      title: "Peer Reviews",
      description: "Independent evaluation of engineering designs to ensure code compliance and optimal solutions.",
    },
    {
      icon: FileText,
      title: "Expert Witness",
      description: "Professional testimony and documentation for construction litigation and insurance claims.",
    },
    {
      icon: Ruler,
      title: "Value Engineering",
      description: "Cost-effective alternatives that maintain quality and performance requirements.",
    },
    {
      icon: Microscope,
      title: "Forensic Engineering",
      description: "Investigation of structural failures and building performance issues.",
    },
    {
      icon: Wrench,
      title: "Construction Support",
      description: "On-site engineering guidance, RFI responses, and construction phase services.",
    },
  ]

  const projects = [
    {
      title: "Historic Building Assessment",
      location: "129 Tradd Street, Charleston, SC 29401",
      description: "Comprehensive structural evaluation of a 19th-century commercial building in downtown Charleston.",
      image: "/gallery/projects/129 Tradd St.webp",
    },
    {
      title: "Commercial Building Peer Review",
      location: "15 Meeting Street, Charleston, SC 29401",
      description: "Independent review of structural and MEP designs for commercial building renovation in downtown Charleston.",
      image: "/gallery/projects/15 Meeting St.webp",
    },
    {
      title: "Expert Witness for Insurance Claim",
      location: "124 Rutledge Avenue, Charleston, SC 29401",
      description: "Provided expert testimony for hurricane damage assessment and insurance claim resolution.",
      image: "/gallery/projects/124 Rutledge Ave.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (provided by layout) */}

      {/* Hero Section */}
      <Hero
        title="Engineering Consulting"
        subtitle="Practical engineering advice and project support across disciplines"
        icon={Lightbulb}
        ctaText="Contact Us"
        ctaHref="/contact"
  imageSrc="/Engineering%20Consulting.webp"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering consultation to support your project at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-yellow-500 mb-4" />
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Consulting Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in the Southeast, our engineering consulting services provide expert
                guidance, independent reviews, and specialized technical support for your most challenging projects.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-black">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Experienced Perspective</h3>
                    <p className="text-gray-600">
                      Benefit from our extensive experience across residential, commercial, and historic projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-black">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Independent Analysis</h3>
                    <p className="text-gray-600">
                      Get unbiased reviews and recommendations to improve your project&apos;s success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-black">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Problem-Solving Expertise</h3>
                    <p className="text-gray-600">
                      We specialize in finding solutions to complex engineering challenges and unique situations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-black">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Clear Communication</h3>
                    <p className="text-gray-600">
                      We translate complex engineering concepts into understandable recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/gallery/featured-projects/allstar-pediatrics/allstar-pediatrics-main.webp"
                alt="All Starr Pediatrics - Engineering Consulting Project"
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recent Consulting Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of our engineering consulting services in action
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{getPrivateAddress(project.location)}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link href="/projects" className="text-yellow-600 font-semibold flex items-center">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Engineering Consulting Gallery</h2>
            <p className="text-xl text-gray-600">
              Engineering drawings and construction site consultations from our projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/construction/engineering-drawings-site.webp"
                alt="Engineering Drawings at Construction Site"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/construction/foundation-construction.webp"
                alt="Foundation Construction Planning"
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
          <h2 className="text-3xl font-bold mb-4">Need Engineering Consultation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our consulting services can support your project
          </p>
          <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-4 py-2 font-medium transition-colors rounded-md inline-flex items-center">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}


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

      {/* Technical Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Engineering Consulting Gallery</h2>
            <p className="text-xl text-gray-600">
              Engineering drawings and construction site consultations from our projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/construction/engineering-drawings-site.webp"
                alt="Engineering Drawings at Construction Site"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/construction/foundation-construction.webp"
                alt="Foundation Construction Planning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
          <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-8 py-3 font-medium transition-colors rounded-md inline-flex items-center justify-center w-full sm:w-auto max-w-md mx-auto">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}


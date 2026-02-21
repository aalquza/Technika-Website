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

  return (
    <div className="min-h-screen bg-white">
  {/* Navigation (provided by layout) */}

      <Hero
        title="Building Science"
        subtitle="Building Envelope and Performance Optimization Through Scientific Analysis and Testing"
        icon={Microscope}
        ctaText="Get a Quote"
        ctaHref="/contact"
  imageSrc="/Building%20Science.webp"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black-ops-one mb-4">Our Building Science Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientific approach to building performance, energy efficiency, and occupant comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black-ops-one mb-3">{service.title}</h3>
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
              <h2 className="text-3xl font-black-ops-one mb-4">Why Choose Technika for Building Science?</h2>
              <p className="text-xl text-gray-600">
                Our scientific approach to building performance in Charleston&apos;s challenging climate
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-black-ops-one mb-2">Climate-Specific Expertise</h3>
                    <p className="text-gray-600">
                Deep understanding of Charleston&apos;s hot, humid climate and its impact on building performance and
                      durability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-black-ops-one mb-2">Advanced Testing Equipment</h3>
                    <p className="text-gray-600">
                      State-of-the-art diagnostic tools including thermal imaging, blower door testing, and moisture
                      meters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-black-ops-one mb-2">Historic Building Specialization</h3>
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
                    <h3 className="font-black-ops-one mb-2">Energy Modeling Expertise</h3>
                    <p className="text-gray-600">
                      Advanced computer modeling to predict and optimize building energy performance before
                      construction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-black-ops-one mb-2">Moisture Control Mastery</h3>
                    <p className="text-gray-600">
                      Comprehensive moisture management strategies to prevent mold, rot, and structural damage in humid
                      conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-black-ops-one mb-2">Holistic Approach</h3>
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

      {/* Technical Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black-ops-one mb-4">Building Science Gallery</h2>
            <p className="text-xl text-gray-600">
              Building envelope assessments and diagnostic work from our projects
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/building-science/rotting-wood-inspection.webp"
                alt="Wood Rot Inspection and Assessment"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black-ops-one mb-4">Ready to Optimize Your Building&apos;s Performance?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your building science needs and discover how we can improve efficiency, comfort,
            and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-8 py-3 text-lg w-full">
                Get Started
              </Button>
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


"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Phone, Mail, MapPin, Zap, Lightbulb, Shield, Sun, Cpu, Power, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function ElectricalDesignPage() {
  // Layout provides the global Navbar; page-level nav state removed

  const services = [
    {
      icon: Power,
      title: "Power Distribution",
      description: "Complete electrical power distribution system design for residential and commercial buildings.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Energy-efficient lighting solutions with advanced controls and daylight integration.",
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Fire alarm, security, and emergency power systems designed to protect life and property.",
    },
    {
      icon: Sun,
      title: "Solar & Renewable Energy",
      description: "Solar photovoltaic systems and battery storage solutions for sustainable energy independence.",
    },
    {
      icon: Cpu,
      title: "Smart Building Technology",
      description: "Advanced building automation, IoT integration, and intelligent electrical systems.",
    },
    {
      icon: Zap,
      title: "Load Analysis & Planning",
      description: "Comprehensive electrical load calculations and future expansion planning.",
    },
  ]

  const projects = [
    {
      title: "Historic Inn Electrical Upgrade",
      location: "French Quarter, Charleston",
      description:
        "Complete electrical system modernization for a historic inn while preserving architectural character and adding smart room controls.",
      image: "/placeholder.svg?height=300&width=400&text=Historic+Inn+Electrical",
      services: ["Power Distribution", "Smart Building Technology"],
    },
    {
      title: "Solar-Powered Office Complex",
      location: "North Charleston, SC",
      description:
        "Comprehensive electrical design with 200kW solar array, battery storage, and advanced energy management systems.",
      image: "/placeholder.svg?height=300&width=400&text=Solar+Office+Complex",
      services: ["Solar & Renewable Energy", "Load Analysis & Planning"],
    },
    {
      title: "Luxury Residential Automation",
      location: "Daniel Island, SC",
      description:
        "High-end residential electrical system with whole-home automation, security integration, and backup power systems.",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+Home+Automation",
      services: ["Smart Building Technology", "Safety Systems"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
  {/* Navigation (provided by layout) */}

      <Hero
        title="Electrical Design"
        subtitle="Electrical systems and power distribution designed for safety, efficiency, and future growth"
        icon={Zap}
        ctaText="Get a Quote"
        ctaHref="/contact"
  imageSrc="/Electrical%20Design.webp"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Electrical Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical engineering solutions from power distribution to smart building technology
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Technika for Electrical Design?</h2>
              <p className="text-xl text-gray-600">
                Our expertise in modern electrical systems and sustainable energy solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Code Compliance Expertise</h3>
                    <p className="text-gray-600">
                      Thorough knowledge of NEC, local codes, and utility requirements ensuring safe, compliant
                      electrical systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Energy Efficiency Focus</h3>
                    <p className="text-gray-600">
                      Advanced lighting controls, power management, and renewable energy integration to minimize
                      operating costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Smart Technology Integration</h3>
                    <p className="text-gray-600">
                      Cutting-edge building automation, IoT devices, and intelligent electrical systems for enhanced
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Future-Ready Design</h3>
                    <p className="text-gray-600">
                      Electrical systems designed with expansion capacity and emerging technology compatibility in mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Safety System Specialization</h3>
                    <p className="text-gray-600">
                      Comprehensive fire alarm, security, and emergency power systems designed to protect life and
                      property.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Solar & Storage Expertise</h3>
                    <p className="text-gray-600">
                      Complete solar photovoltaic and battery storage system design for energy independence and
                      resilience.
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
            <h2 className="text-3xl font-bold mb-4">Recent Electrical Design Projects</h2>
            <p className="text-xl text-gray-600">
              Examples of our electrical engineering work across different applications
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
                  <p className="text-yellow-600 font-medium mb-3">{project.location}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Power Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your electrical design needs and discover how we can create efficient, safe, and
            smart electrical systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 text-lg">Get Started</Button>
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

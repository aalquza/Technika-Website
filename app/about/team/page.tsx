"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Phone, Mail, MapPin, GraduationCap, Award, Briefcase, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function TeamPage() {
  // Navigation provided by layout; remove per-page nav state

  const founder = {
    name: "Chris Wigginton, PE",
    title: "Principal Engineer & Founder",
  image: "/Team/chris-2.webp",
    bio: "Chris founded Technika in 2013 with a passion for historic buildings, quality service, and a personal approach. He personally manages each project from start to finish, ensuring the highest standards of engineering excellence. With over 11 years of experience in structural and MEP engineering, Chris has become Charleston's go-to engineer for complex historic preservation projects and innovative new construction.",
    education: "BS Civil Engineering, Georgia Tech",
    experience: "11+ years in structural and MEP engineering",
    specialties: ["Historic Preservation", "Structural Design", "Project Management", "Seismic Analysis"],
    achievements: [
      "Licensed Professional Engineer in SC, NC, GA, FL",
      "200+ successful projects completed",
      "Specialist in Charleston's historic architecture",
      "Expert in seismic retrofitting and coastal construction",
    ],
  }

  const lindsay = {
    name: "Lindsay Wigginton",
    title: "Operations Manager & Co-Owner",
  image: "/Team/LINZ.webp",
    bio: "Lindsay manages project coordination, client communications, and ensures smooth operations across all Technika projects. Her attention to detail and organizational skills keep projects on track and clients informed throughout the entire process. As Chris's wife and business partner, she brings a personal touch to every client interaction and ensures that Technika's commitment to quality service is maintained at every level.",
    education: "BS Business Administration, College of Charleston",
    experience: "8+ years in project management and operations",
    specialties: ["Project Coordination", "Client Relations", "Quality Assurance", "Business Operations"],
    achievements: [
      "Streamlined project management processes",
      "Maintained 100% client satisfaction rate",
      "Developed client communication protocols",
      "Oversees all administrative operations",
    ],
  }

  const teamMembers = [
    {
      name: "Gabbrielle",
      title: "Team Member",
  image: "/Team/gabrielle-1.webp",
      bio: "Part of our engineering team providing design and field support.",
      specialties: ["Design Support", "Site Assessment"],
    },
    {
      name: "Justin",
      title: "Team Member",
  image: "/Team/justin-1.webp",
      bio: "Contributes to project delivery and technical coordination.",
      specialties: ["Project Coordination", "Drafting"],
    },
    {
      name: "Mike",
      title: "Team Member",
  image: "/Team/mike-7.webp",
      bio: "Provides field engineering and construction support.",
      specialties: ["Field Engineering", "Inspections"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation provided by layout */}

      <Hero
        title="Our Team"
        subtitle="Meet the engineers and staff behind Technika"
        icon="users"
        imageSrc="/placeholder.svg?height=600&width=1200&text=Technika+Team"
      />

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Founder</h2>
              <p className="text-xl text-gray-600">The visionary behind Technika Engineering</p>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-square md:aspect-auto">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={500}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-yellow-600 font-semibold text-lg mb-6">{founder.title}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{founder.bio}</p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Education</h4>
                          <p className="text-gray-600">{founder.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Experience</h4>
                          <p className="text-gray-600">{founder.experience}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lindsay Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Operations Leadership</h2>
              <p className="text-xl text-gray-600">The heart of our operations and client experience</p>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 order-2 md:order-1">
                    <h3 className="text-3xl font-bold mb-2">{lindsay.name}</h3>
                    <p className="text-yellow-600 font-semibold text-lg mb-6">{lindsay.title}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{lindsay.bio}</p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Education</h4>
                          <p className="text-gray-600">{lindsay.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Experience</h4>
                          <p className="text-gray-600">{lindsay.experience}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {lindsay.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {lindsay.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Heart className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square md:aspect-auto order-1 md:order-2">
                    <Image
                      src={lindsay.image || "/placeholder.svg"}
                      alt={lindsay.name}
                      width={500}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Engineering Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals bringing diverse expertise and shared commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-yellow-600 font-medium mb-4">{member.title}</p>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Drives Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The shared values and principles that unite our team in delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Personal Touch</h3>
                <p className="text-slate-600">
                  Every team member is committed to providing personalized service and building lasting relationships
                  with our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Excellence</h3>
                <p className="text-slate-600">
                  Our team continuously pursues the highest standards in engineering design, analysis, and professional
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Collaborative Spirit</h3>
                <p className="text-slate-600">
                  We work together as a unified team, supporting each other and collaborating closely with clients and
                  partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Work with Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that comes from working with a dedicated team that cares about your project&apos;s
            success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-4 py-2 font-medium transition-colors rounded-md inline-flex items-center">
              Get In Touch
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-lg bg-transparent"
              >
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

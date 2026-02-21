"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Phone, Mail, MapPin, GraduationCap, Award, Briefcase, Heart, ChevronLeft, ChevronRight, Smile } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function TeamPage() {
  // Navigation provided by layout; remove per-page nav state
  const [currentEvanImage, setCurrentEvanImage] = useState(0)
  const evanImages = ["/Team/Evan Dog 2.webp", "/Team/Evan Dog 1.webp"]

  const nextEvanImage = () => {
    setCurrentEvanImage((prev) => (prev + 1) % evanImages.length)
  }

  const prevEvanImage = () => {
    setCurrentEvanImage((prev) => (prev - 1 + evanImages.length) % evanImages.length)
  }

  const founder = {
    name: "Chris Wigginton, PE",
    title: "Principal Engineer & Founder",
  image: "/Team/chris.webp",
    bio: "Chris founded Technika in 2013 upon returning to Charleston after co-owning a successful multi-disciplinary consulting engineering firm in Atlanta since 2006. Chris's background and experience with all aspects of residential and light commercial construction and design, with a continued focus on complex residential engineering designs, gives him a unique perspective on the necessary engineering principles for these projects. Chris founded Technika in Charleston with a focus on historic structures, working side by side with some of Charleston's premier architects to create award-winning designs. Chris personally manages each project and serves as the primary point of contact for the company as it continues to grow, now completing projects all over the Southeast.",
    education: "",
    experience: "",
    specialties: ["Structural Design", "Mechanical Design", "Electrical Design", "Historic Structures", "Building Science"],
    achievements: [],
    facts: [
      "Plays Tennis in Local Leagues",
      "Works on German Cars as an Amateur Mechanic",
    ],
  }

  const lindsay = {
    name: "Lindsay Wigginton",
    title: "Operations Manager & Co-Owner",
  image: "/Team/LINZ.webp",
    bio: "Lindsay manages project coordination, client communications, and ensures smooth operations across all Technika projects. Her attention to detail and organizational skills keep projects on track and clients informed throughout the entire process. As Chris's wife and business partner, she brings a personal touch to every client interaction and ensures that Technika's commitment to quality service is maintained at every level.",
    education: "B.S in Education from GA State, 2006",
    experience: "10+ Years in Business Administration, Project Management, and Residential Design",
    specialties: ["Planning and Zoning Regulations", "Knowledge in Code Compliance", "Client Relationships", "Quality Assurance", "Business Operations"],
    facts: [
      "Plays Tennis in Local Leagues",
      "Bird Enthusiast",
      "Loves to Garden",
      "Avid Outdoors-Woman",
      "Loves Being on the Water",
    ],
  }

  const teamMembers = [
    {
      name: "Gabrielle Kohler",
      title: "Structural Engineer",
  image: "/Team/gabrielle-1.webp",
      specialties: ["Inspections", "Analysis Reports", "Framing Design", "Structural Design"],
      facts: [
        "Enthusiastic Puzzler",
        "Avid Paddle Boarder",
        "Love for Gardening",
        "Loves to Fish",
      ],
    },
    {
      name: "Justin Larson, EIT",
      title: "Structural Engineer",
  image: "/Team/justin-1.webp",
      specialties: ["Structural Design", "Detail Draftsman", "Complex Problem Solver", "Large Residential Structural Analysis", "Project Management"],
      facts: [
        "Married His Childhood Crush",
        "Has a German Shepherd Dog",
        "Catamaran Sail Skipper",
        "Has a 3 Legged Cat -- His Wife Would Not Allow Him to Name Him Tri-Pod",
      ],
    },
    {
      name: "Michael Cox, EIT",
      title: "Mechanical Engineer",
  image: "/Team/mike-7.webp",
      specialties: ["HVAC Design", "Plumbing Design", "Manual J Heatload Calculations", "On-Site Analysis of Existing Conditions", "Equipment Selection"],
      facts: [
        "Hot Chocolate Officiant",
        "Amateur Chef",
        "Chronic Videogamer",
        "Anime Junkie",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation provided by layout */}

      <Hero
        title="Our Team"
        subtitle="Meet the engineers and staff behind Technika"
        icon="users"
        imageSrc="/Meet the team.png"
      />

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black-ops-one mb-4">Our Founder</h2>
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
                    <h3 className="text-3xl font-black-ops-one mb-2">{founder.name}</h3>
                    <p className="text-yellow-600 font-semibold text-lg mb-6">{founder.title}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Chris founded Technika in 2013 upon returning to Charleston after co-owning a successful multi-disciplinary consulting engineering firm in Atlanta since 2006. Chris&apos;s background and experience with all aspects of residential and light commercial construction and design, with a continued focus on complex residential engineering designs, gives him a unique perspective on the necessary engineering principles for these projects. Chris founded Technika in Charleston with a focus on historic structures, working side by side with some of Charleston&apos;s premier architects to create award-winning designs. Chris <strong className="font-semibold text-slate-800">personally manages each project</strong> and serves as the <strong className="font-semibold text-slate-800">primary point of contact for the company</strong> as it continues to grow, now completing projects all over the Southeast.
                    </p>

                    <div className="space-y-6">
                      {founder.education && (
                        <div className="flex items-start gap-3">
                          <GraduationCap className="h-5 w-5 text-yellow-500 mt-1" />
                          <div>
                            <h4 className="font-black-ops-one mb-1">Education</h4>
                            <p className="text-gray-600">{founder.education}</p>
                          </div>
                        </div>
                      )}

                      {founder.experience && (
                        <div className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-yellow-500 mt-1" />
                          <div>
                            <h4 className="font-black-ops-one mb-1">Experience</h4>
                            <p className="text-gray-600">{founder.experience}</p>
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-black-ops-one mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {founder.facts && founder.facts.length > 0 && (
                        <div>
                          <h4 className="font-black-ops-one mb-3">Fun Facts</h4>
                          <ul className="space-y-2">
                            {founder.facts.map((fact, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Smile className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{fact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
              <h2 className="text-3xl font-black-ops-one mb-4">Operations Leadership</h2>
              <p className="text-xl text-gray-600">The heart of our operations and client experience</p>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 order-2 md:order-1">
                    <h3 className="text-3xl font-black-ops-one mb-2">{lindsay.name}</h3>
                    <p className="text-yellow-600 font-semibold text-lg mb-6">{lindsay.title}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{lindsay.bio}</p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-black-ops-one mb-1">Education</h4>
                          <p className="text-gray-600">{lindsay.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-black-ops-one mb-1">Experience</h4>
                          <p className="text-gray-600">{lindsay.experience}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-black-ops-one mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {lindsay.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {lindsay.facts && lindsay.facts.length > 0 && (
                        <div>
                          <h4 className="font-black-ops-one mb-3">Fun Facts</h4>
                          <ul className="space-y-2">
                            {lindsay.facts.map((fact, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Smile className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{fact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
            <h2 className="text-3xl font-black-ops-one mb-4">Our Engineering Team</h2>
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
                    <h3 className="text-xl font-black-ops-one text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-yellow-600 font-medium mb-4">{member.title}</p>
                    <div className="mb-6">
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
                    {member.facts && member.facts.length > 0 && (
                      <div className="text-left">
                        <h4 className="font-black-ops-one mb-3 text-center">Fun Facts</h4>
                        <ul className="space-y-2">
                          {member.facts.map((fact, factIndex) => (
                            <li key={factIndex} className="flex items-start gap-2">
                              <Smile className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Mascot Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black-ops-one mb-4">Meet Our Team Mascot</h2>
              <p className="text-xl text-gray-600">The four-legged member bringing joy to the Technika family</p>
            </div>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-square md:aspect-auto bg-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={evanImages[currentEvanImage]}
                        alt="Evan Wigginton - Team Mascot"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={prevEvanImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={nextEvanImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentEvanImage + 1} / {evanImages.length}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl font-black-ops-one mb-2">Evan Wigginton</h3>
                    <p className="text-yellow-600 font-semibold text-lg mb-6">Chief Morale Officer</p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Evan joined the Technika team in 2023 and has been bringing smiles and tail wags to the office ever since. 
                      As our beloved team mascot, Evan reminds us daily about what&apos;s truly important: loyalty, unconditional love, 
                      and the joy found in simple moments.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                      <h4 className="font-black-ops-one text-lg mb-3 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-yellow-600" />
                        Adopt, Don&apos;t Shop
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Evan was adopted from the <strong>Charleston Animal Society Berkeley Campus</strong> in 2023. 
                        Their mission to save lives and find loving homes for animals in need is something we&apos;re 
                        proud to support.
                      </p>
                      <p className="text-gray-700 mb-4">
                        If you&apos;re considering adding a furry friend to your family, we encourage you to visit 
                        your local shelter and give a deserving animal a second chance at happiness.
                      </p>
                      <a 
                        href="https://casberkeley.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-400 text-slate-800 hover:bg-yellow-500 px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        <Heart className="h-4 w-4" />
                        Visit Charleston Animal Society
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        Good Boy
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        Office Favorite
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        Rescue Dog
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black-ops-one mb-4">Work with Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that comes from working with a dedicated team that cares about your project&apos;s
            success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-8 py-3 text-lg w-full">
                Get In Touch
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-lg bg-transparent w-full"
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

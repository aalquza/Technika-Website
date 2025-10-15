"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, History, Award, Target, Heart, Phone, Mail, TrendingUp, Users, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function CompanyHistoryPage() {
  const milestones = [
    {
      year: "2013",
      title: "Technika Founded",
      description:
        "Chris Wigginton establishes Technika Engineering with a vision to provide personalized engineering services focused on historic preservation and quality craftsmanship in Charleston.",
      icon: Building,
    },
    {
      year: "2015",
      title: "First Major Historic Project",
      description:
        "Completed structural restoration of a significant Charleston single house, establishing our reputation for historic preservation expertise.",
      icon: History,
    },
    {
      year: "2017",
      title: "Team Expansion",
      description:
        "Added specialized mechanical and electrical engineers to provide comprehensive MEP services, expanding our capabilities beyond structural engineering.",
      icon: Users,
    },
    {
      year: "2019",
      title: "Regional Growth",
      description:
        "Extended services throughout the Southeast, working on projects in Georgia, North Carolina, and Florida while maintaining our Charleston headquarters.",
      icon: TrendingUp,
    },
    {
      year: "2021",
      title: "Building Science Integration",
      description:
        "Incorporated advanced building science services, focusing on energy efficiency, moisture management, and indoor air quality for modern and historic buildings.",
      icon: Target,
    },
    {
      year: "2024",
      title: "200+ Projects Milestone",
      description:
        "Reached a significant milestone of over 200 completed projects, from residential renovations to large commercial developments, all with our signature personal approach.",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
  {/* Navigation provided by layout */}

      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="Over a decade of engineering excellence in Charleston and the Southeast"
        icon="history"
        imageSrc="/placeholder.svg?height=600&width=1200&text=Technika+Company+History"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-600">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">The Technika Story</h2>
              <p className="text-lg leading-relaxed mb-6">
                Established in 2013 by Chris Wigginton, Technika arose out of a need for a dedicated engineering
                consultant in Charleston with a passion for historic buildings, quality service, and a personal
                approach. What started as a vision to provide better engineering services has grown into a trusted
                partner for architects, contractors, and property owners throughout the Southeast.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Since then, Chris has been managing each project personally, and with a lot of help from his team,
                assisting local architects, contractors, and homeowners with renovations, additions, and new
                construction projects all over the Charleston area and the southeast. Our commitment to personal service
                means that every client works directly with our principal engineer, ensuring continuity and quality
                throughout the project lifecycle.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                What sets Technika apart is our deep understanding of Charleston&apos;s unique architectural heritage
                combined with cutting-edge engineering solutions. We&apos;ve worked on everything from 18th-century historic
                homes to modern commercial buildings, always bringing the same level of dedication, expertise, and
                personal attention to every project. Our growth has been intentional and measured, allowing us to
                maintain the personal relationships and quality standards that define our practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in Technika&apos;s growth and development over the past decade
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                          <milestone.icon className="h-8 w-8 text-yellow-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                          <span className="text-2xl font-bold text-yellow-600">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-slate-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional engineering services that preserve Charleston&apos;s architectural heritage while
                    embracing innovative solutions for modern challenges. We are committed to personal service,
                    technical excellence, and building lasting relationships with our clients and community.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the Southeast&apos;s premier engineering consultancy, known for our expertise in historic
                    preservation, commitment to sustainability, and unwavering dedication to client success. We envision
                    a future where every project contributes to stronger, more resilient communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">
              Measuring our success through client satisfaction and project outcomes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">11+</div>
              <div className="text-gray-300">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Historic Buildings Preserved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted Technika with their most important projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-4 py-2 font-medium transition-colors rounded-md inline-flex items-center">
              Start Your Project
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



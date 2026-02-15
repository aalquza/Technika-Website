"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building, Phone, Mail, MapPin, Menu, Clock, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

/* Header moved to components/header.tsx */

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again or email us directly at chris@technika-design.com'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email us directly at chris@technika-design.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Menu Content */}
          <div className="relative bg-slate-800 text-white h-full w-full flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Building className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">TECHNIKA</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-8 space-y-2">
              <Link
                href="/"
                className="block py-4 px-4 text-lg font-medium hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between py-4 px-4 text-lg font-medium hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top duration-200">
                    <Link
                      href="/services/structural-analysis"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Structural Analysis
                    </Link>
                    <Link
                      href="/services/building-inspections"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Building Inspections
                    </Link>
                    <Link
                      href="/services/historic-preservation"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Historic Preservation
                    </Link>
                    <Link
                      href="/services/commercial-buildings"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial Buildings
                    </Link>
                    <Link
                      href="/services/residential-projects"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Residential Projects
                    </Link>
                    <Link
                      href="/services/foundation-design"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Foundation Design
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                className="block py-4 px-4 text-lg font-medium hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="/about"
                className="block py-4 px-4 text-lg font-medium hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>

            {/* Contact Button */}
            <div className="p-6 border-t border-slate-700">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 py-2 font-medium transition-colors rounded-md inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <Hero
        title="Contact Us"
        subtitle="Ready to start your project? Contact our team of experienced structural engineers today."
        icon={MapPin}
  imageSrc="/Contact%20Us.webp"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      4770 Hwy 165 Suites C and E
                      <br />
                      Meggett, SC 29449
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">843-580-3769</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">chris@technika-design.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-slate-50 to-gray-100 border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 border-slate-300 focus:border-yellow-400 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 border-slate-300 focus:border-yellow-400 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 border-slate-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 border-slate-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-slate-700 font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 border-slate-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 border-slate-300 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                      placeholder="Please describe your project and any specific requirements..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus && (
                    <div className={`p-4 rounded-md ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Meggett Office</h2>
            <p className="text-xl text-gray-600">Located in Meggett, South Carolina</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Image
              src="/Megget Office.png"
              alt="Technika Engineering Office"
              width={800}
              height={500}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

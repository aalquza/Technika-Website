"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building, Menu, X, ChevronDown, Settings } from "lucide-react"
import React from "react"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isServicesHover, setIsServicesHover] = useState(false)
  const [isAboutHover, setIsAboutHover] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/services") return pathname.startsWith("/services")
    if (href === "/about") return pathname.startsWith("/about")
    return pathname === href
  }

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Settings className="h-8 w-8 text-yellow-400" />
            <span className="text-3xl font-black-ops-one leading-none translate-y-0.5">TECHNIKA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-yellow-400 transition-colors"
                  : "hover:text-yellow-400 transition-colors"
              }
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsServicesHover(true)}
              onMouseLeave={() => setIsServicesHover(false)}
            >
              <button
                className={
                  (isActive("/services") || isServicesHover || isServicesOpen)
                    ? "text-yellow-400 hover:text-yellow-400 transition-colors focus:outline-none"
                    : "hover:text-yellow-400 transition-colors focus:outline-none"
                }
              >
                Services
              </button>

              <div className="absolute top-full left-0 bg-slate-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-56">
                <Link href="/services/structural-design" className="block px-4 py-2 hover:bg-slate-600 rounded-t-md">
                  Structural Design
                </Link>
                <Link href="/services/mechanical-design" className="block px-4 py-2 hover:bg-slate-600">
                  Mechanical Design
                </Link>
                <Link href="/services/electrical-design" className="block px-4 py-2 hover:bg-slate-600">
                  Electrical Design
                </Link>
                <Link href="/services/building-science" className="block px-4 py-2 hover:bg-slate-600">
                  Building Science
                </Link>
                <Link href="/services/engineering-consulting" className="block px-4 py-2 hover:bg-slate-600 rounded-b-md">
                  Engineering Consulting
                </Link>
              </div>
            </div>

            <Link
              href="/projects"
              className={
                isActive("/projects")
                  ? "text-yellow-400 transition-colors"
                  : "hover:text-yellow-400 transition-colors"
              }
            >
              Projects
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsAboutHover(true)}
              onMouseLeave={() => setIsAboutHover(false)}
            >
              <button
                className={
                  (isActive("/about") || isAboutHover || isAboutOpen)
                    ? "text-yellow-400 hover:text-yellow-400 transition-colors focus:outline-none"
                    : "hover:text-yellow-400 transition-colors focus:outline-none"
                }
              >
                About
              </button>

              <div className="absolute top-full left-0 bg-slate-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-56">
                <Link href="/about/team" className="block px-4 py-2 hover:bg-slate-600 rounded-t-md">
                  Meet the Team
                </Link>
                <Link href="/about/company" className="block px-4 py-2 hover:bg-slate-600 rounded-b-md">
                  Company History
                </Link>
              </div>
            </div>

            <Link href="/contact" className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Menu Content */}
          <div className="relative bg-slate-800 text-white h-full w-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Building className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">TECHNIKA</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-8 space-y-2">
              <Link
                href="/"
                className="block py-4 px-4 text-lg font-medium text-yellow-400 bg-slate-700/50 rounded-lg"
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
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/services/structural-design"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Structural Design
                    </Link>
                    <Link
                      href="/services/mechanical-design"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mechanical Design
                    </Link>
                    <Link
                      href="/services/electrical-design"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Electrical Design
                    </Link>
                    <Link
                      href="/services/building-science"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Building Science
                    </Link>
                    <Link
                      href="/services/engineering-consulting"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Engineering Consulting
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

              {/* About Dropdown (mobile) */}
              <div>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="w-full flex items-center justify-between py-4 px-4 text-lg font-medium hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <span>About</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isAboutOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/about/team"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Meet the Team
                    </Link>
                    <Link
                      href="/about/company"
                      className="block py-3 px-4 text-base text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Company History
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block py-4 px-4 text-lg font-medium hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Contact Button */}
            <div className="p-6 border-t border-slate-700">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 py-4 text-lg font-semibold inline-flex items-center justify-center rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

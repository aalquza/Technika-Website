"use client"

import React from "react"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Technika Engineering</h3>
            <p className="text-sm text-gray-400 mb-4">
              Professional engineering services specializing in structural design, MEP systems, and building
              science throughout the Southeast.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              4770 Hwy 165 Suites C and E<br />
              Meggett, SC 29449
            </p>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-400">843-580-3769</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-400">chris@technika-design.com</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/structural-design" className="text-gray-400 hover:text-yellow-400">
                  Structural Design
                </Link>
              </li>
              <li>
                <Link href="/services/mechanical-design" className="text-gray-400 hover:text-yellow-400">
                  Mechanical Design
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-design" className="text-gray-400 hover:text-yellow-400">
                  Electrical Design
                </Link>
              </li>
              <li>
                <Link href="/services/building-science" className="text-gray-400 hover:text-yellow-400">
                  Building Science
                </Link>
              </li>
              <li>
                <Link href="/services/engineering-consulting" className="text-gray-400 hover:text-yellow-400">
                  Engineering Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/team" className="text-gray-400 hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-yellow-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Technika Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

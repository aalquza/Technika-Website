"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ComponentType } from "react"
import { Calculator, Wind, Zap, Microscope, Lightbulb, Building, MapPin, Users, History } from "lucide-react"

type IconKey = "calculator" | "wind" | "zap" | "microscope" | "lightbulb" | "building" | "mappin" | "users" | "history"

type HeroProps = {
  title: string
  subtitle?: string
  // allow either a client component or a serializable key
  icon?: ComponentType<any> | IconKey
  ctaText?: string
  ctaHref?: string
  imageSrc?: string
}

const iconMap: Record<IconKey, ComponentType<any>> = {
  calculator: Calculator,
  wind: Wind,
  zap: Zap,
  microscope: Microscope,
  lightbulb: Lightbulb,
  building: Building,
  mappin: MapPin,
  users: Users,
  history: History,
}

export default function Hero({ title, subtitle, icon, ctaText, ctaHref, imageSrc }: HeroProps) {
  // Resolve icon prop (string key or component)
  let IconComp: ComponentType<any> | undefined = undefined
  if (typeof icon === "string") {
    IconComp = iconMap[icon as IconKey]
  } else if (icon) {
    IconComp = icon as ComponentType<any>
  }
  return (
    <section className="relative bg-slate-800 text-white py-20">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={1200}
          height={600}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {IconComp && <IconComp className="h-16 w-16 text-yellow-400 mx-auto mb-6" />}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl text-gray-300 mb-8">{subtitle}</p>}
          {ctaText && (
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 text-lg" asChild>
              {/* eslint-disable-next-line */}
              <a href={ctaHref || "#"}>{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

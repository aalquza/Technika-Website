"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ComponentType } from "react"

type HeroProps = {
  title: string
  subtitle?: string
  icon?: ComponentType<any>
  ctaText?: string
  ctaHref?: string
  imageSrc?: string
}

export default function Hero({ title, subtitle, icon: IconComp, ctaText, ctaHref, imageSrc }: HeroProps) {
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

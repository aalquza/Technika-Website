"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ComponentType, useEffect } from "react"
import { Calculator, Wind, Zap, Microscope, Lightbulb, Building, MapPin, Users, History } from "lucide-react"
import { getRouteWarmupImages } from "@/lib/image-preload-config"

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
  const pathname = usePathname() || "/"

  useEffect(() => {
    const warmupImages = getRouteWarmupImages(pathname, imageSrc)
    if (warmupImages.length === 0) return

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let idleId: number | null = null
    let canceled = false
    let imageIndex = 0

    const preloadImage = (src: string) => {
      const img = new window.Image()
      img.decoding = "async"
      img.src = src
    }

    const scheduleIdleWork = () => {
      if (canceled) return

      if ("requestIdleCallback" in window) {
        idleId = (
          window as Window & {
            requestIdleCallback: (
              cb: (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void,
              opts?: { timeout: number },
            ) => number
          }
        ).requestIdleCallback(
          (deadline) => {
            while (imageIndex < warmupImages.length && (deadline.timeRemaining() > 4 || deadline.didTimeout)) {
              preloadImage(warmupImages[imageIndex])
              imageIndex += 1
            }

            if (imageIndex < warmupImages.length) {
              scheduleIdleWork()
            }
          },
          { timeout: 6000 },
        )
        return
      }

      timeoutId = setTimeout(() => {
        const endAt = Date.now() + 24
        while (imageIndex < warmupImages.length && Date.now() < endAt) {
          preloadImage(warmupImages[imageIndex])
          imageIndex += 1
        }

        if (imageIndex < warmupImages.length) {
          scheduleIdleWork()
        }
      }, 300)
    }

    scheduleIdleWork()

    return () => {
      canceled = true
      if (timeoutId) clearTimeout(timeoutId)
      if (idleId && "cancelIdleCallback" in globalThis) {
        ;(globalThis as typeof globalThis & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId)
      }
    }
  }, [pathname, imageSrc])

  // Resolve icon prop (string key or component)
  let IconComp: ComponentType<any> | undefined = undefined
  if (typeof icon === "string") {
    IconComp = iconMap[icon as IconKey]
  } else if (icon) {
    IconComp = icon as ComponentType<any>
  }
  return (
    <section className="relative bg-slate-800 text-white py-12 sm:py-16 md:py-20">
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
          <h1 className="text-4xl md:text-6xl font-black-ops-one mb-6">{title}</h1>
          {subtitle && <p className="text-xl text-gray-300 mb-8">{subtitle}</p>}
          {ctaText && (
            <Button className="bg-yellow-400 text-slate-800 hover:bg-yellow-400/90 px-4 py-2 font-medium transition-colors" asChild>
              {/* eslint-disable-next-line */}
              <a href={ctaHref || "#"}>{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

const DESKTOP_VIDEO_SRC = "/Technika Intro Page Video.mp4"
const MOBILE_HLS_SRC = "/video/hls/mobile-master.m3u8"

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")
    const updateViewport = () => setIsMobile(media.matches)

    updateViewport()
    media.addEventListener("change", updateViewport)

    return () => media.removeEventListener("change", updateViewport)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isMobile === null) return

    let cleanupHls: (() => void) | null = null
    let canceled = false

    const setPlaybackRate = () => {
      try {
        video.playbackRate = 0.85
      } catch {
        // ignore playbackRate assignment failures in restricted browser modes
      }
    }

    const loadDesktopSource = () => {
      video.src = DESKTOP_VIDEO_SRC
      video.load()
      void video.play().catch(() => {
        // Ignore autoplay promise rejection in strict browser policies.
      })
    }

    video.addEventListener("loadedmetadata", setPlaybackRate)

    if (!isMobile) {
      loadDesktopSource()
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = MOBILE_HLS_SRC
      video.load()
      void video.play().catch(() => {
        // Ignore autoplay promise rejection in strict browser policies.
      })
    } else {
      import("hls.js")
        .then(({ default: Hls }) => {
          if (canceled) return

          if (!Hls.isSupported()) {
            loadDesktopSource()
            return
          }

          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: false,
          })

          hls.loadSource(MOBILE_HLS_SRC)
          hls.attachMedia(video)
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            void video.play().catch(() => {
              // Ignore autoplay promise rejection in strict browser policies.
            })
          })

          cleanupHls = () => hls.destroy()
        })
        .catch(() => {
          loadDesktopSource()
        })
    }

    return () => {
      canceled = true
      if (cleanupHls) cleanupHls()
      video.removeEventListener("loadedmetadata", setPlaybackRate)
    }
  }, [isMobile])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      autoPlay
      muted
      loop
      playsInline
      preload={isMobile ? "none" : "metadata"}
      controls={false}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      aria-hidden="true"
    />
  )
}
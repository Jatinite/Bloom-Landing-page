"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import FeatureGrid from "@/components/feature-grid"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CallToAction from "@/components/call-to-action"
import InitialLoader from "@/components/initial-loader"
import NavigationMenu from "@/components/navigation-menu"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <InitialLoader />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.8 }}
        className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden"
      >
        <NavigationMenu />
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q50,50 100,0 V100 H0 Z" fill="rgba(255,182,193,0.1)" />
            <path d="M0,20 Q50,70 100,20 V100 H0 Z" fill="rgba(216,191,216,0.1)" />
            <path d="M0,40 Q50,90 100,40 V100 H0 Z" fill="rgba(230,230,250,0.1)" />
          </svg>
        </motion.div>
        <div className="relative z-10">
          <HeroSection />
          <FeatureGrid />
          <TestimonialCarousel />
          <CallToAction />
        </div>
      </motion.main>
    </>
  )
}


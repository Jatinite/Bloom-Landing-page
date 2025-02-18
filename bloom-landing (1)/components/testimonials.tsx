"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Life Coach",
    content: "Bloom has transformed the way I approach positivity in my life. It's a game-changer!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "The daily inspiration from Bloom keeps me motivated and focused on my goals. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    content:
      "Bloom has helped me maintain a positive outlook during challenging times. It's my daily dose of sunshine!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-purple-700 mb-12"
        >
          What Our Community Says
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-purple-700">{testimonials[currentIndex].name}</h3>
                <p className="text-pink-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <p className="text-purple-800 italic text-lg">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-300 rounded-full"></div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const inspirationalWords = ["Dream", "Inspire", "Grow", "Flourish", "Thrive"]

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % inspirationalWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-200 to-purple-200 opacity-20"
            style={{
              width: Math.random() * 120 + 30,
              height: Math.random() * 120 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 7 + 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold text-purple-700 mb-6"
        >
          Welcome to{" "}
          <motion.span
            className="text-pink-500 inline-block"
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          >
            Bloom
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-4xl font-semibold text-purple-600 mb-8 h-12"
        >
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            {inspirationalWords[currentWordIndex]}
          </motion.span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl text-purple-600 mb-10 max-w-2xl mx-auto"
        >
          Embrace your journey, cultivate positivity, and watch as your potential unfolds.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg transition duration-300"
        >
          Begin Your Journey
        </motion.button>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillOpacity="0.5"
            fill="#FFF"
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,154.7C672,181,768,203,864,186.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </section>
  )
}


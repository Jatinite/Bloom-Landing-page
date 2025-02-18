"use client"

import { motion } from "framer-motion"
import { Sun, Heart, Smile } from "lucide-react"

const features = [
  { icon: Sun, title: "Radiate Positivity", description: "Spread warmth and light in your daily life" },
  { icon: Heart, title: "Cultivate Self-Love", description: "Nurture your inner self and grow with compassion" },
  { icon: Smile, title: "Embrace Joy", description: "Find happiness in the little moments of life" },
]

export default function Features() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-purple-600 mb-12"
        >
          Bloom with Positivity
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                <feature.icon className="w-16 h-16 mx-auto mb-4 text-pink-500" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">{feature.title}</h3>
              <p className="text-purple-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: 'url("/placeholder.svg?height=500&width=500")',
          backgroundSize: "100px 100px",
        }}
      />
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Sunrise, HeartHandshake, Sparkles } from "lucide-react"

const featureList = [
  { Icon: Sunrise, title: "Embrace Positivity", description: "Cultivate a mindset of optimism and growth" },
  {
    Icon: HeartHandshake,
    title: "Foster Self-Compassion",
    description: "Nurture your inner self with kindness and understanding",
  },
  { Icon: Sparkles, title: "Discover Joy", description: "Uncover happiness in the small moments of everyday life" },
]

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-purple-600 mb-16"
        >
          Nurture Your Growth
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-lg transition duration-300"
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.7 }}>
                <feature.Icon className="w-16 h-16 mx-auto mb-6 text-pink-500" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">{feature.title}</h3>
              <p className="text-purple-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: 'url("/placeholder.svg?height=500&width=500")',
          backgroundSize: "120px 120px",
        }}
      />
    </section>
  )
}


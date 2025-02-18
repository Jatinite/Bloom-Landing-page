"use client"

import { motion } from "framer-motion"

export default function InitialLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.3 }}
    >
      <motion.div
        className="text-6xl font-bold text-purple-600"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Bloom
      </motion.div>
    </motion.div>
  )
}


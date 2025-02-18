"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Contact", href: "#" },
]

export default function NavigationMenu() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-80 backdrop-blur-md rounded-full shadow-lg"
    >
      <ul className="flex space-x-4 p-2">
        {navItems.map((item, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={item.href}
              className="text-purple-600 font-semibold px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}


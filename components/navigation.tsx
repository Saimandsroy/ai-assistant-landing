"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white">
            ☎️
          </div>
          <span className="text-foreground">AI Call Assistant</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition font-medium">
            Solutions
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition font-medium">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition font-medium">
            Resources
          </a>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition font-medium text-sm">
            Sign In
          </button>
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium text-sm">
            Contact Sales
          </button>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm glow-indigo">
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#" className="block text-muted-foreground hover:text-foreground font-medium">
                Solutions
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground font-medium">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground font-medium">
                Resources
              </a>
              <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

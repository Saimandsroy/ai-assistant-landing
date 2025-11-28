"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white text-balance">Ready to Close More Deals?</h2>

          <p className="text-xl text-slate-100 text-balance">
            Join 2,500+ sales professionals using AI to sound like pros on every call
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-12 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 glow-indigo shadow-lg"
          >
            Book Your Demo
            <ArrowRight size={20} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-100 text-sm"
          >
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-400" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-400" />
              <span>Setup in 2 minutes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

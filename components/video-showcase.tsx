"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function VideoShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">See AI Call Assistant in Action</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Video container */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            {/* Placeholder for video */}
            <div className="aspect-video bg-gradient-to-br from-indigo-900 to-violet-900 flex items-center justify-center relative">
              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center glow-indigo hover:scale-110 transition-transform"
              >
                <Play size={32} className="text-indigo-600 ml-1" fill="currentColor" />
              </motion.button>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Testimonial below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-slate-600 mb-2">"Watch how Sarah closed a $50K deal with AI assistance"</p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full" />
              <div className="text-sm font-medium text-slate-900">Sarah Chen, Sales Consultant</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

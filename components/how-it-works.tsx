"use client"

import { motion } from "framer-motion"
import { Phone, Target, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Start Your Call",
    description: "Launch the AI assistant before any sales call",
  },
  {
    icon: Target,
    title: "AI Guides You Live",
    description: "Receive real-time suggestions as the conversation unfolds",
  },
  {
    icon: CheckCircle,
    title: "Get Instant Summary",
    description: "Get structured notes and next steps automatically",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Get Started in 3 Simple Steps</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-transparent opacity-30" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center relative z-10 glow-indigo"
                  >
                    <Icon size={40} className="text-white" />
                  </motion.div>

                  <div className="mb-4">
                    <div className="text-slate-400 text-lg font-semibold mb-2">Step {index + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

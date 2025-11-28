"use client"

import { motion } from "framer-motion"
import { FileText, Zap, BarChart3, Plug } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Live Transcription",
    description: "See every word spoken in real-time. Never miss important details or forget what was discussed.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "AI-Powered Suggestions",
    description: "Get smart responses instantly based on conversation context. Handle objections like a pro.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Call Analytics",
    description: "Track performance, identify patterns, and improve with data-driven insights.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    description: "Works with Zoom, Google Meet, phone calls, and your favorite CRM.",
    color: "from-blue-500 to-cyan-500",
  },
]

export default function FeaturesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Powerful Features for Modern Sales Teams
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)" }}
                className="p-12 bg-card rounded-3xl border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                  Try it live →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

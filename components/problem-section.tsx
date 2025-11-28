"use client"

import { motion } from "framer-motion"
import { Brain, AlertCircle, FileText, Zap } from "lucide-react"

const problems = [
  {
    icon: Brain,
    title: "Forgetting key talking points during calls",
    description: "Lose track of important points when the conversation gets intense.",
  },
  {
    icon: AlertCircle,
    title: "Missing objection handling opportunities",
    description: "Fail to address concerns that could lose you the deal.",
  },
  {
    icon: FileText,
    title: "No structured notes after hanging up",
    description: "Struggle to remember what was discussed and next steps.",
  },
  {
    icon: Zap,
    title: "Sounding unprepared and nervous",
    description: "Lack the confidence to close deals with poise.",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Stop Losing Deals Because You're Unprepared
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-slate-400 leading-relaxed">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

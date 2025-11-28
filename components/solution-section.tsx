"use client"

import { motion } from "framer-motion"
import { Lightbulb, Clipboard, Sparkles } from "lucide-react"

const solutions = [
  {
    icon: Lightbulb,
    title: "Real-Time AI Suggestions",
    description: "Get instant responses when you freeze. AI analyzes context and suggests exactly what to say next.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Clipboard,
    title: "Smart Call Scripts",
    description:
      "Follow proven scripts like a teleprompter. Never forget your pitch, questions, or closing techniques.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Automatic Summaries",
    description: "Get structured notes, action items, and key moments instantly. Send follow-ups within minutes.",
    color: "from-pink-500 to-rose-500",
  },
]

export default function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 text-balance">
            Your AI Copilot for Every Sales Call
          </h2>
          <p className="text-xl text-slate-600">Everything you need to sound confident and close more deals</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`p-4 bg-gradient-to-br ${solution.color} rounded-xl w-fit mx-auto mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{solution.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Learn more →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

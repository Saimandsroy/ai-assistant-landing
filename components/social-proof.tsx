"use client"

import { motion } from "framer-motion"
import { BarChart3, Users, TrendingUp } from "lucide-react"

const stats = [
  { number: "2,500+", label: "Active Users", icon: Users },
  { number: "50,000+", label: "Calls Processed", icon: TrendingUp },
  { number: "92%", label: "Success Rate", icon: BarChart3 },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg text-white">
                    <Icon size={28} />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

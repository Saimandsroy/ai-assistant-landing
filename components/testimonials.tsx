"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    rating: 5,
    quote:
      "This tool transformed my sales calls. I went from nervous freelancer to confident closer. The AI suggestions saved me countless times.",
    author: "Sarah Chen",
    role: "Sales Consultant",
    color: "from-blue-500 to-cyan-500",
  },
  {
    rating: 5,
    quote:
      "Closed 3 major deals in my first week. The automatic summaries alone are worth the price - clients love getting detailed notes immediately.",
    author: "Mike Rodriguez",
    role: "Account Executive",
    color: "from-purple-500 to-pink-500",
  },
  {
    rating: 5,
    quote:
      "Finally feels like I have a senior salesperson coaching me on every call. Absolutely essential for solo entrepreneurs.",
    author: "Emily Watson",
    role: "Business Coach",
    color: "from-amber-500 to-orange-500",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Loved by Sales Professionals Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">{testimonial.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full`} />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Join 2,500+ happy customers</p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-sm font-semibold text-foreground">G2 & Capterra Featured</div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

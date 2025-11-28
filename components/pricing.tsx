"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    billing: "Forever free",
    features: ["10 calls per month", "Basic transcription", "3 custom scripts", "7-day history", "Email support"],
    featured: false,
    cta: "Start Free",
  },
  {
    name: "Professional",
    price: "$29",
    billing: "per user/month",
    features: [
      "Unlimited calls",
      "AI-powered suggestions",
      "Unlimited scripts",
      "Advanced analytics",
      "Priority support",
      "Call recordings",
      "CRM integrations",
    ],
    featured: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    billing: "Contact sales",
    features: [
      "Everything in Pro",
      "Unlimited team seats",
      "Custom AI training",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
    ],
    featured: false,
    cta: "Contact Sales",
  },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">Start free, upgrade when you're ready. No hidden fees.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={plan.featured ? { scale: 1.05 } : {}}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-primary-foreground scale-105 shadow-2xl glow-indigo"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-4 right-4 bg-amber-400 text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold mb-1">{plan.price}</div>
                <div className="text-sm opacity-90">{plan.billing}</div>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.featured
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className={plan.featured ? "text-primary-foreground" : "text-primary"} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm"
        >
          <p>✓ Free 14-day trial • ✓ No credit card required • ✓ Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}

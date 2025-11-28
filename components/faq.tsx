"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does AI Call Assistant work?",
    answer:
      "AI Call Assistant uses advanced machine learning to listen to your sales calls in real-time, transcribe conversations, and provide intelligent suggestions based on the context of your discussion.",
  },
  {
    question: "Will my clients know I'm using AI?",
    answer:
      "No, the AI works entirely on your end. Your clients won't see or know you're using AI assistance. It's completely transparent and seamless.",
  },
  {
    question: "What platforms does it integrate with?",
    answer:
      "We integrate with Zoom, Google Meet, Microsoft Teams, phone calls, and popular CRMs like Salesforce, HubSpot, and Pipedrive.",
  },
  {
    question: "Can I try it before paying?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to get started.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes. All data is encrypted in transit and at rest. We comply with GDPR, CCPA, and SOC 2 standards. Your call data is never used to train our AI models.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Of course! You can cancel your subscription anytime with no penalties. If unsatisfied within 14 days, we offer a full money-back guarantee.",
  },
]

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-muted hover:bg-muted/80 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <motion.div animate={{ rotate: expanded === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} className="text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-card border-t border-border text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

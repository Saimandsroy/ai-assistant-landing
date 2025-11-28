"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Headphones } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/10 -z-10" />

      {/* Animated blob background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse-subtle" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse-subtle"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-full w-fit">
                <Zap size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Trusted by 2,500+ sales teams
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
                AI-Powered
                <span className="block gradient-text">Sales Call Assistant</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance"
            >
              Real-time coaching, smart scripts, and instant call summaries. Sound like a pro on every sales call with
              AI assistance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-blue group flex items-center justify-center gap-2 text-base">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 text-base">
                Book Demo
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <span>14-day free access</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative hidden lg:block h-96"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl blur-3xl opacity-40 -z-10" />

            {/* AI Call Visualization Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative h-full"
            >
              <div className="h-full bg-white dark:bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col p-6 glass">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Headphones size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Live Sales Call</p>
                      <p className="text-xs text-muted-foreground">John - Tech Corp</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>

                {/* Waveform animation */}
                <div className="flex items-center justify-center gap-1 h-16 bg-blue-50 dark:bg-blue-950/20 rounded-xl mb-6">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                      initial={{ height: 8 }}
                      animate={{ height: [8, 24, 16, 20, 8] }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.08,
                      }}
                      style={{ minWidth: 6 }}
                    />
                  ))}
                </div>

                {/* Transcript section */}
                <div className="space-y-3 mb-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Conversation
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Client:</span> What about implementation time?
                    </p>
                  </motion.div>
                </div>

                {/* AI Suggestion */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg mt-auto"
                >
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">💡 AI Suggestion</p>
                  <p className="text-sm text-green-900 dark:text-green-200">
                    Mention: "Most clients see ROI in 30 days"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

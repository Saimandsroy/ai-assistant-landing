"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SocialProof from "@/components/social-proof"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import FeaturesShowcase from "@/components/features-showcase"
import HowItWorks from "@/components/how-it-works"
import VideoShowcase from "@/components/video-showcase"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <FeaturesShowcase />
      <HowItWorks />
      <VideoShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

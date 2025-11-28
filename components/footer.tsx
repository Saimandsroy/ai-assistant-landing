"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Video Tutorials", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Community", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "Security", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-16 lg:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-foreground font-semibold capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm">© 2025 AI Call Assistant. All rights reserved.</div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg">
                <Youtube size={20} />
              </a>
            </div>

            <a href="#" className="text-sm hover:text-foreground transition-colors">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

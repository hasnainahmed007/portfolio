'use client'

import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: 'https://github.com/hasnainahmed007', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/santo07', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mdh05944@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-bg-tertiary border border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

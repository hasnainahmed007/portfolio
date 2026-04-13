'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Download } from 'lucide-react'

const roles = [
  'Software Engineer',
  'System Architect',
  'API Developer',
  'DevOps Engineer',
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent-primary font-mono text-sm tracking-wider"
            >
              Hello, I am
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold"
            >
              <span className="text-text-primary">Hasnain </span>
              <span className="gradient-text">Ahmed</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-12"
            >
              <Typewriter roles={roles} />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable SaaS and enterprise applications with Laravel. 
            Turning complex problems into elegant solutions through clean architecture 
            and modern development practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg">
              <a href="https://bhromonbd.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View Recent Work <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="secondary" size="lg">
              Download Resume <Download size={18} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Typewriter({ roles }: { roles: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl font-semibold"
    >
      <span className="text-text-primary">I am a </span>
      <span className="gradient-text">
        <TypewriterInner roles={roles} />
      </span>
    </motion.div>
  )
}

function TypewriterInner({ roles }: { roles: string[] }) {
  return (
    <motion.span
      key={roles[0]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="inline-block"
    >
      {roles[0]}
    </motion.span>
  )
}

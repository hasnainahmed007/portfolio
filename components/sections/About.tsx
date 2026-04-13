'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Code2, Users, Zap, Globe } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Building maintainable, scalable applications with modular architecture and service layer patterns.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Experienced in leading teams, code reviews, and implementing CI/CD pipelines for seamless workflows.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing queries, implementing caching strategies, and ensuring lightning-fast user experiences.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploying and managing applications serving thousands of users with multi-tenant architectures.'
  }
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Passionate about crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              With over <span className="text-accent-primary font-semibold">5+ years</span> of experience 
              in full-stack development, I specialize in building robust backend systems with 
              <span className="text-text-primary font-medium"> Laravel</span> and creating 
              intuitive user interfaces with <span className="text-text-primary font-medium">React</span>.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My expertise spans the entire development lifecycle—from designing scalable 
              architectures and implementing complex features to deploying and monitoring 
              production applications. I am particularly passionate about event-driven 
              systems, real-time applications, and leveraging AI to enhance developer productivity.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I am not coding, you will find me exploring new technologies, contributing 
              to open-source projects, or helping others grow in their development journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <Card key={index} className="text-center">
                <item.icon className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

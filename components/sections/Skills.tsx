'use client'

import { motion } from 'framer-motion'
import { Server, Monitor, Database, Cloud, Cpu, MonitorIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SkillTag } from '@/components/ui/SkillTag'
import { skillCategories } from '@/data/skills'

const iconMap: Record<string, React.ElementType> = {
  Server,
  Monitor,
  Database,
  Cloud,
  Cpu,
  MonitorIcon
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-primary/10">
                    {(() => {
                      const IconComponent = iconMap[category.icon]
                      return IconComponent ? <IconComponent className="w-5 h-5 text-accent-primary" /> : null
                    })()}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <SkillTag key={i} index={i}>
                      {skill}
                    </SkillTag>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

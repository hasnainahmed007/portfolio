'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Experience } from '@/data/experience'
import { Card } from './Card'
import { SkillTag } from './SkillTag'

interface TimelineItemProps {
  experience: Experience
  index: number
  isLast: boolean
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8">
      <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-border" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.3 }}
        className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-accent-gradient flex items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-bg-primary" />
      </motion.div>

      <div className={cn('flex-1 pb-12', isLast && 'pb-0')}>
        <Card hover={false} className="ml-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {experience.role}
              </h3>
              <p className="text-accent-primary font-medium">{experience.company}</p>
              <p className="text-sm text-text-muted">{experience.duration}</p>
            </div>
            
            <p className="text-text-secondary text-sm leading-relaxed">
              {experience.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {experience.technologies.map((tech, i) => (
                <SkillTag key={i} index={i}>{tech}</SkillTag>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

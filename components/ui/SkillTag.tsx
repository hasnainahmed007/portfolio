'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SkillTagProps {
  children: string
  className?: string
  index?: number
}

export function SkillTag({ children, className, index = 0 }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-md bg-bg-tertiary border border-border text-xs font-mono text-text-secondary hover:border-accent-primary/50 hover:text-text-primary transition-all duration-200 cursor-default',
        className
      )}
    >
      {children}
    </motion.span>
  )
}

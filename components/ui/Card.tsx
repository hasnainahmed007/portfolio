'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      className={cn(
        'bg-bg-secondary border border-border rounded-xl p-6 transition-all duration-300',
        hover && 'hover:border-border-hover hover:shadow-xl hover:shadow-black/20',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SkillTag } from '@/components/ui/SkillTag'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of projects that showcase my expertise and passion for building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="h-full group relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-accent-gradient text-xs font-semibold text-white rounded-full">
                    Featured
                  </div>
                )}
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <SkillTag key={i} index={i}>{tech}</SkillTag>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-primary transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-primary transition-colors"
                      >
                        <Github size={14} /> Source
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="lg">
            <Github size={18} /> View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Mirpur-1, Bangladesh'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mdh05944@gmail.com'
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open to opportunities'
  }
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = 'Name is required'
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formState.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setIsSubmitting(true)
    setErrors({})
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  error={errors.name}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  error={errors.email}
                />
                <Input
                  label="Subject"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  error={errors.subject}
                />
                <Textarea
                  label="Message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  error={errors.message}
                />
                <Button type="submit" className="w-full" isLoading={isSubmitting}>
                  <Send size={18} /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent-primary/10">
                      <info.icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{info.label}</p>
                      <p className="text-text-primary font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-accent-primary/20">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Whether you need a robust backend system, a responsive frontend, 
                or a complete full-stack solution, I am here to help turn your 
                ideas into reality.
              </p>
              <div className="flex gap-3">
                <Button size="sm" className="flex-1">Schedule a Call</Button>
                <Button variant="secondary" size="sm" className="flex-1">Send Email</Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

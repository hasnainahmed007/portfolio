export interface Experience {
  company: string
  role: string
  duration: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    description: 'Leading development of enterprise SaaS applications using Laravel and React. Architected multi-tenant systems serving 50,000+ users. Implemented event-driven architectures with Kafka and real-time features using Laravel Reverb.',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'AWS']
  },
  {
    company: 'Digital Solutions Ltd.',
    role: 'Full Stack Developer',
    duration: '2019 - 2022',
    description: 'Built scalable web applications and RESTful APIs for clients across e-commerce and fintech sectors. Integrated payment gateways including Stripe and PayPal. Reduced API response times by 40% through query optimization.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'JavaScript', 'Bootstrap']
  },
  {
    company: 'StartupXYZ',
    role: 'Junior Backend Developer',
    duration: '2017 - 2019',
    description: 'Developed and maintained backend services for a growing startup. Implemented authentication systems using Laravel Passport. Collaborated with frontend team to deliver full-stack features.',
    technologies: ['Laravel', 'MySQL', 'REST APIs', 'Git']
  }
]

export interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Multi-Tenant SaaS Platform',
    description: 'Enterprise-grade multi-tenant platform with subscription billing and role-based access control.',
    longDescription: 'A comprehensive SaaS platform supporting multiple organizations with isolated data, subscription management via Stripe, real-time notifications using Laravel Reverb, and an AI-powered dashboard for analytics.',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis', 'Stripe', 'Docker', 'AI SDK'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Real-Time Collaboration Tool',
    description: 'Team collaboration platform with live document editing and video conferencing.',
    longDescription: 'Built with Laravel Reverb for real-time WebSocket connections, featuring live document collaboration, integrated video calls, and activity feeds with presence indicators.',
    technologies: ['Laravel', 'InertiaJS', 'Vue', 'PostgreSQL', 'Reverb', 'WebRTC'],
    githubUrl: '#',
    featured: true
  },
  {
    title: 'E-Commerce API Suite',
    description: 'High-performance RESTful APIs powering multiple storefronts with inventory management.',
    longDescription: 'Scalable e-commerce API ecosystem supporting multiple storefronts, with automated inventory sync, PayPal and Stripe payments, and comprehensive admin dashboards.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'Stripe', 'PayPal', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'AI Workflow Automation',
    description: 'Custom AI agent system for automated business process optimization.',
    longDescription: 'Integrates multiple AI models through MCP protocol to automate repetitive tasks, generate reports, and provide intelligent insights from business data.',
    technologies: ['Next.js', 'AI SDK', 'MCP', 'Python', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with appointment scheduling.',
    longDescription: 'Full-featured healthcare platform with patient records management, automated appointment reminders, prescription tracking, and comprehensive audit logging.',
    technologies: ['Laravel', 'React', 'MySQL', 'Docker', 'AWS'],
    liveUrl: '#'
  },
  {
    title: 'DevOps Monitoring Dashboard',
    description: 'Real-time infrastructure monitoring with custom alerts and log analysis.',
    longDescription: 'Centralized monitoring solution aggregating metrics from Prometheus, application logs from Sentry, and custom business metrics with intelligent alerting via Grafana.',
    technologies: ['Next.js', 'Grafana', 'Prometheus', 'Sentry', 'Docker', 'PostgreSQL'],
    githubUrl: '#'
  }
]

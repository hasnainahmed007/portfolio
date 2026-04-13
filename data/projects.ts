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
    title: 'Restaurant SaaS with Food Ordering System',
    description: 'Full-featured restaurant management platform with online ordering.',
    longDescription: 'Comprehensive SaaS platform for restaurants including table management, food ordering system, Kitchen Display System (KDS), and real-time order tracking with Laravel Reverb.',
    technologies: ['Laravel', 'React', 'MySQL', 'Redis', 'Reverb', 'Docker'],
    featured: true
  },
  {
    title: 'HRM Management System',
    description: 'Complete HR management solution with attendance and payroll.',
    longDescription: 'Enterprise HRM system featuring employee management, attendance tracking, leave management, payroll processing, and performance evaluation modules.',
    technologies: ['Laravel', 'InertiaJS', 'MySQL', 'Redis', 'Docker'],
    featured: true
  },
  {
    title: 'ERP System',
    description: 'Comprehensive enterprise resource planning solution.',
    longDescription: 'Full-featured ERP system with inventory management, supply chain tracking, financial reporting, and business analytics dashboard for decision making.',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis', 'Kafka'],
    featured: true
  },
  {
    title: 'Multi-Tenant POS Platform',
    description: 'Multi-tenant point of sale system for retail businesses.',
    longDescription: 'Scalable multi-tenant POS platform supporting multiple retail stores with isolated data, inventory sync, sales reporting, and real-time analytics.',
    technologies: ['Laravel', 'React', 'MySQL', 'Redis', 'Stripe', 'Docker'],
    featured: true
  },
  {
    title: 'Pharmacy Management System',
    description: 'Pharmacy management with inventory and prescription tracking.',
    longDescription: 'Specialized pharmacy management system with drug inventory, prescription management, expiry tracking, and supplier coordination features.',
    technologies: ['Laravel', 'InertiaJS', 'MySQL', 'Docker'],
  },
  {
    title: 'Rental Management System',
    description: 'Property rental management with tenant tracking.',
    longDescription: 'Property rental management system featuring tenant onboarding, rent tracking, maintenance requests, utility management, and financial reporting.',
    technologies: ['Laravel', 'React', 'MySQL', 'Redis'],
  }
]
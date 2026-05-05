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
    technologies: ['PHP', 'Laravel', 'React', 'MySQL', 'Redis', 'Reverb', 'Docker'],
    liveUrl: 'https://restaurantapp.acnoo.xyz',
    featured: true
  },
  {
    title: 'BhromonBD',
description: 'A tourism platform for discovering tourist spots across Bangladesh and connecting travelers with local hosts and travel services.',

longDescription: 'BhromonBD is a travel and tourism platform that helps users explore tourist destinations, hidden gems, and local attractions across Bangladesh. It allows local hosts to list hotels, resorts, transport, tour packages, and other travel services based on specific tourist locations, creating a complete and reliable travel experience in one place.',
    technologies: ['PHP', 'Laravel', 'Livewire', 'React.js/Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://bhromonbd.vercel.app',
    featured: true
  },
  {
    title: 'ERP System',
    description: 'Comprehensive enterprise resource planning solution.',
    longDescription: 'Full-featured ERP system with inventory management, supply chain tracking, financial reporting, and business analytics dashboard for decision making.',
    technologies: ['PHP', 'Laravel', 'JQuery', 'Javascript', 'MySQL'],
    liveUrl: 'https://glasserp.acnoo.xyz',
    featured: true
  },
  {
    title: 'Multi-Tenant POS Platform',
    description: 'Multi-tenant point of sale system for retail businesses.',
    longDescription: 'Scalable multi-tenant POS platform supporting multiple retail stores with isolated data, inventory sync, sales reporting, and real-time analytics.',
    technologies: ['PHP', 'Laravel', 'JQuery', 'Javascript', 'MySQL', 'Redis', 'Stripe', 'Docker'],
    liveUrl: 'https://pospro.acnoo.xyz',
    featured: true
  },
  {
    title: 'Pharmacy Management System',
    description: 'Pharmacy management with inventory and prescription tracking.',
    longDescription: 'Specialized pharmacy management system with drug inventory, prescription management, expiry tracking, and supplier coordination features.',
    technologies: ['PHP', 'Laravel', 'JQuery', 'Javascript', 'MySQL'],
    liveUrl: 'https://acnoopharmacy.acnoo.xyz',
  },
  {
    title: 'Rental Management System',
    description: 'Property rental management with tenant tracking.',
    longDescription: 'Property rental management system featuring tenant onboarding, rent tracking, maintenance requests, utility management, and financial reporting.',
    technologies: ['PHP', 'Laravel', 'JQuery', 'Javascript', 'MySQL', 'Redis'],
    liveUrl: 'https://rentpro.acnoo.xyz',
  }
]
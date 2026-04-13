export interface Experience {
  company: string
  role: string
  duration: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Acnoo',
    role: 'Software Engineer',
    duration: 'Feb 2024 – April 2026',
    description: 'Designed and developed scalable RESTful APIs for a SaaS-based business management system. Implemented role-based authorization system handling 5+ user types with dynamic permissions. Built modular Laravel architecture improving maintainability and feature scalability. Led a team of 3 developers, conducted code reviews, and mentored junior developers.',
    technologies: ['Laravel', 'RESTful APIs', 'Docker', 'PostgreSQL', 'Redis', 'Reverb', 'Kafka']
  },
  {
    company: 'Acnoo',
    role: 'Intern – Software Engineer',
    duration: 'Dec 2023 – Feb 2024',
    description: 'Worked collaboratively with the development team to resolve customer-reported issues. Assisted in debugging and improving existing Laravel-based applications. Contributed to feature enhancements and bug fixes under senior developer guidance.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript']
  }
]
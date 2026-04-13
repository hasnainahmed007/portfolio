export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['PHP (Laravel)', 'RESTful APIs', 'Modular Architecture', 'Authentication (Passport, Sanctum)', 'Role & Permission Systems', 'Validation', 'Middleware', 'Service Layer Pattern', 'Redis', 'Queue Systems', 'Apache Kafka', 'Event-Driven', 'Reverb', 'PayPal & Stripe Integration']
  },
  {
    title: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'InertiaJS', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'Next.js']
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'Database Design', 'Query Optimization', 'Indexing', 'Normalization', 'Eloquent ORM']
  },
  {
    title: 'DevOps',
    icon: 'Cloud',
    skills: ['Docker', 'Git', 'GitHub', 'CI/CD', 'VPS/Cloud Deployment', 'SaaS Architecture', 'Multi-Tenant Systems', 'System Design', 'Linux (Fedora, Ubuntu)', 'VMware', 'VirtualBox', 'WSL']
  },
  {
    title: 'AI & Tools',
    icon: 'Cpu',
    skills: ['AI SDK Integration', 'MCP (Model Context Protocol)', 'AI Workflow Automation', 'Opencode', 'Claude Code', 'GitHub Copilot', 'Grafana', 'Prometheus', 'Sentry', 'Log Analysis']
  }
]

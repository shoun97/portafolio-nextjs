export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
};

export type Skill = {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
};

export const projects: Project[] = [
  {
    id: 'agroerp',
    title: 'AgroERP',
    description: 'A comprehensive ERP solution for agricultural businesses, streamlining operations from field to finance.',
    longDescription: 'AgroERP is a full-featured enterprise resource planning system specifically designed for agricultural businesses. It integrates farm management, inventory tracking, supply chain management, financial reporting, and analytics into a single platform. The system helps farm owners and managers make data-driven decisions, optimize resource allocation, and increase operational efficiency.',
    imageUrl: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
    demoUrl: 'https://project-empty-field-1800.fly.dev',
    githubUrl: 'https://github.com/shoun97/agroQR',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL', 'AWS'],
    featured: true,
  },
  {
    id: 'agroqr',
    title: 'AgroQR',
    description: 'QR-based tracking and traceability system for agricultural products from farm to consumer.',
    longDescription: 'AgroQR provides end-to-end traceability for agricultural products by generating unique QR codes that track items through the entire supply chain. Consumers can scan these codes to view the complete journey of their food, including origin, farming practices, processing details, and distribution routes. This transparency builds trust and supports sustainable farming by highlighting responsible producers.',
    imageUrl: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg',
    demoUrl: 'https://agroqr.org/',
    githubUrl: 'https://github.com/shoun97/agroQR',
    tags: ['Next.js', 'Express', 'MongoDB', 'QR Code API', 'Vercel'],
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'HTML/CSS', level: 5, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 5, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'NestJS', level: 3, category: 'backend' },
  { name: 'GraphQL', level: 4, category: 'backend' },
  { name: 'REST API', level: 5, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', level: 4, category: 'database' },
  { name: 'MongoDB', level: 4, category: 'database' },
  { name: 'Supabase', level: 5, category: 'database' },
  { name: 'Firebase', level: 3, category: 'database' },
  
  // DevOps
  { name: 'Docker', level: 4, category: 'devops' },
  { name: 'AWS', level: 3, category: 'devops' },
  { name: 'CI/CD', level: 4, category: 'devops' },
  { name: 'Git', level: 5, category: 'devops' },
  
  // Other
  { name: 'Agile/Scrum', level: 4, category: 'other' },
  { name: 'UI/UX Design', level: 3, category: 'other' },
  { name: 'Testing', level: 4, category: 'other' },
];

export const socialLinks = {
  github: 'https://github.com/shoun97',
  linkedin: 'https://www.linkedin.com/in/manuel-urra/',
  upwork: 'https://www.upwork.com/freelancers/manud3v',
  email: 'manuelurra2497@gmail.com',
  whatsapp: 'https://wa.me/56969020106',
};
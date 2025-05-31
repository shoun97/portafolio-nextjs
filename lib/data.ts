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
    demoUrl: 'https://agroerp.example.com',
    githubUrl: 'https://github.com/johndoe/agroerp',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL', 'AWS'],
    featured: true,
  },
  {
    id: 'agroqr',
    title: 'AgroQR',
    description: 'QR-based tracking and traceability system for agricultural products from farm to consumer.',
    longDescription: 'AgroQR provides end-to-end traceability for agricultural products by generating unique QR codes that track items through the entire supply chain. Consumers can scan these codes to view the complete journey of their food, including origin, farming practices, processing details, and distribution routes. This transparency builds trust and supports sustainable farming by highlighting responsible producers.',
    imageUrl: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg',
    demoUrl: 'https://agroqr.example.com',
    githubUrl: 'https://github.com/johndoe/agroqr',
    tags: ['Next.js', 'Express', 'MongoDB', 'QR Code API', 'Vercel'],
    featured: true,
  },
  {
    id: 'nxtara',
    title: 'Nxtara',
    description: 'A modern e-commerce platform built with Next.js, featuring headless CMS integration and payment processing.',
    longDescription: 'Nxtara is a high-performance e-commerce solution built on Next.js that offers blazing-fast page loads and seamless user experience. The platform integrates with headless CMS systems for content management, supports multiple payment gateways, and provides advanced analytics. Features include product categorization, search functionality, user accounts, wishlists, and a streamlined checkout process.',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    demoUrl: 'https://nxtara.example.com',
    githubUrl: 'https://github.com/johndoe/nxtara',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Sanity CMS', 'Vercel'],
    featured: true,
  },
  {
    id: 'devblog',
    title: 'Developer Blog',
    description: 'A technical blog sharing insights on web development, cloud architecture, and software engineering best practices.',
    longDescription: 'This developer blog serves as both a personal knowledge base and a platform to share technical insights with the wider developer community. Articles cover topics ranging from practical coding tutorials to in-depth explorations of architectural patterns and emerging technologies. The blog itself is built using modern Jamstack principles for optimal performance and security.',
    imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    githubUrl: 'https://github.com/johndoe/devblog',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    featured: false,
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
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  upwork: 'https://upwork.com/freelancers/johndoe',
  email: 'hello@johndoe.dev',
  whatsapp: 'https://wa.me/1234567890',
};
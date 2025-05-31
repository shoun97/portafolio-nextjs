import { Metadata } from 'next';
import Image from 'next/image';
import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const metadata: Metadata = {
  title: 'About Me | Manu Dev - Full Stack Developer',
  description: 'Learn more about Manu Dev, a Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
};

export default function AboutPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Category display names
  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps',
    other: 'Other Skills'
  };
  
  return (
    <div className="container px-6 py-32 mx-auto max-w-7xl">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
        <p className="text-lg text-muted-foreground">
          A passionate Full Stack Developer with a focus on creating efficient, scalable, and user-friendly applications.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-5 mb-16">
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full bg-muted">
            <Image 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Manu Dev"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
              priority
            />
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h2 className="mb-4 text-2xl font-bold">My Story</h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground">
            <p>
              With over 5 years of experience in web development, I specialize in building modern, responsive, and performant web applications. My journey began with a passion for solving complex problems through code, and it has evolved into a career focused on creating impactful digital solutions.
            </p>
            <p>
              I've worked with startups and established businesses across various industries, helping them leverage technology to achieve their goals. My approach combines technical expertise with a strong emphasis on user experience and business objectives.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement.
            </p>
          </div>
        </div>
      </div>

      <h2 className="mb-8 text-2xl font-bold text-center">Skills & Expertise</h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <Card key={category} className="p-6">
            <h3 className="mb-4 text-xl font-semibold">
              {categoryNames[category as keyof typeof categoryNames]}
            </h3>
            <CardContent className="p-0 space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {skill.level === 1 && 'Basic'}
                      {skill.level === 2 && 'Intermediate'}
                      {skill.level === 3 && 'Proficient'}
                      {skill.level === 4 && 'Advanced'}
                      {skill.level === 5 && 'Expert'}
                    </span>
                  </div>
                  <Progress value={skill.level * 20} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
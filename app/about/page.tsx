import { Metadata } from 'next';
import Image from 'next/image';
import type { Skill } from '@/lib/data';
import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const metadata: Metadata = {
  title: 'About Me | Manu Dev - Full Stack Developer',
  description:
    'Learn more about Manu Dev, a Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
};

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  other: 'Other Skills',
};

const getSkillLabel = (level: number): string =>
  ['Basic', 'Intermediate', 'Proficient', 'Advanced', 'Expert'][level - 1] ?? '';

const groupByCategory = (items: Skill[]): Record<Skill['category'], Skill[]> =>
  items.reduce((acc, item) => {
    acc[item.category] ||= [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

export default function AboutPage() {
  const groupedSkills = groupByCategory(skills);

  return (
    <div className="container px-6 py-32 mx-auto max-w-7xl">
      <section className="max-w-2xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
        <p className="text-lg text-muted-foreground">
          A passionate Full Stack Developer with a focus on creating efficient, scalable, and user-friendly applications.
        </p>
      </section>

      <section className="grid gap-12 md:grid-cols-5 mb-16">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative w-48 h-48 overflow-hidden rounded-full bg-muted">
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Manu Dev"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="mb-4 text-2xl font-bold">My Story</h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground">
            <p>
              With over 5 years of experience in web development, I specialize in building modern, responsive, and performant web applications.
            </p>
            <p>
              I've worked with startups and established businesses across various industries, helping them leverage technology to achieve their goals.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing insights through blogs and communities.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold text-center">Skills & Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <Card key={category} className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                {categoryLabels[category as Skill['category']]}
              </h3>
              <CardContent className="p-0 space-y-4">
                {categorySkills.map(({ name, level }) => (
                  <div key={name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{name}</span>
                      <span className="text-xs text-muted-foreground">
                        {getSkillLabel(level)}
                      </span>
                    </div>
                    {/* <Progress value={level * 20} className="h-2" /> */}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

        </div>
      </section>
    </div>
  );
}

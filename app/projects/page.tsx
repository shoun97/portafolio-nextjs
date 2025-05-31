import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';

export const metadata: Metadata = {
  title: 'Projects | Manu Dev - Full Stack Developer',
  description: 'View my portfolio of web development and software engineering projects.',
};

export default function ProjectsPage() {
  return (
    <div className="container px-6 py-32 mx-auto max-w-7xl">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A selection of projects I've worked on, showcasing my skills and experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
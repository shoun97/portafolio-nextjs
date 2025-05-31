import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Manu Dev - Full Stack Developer`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container px-6 py-32 mx-auto max-w-4xl">
      <Link 
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      
      <div className="relative h-64 sm:h-80 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
        />
      </div>
      
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {project.demoUrl && (
          <Button asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              View Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View Code <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
      
      <Card className="p-6 mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>
      </Card>
    </div>
  );
}
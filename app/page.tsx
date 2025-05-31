import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/90 z-0" />
        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I&apos;m <span className="text-primary">Manu Dev</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground">
              Full Stack Developer building modern web applications with React, Node.js, and cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="mb-12 md:flex md:items-center md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/projects"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center"
              >
                View all projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              I'm currently available for freelance work and new opportunities. 
              If you have a project that needs coding expertise, I'd love to help.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
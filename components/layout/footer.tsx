import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            href="mailto:hello@johndoe.dev"
            className="text-foreground/70 hover:text-foreground"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-foreground/70">
            &copy; {new Date().getFullYear()} Manu Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
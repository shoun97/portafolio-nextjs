import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Mail, ExternalLink, MessageSquare } from 'lucide-react';

export default function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect With Me</CardTitle>
        <CardDescription>
          Find me on these platforms or send me an email directly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <a 
          href={`mailto:${socialLinks.email}`}
          className="flex items-center p-4 transition-colors rounded-lg border hover:bg-muted"
        >
          <Mail className="w-5 h-5 mr-3 text-primary" />
          <div>
            <h3 className="text-sm font-medium">Email</h3>
            <p className="text-sm text-muted-foreground">{socialLinks.email}</p>
          </div>
        </a>
        
        <a 
          href={socialLinks.linkedin}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 transition-colors rounded-lg border hover:bg-muted"
        >
          <Linkedin className="w-5 h-5 mr-3 text-primary" />
          <div>
            <h3 className="text-sm font-medium">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect professionally</p>
          </div>
        </a>
        
        <a 
          href={socialLinks.github}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 transition-colors rounded-lg border hover:bg-muted"
        >
          <Github className="w-5 h-5 mr-3 text-primary" />
          <div>
            <h3 className="text-sm font-medium">GitHub</h3>
            <p className="text-sm text-muted-foreground">See my open-source work</p>
          </div>
        </a>
        
        <a 
          href={socialLinks.upwork}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 transition-colors rounded-lg border hover:bg-muted"
        >
          <ExternalLink className="w-5 h-5 mr-3 text-primary" />
          <div>
            <h3 className="text-sm font-medium">Upwork</h3>
            <p className="text-sm text-muted-foreground">Hire me for freelance work</p>
          </div>
        </a>
        
        <a 
          href={socialLinks.whatsapp}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 transition-colors rounded-lg border hover:bg-muted"
        >
          <MessageSquare className="w-5 h-5 mr-3 text-primary" />
          <div>
            <h3 className="text-sm font-medium">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Quick chat about your project</p>
          </div>
        </a>
      </CardContent>
    </Card>
  );
}
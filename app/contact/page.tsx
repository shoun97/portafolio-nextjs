import { Metadata } from 'next';
import ContactForm from '@/components/contact/contact-form';
import SocialLinks from '@/components/contact/social-links';

export const metadata: Metadata = {
  title: 'Contact | John Doe - Full Stack Developer',
  description: 'Get in touch with John Doe for freelance projects, job opportunities, or collaboration.',
};

export default function ContactPage() {
  return (
    <div className="container px-6 py-32 mx-auto max-w-7xl">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Me</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or want to discuss an opportunity? Get in touch and let's talk.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
}
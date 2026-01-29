import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, Copy, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { portfolioData } from '@/data/portfolioData';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const breastCancerProject = portfolioData.projects.find(p => p.title.includes("Breast Cancer"));

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("akshat.desai.754@gmail.com");
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    console.log("Form Data:", Object.fromEntries(formData.entries()));

    try {
      // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
      // You can get these from your EmailJS dashboard: https://dashboard.emailjs.com/admin
      await emailjs.sendForm(
        'service_27xm3la',
        'template_xdeuuwt',
        formRef.current,
        '8RNF99joO_8t5NMEZ'
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);

      // Fallback to mailto if EmailJS fails or isn't configured
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      const mailtoLink = `mailto:akshat.desai.754@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      toast({
        title: "Service Unavailable",
        description: "Redirecting to your email client...",
        variant: "destructive",
      });

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background-secondary">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Interested in collaborating on AI projects or have a question? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for an AI engineer, research collaborator, or just want to chat about
                machine learning—I'm always open to new opportunities and conversations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-blue-400/50 transition-all group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white group-hover:text-blue-200 transition-colors">akshat.desai.754@gmail.com</p>
                  </div>
                  <Copy size={16} className="text-gray-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Fullerton, California</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Akshat1661"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-desai-10bba1235/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:akshat.desai.754@gmail.com"
                className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {!isSubmitted ? (
                <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 border border-white/10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400/50 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or question..."
                      rows={5}
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400/50 text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-8 rounded-2xl border border-green-500/30 bg-green-500/5 text-center h-full flex flex-col justify-center items-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-300 mb-8 max-w-sm mx-auto">
                    Thanks for reaching out! I will get back to you shortly. While you wait, feel free to explore my latest research.
                  </p>

                  {breastCancerProject && (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-colors cursor-pointer group"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs font-bold rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          Latest Research
                        </span>
                        <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors ml-auto" />
                      </div>
                      <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors mb-1 line-clamp-1">
                        {breastCancerProject.title}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {breastCancerProject.description}
                      </p>
                    </motion.div>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-6 text-gray-400 hover:text-white"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
    <section id="contact" className="py-28 bg-background-secondary">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-2xl mx-auto text-zinc-500">
            Open to AI/ML engineering, applied research, and software roles where models need to become reliable systems.
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
              <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Whether you're looking for an AI engineer, research collaborator, or want to discuss a project — feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <button
                onClick={copyEmailToClipboard}
                className="flex items-center gap-4 p-4 bg-zinc-950/80 border border-white/[0.09] rounded-xl hover:border-white/[0.18] transition-all group w-full text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-zinc-600 mb-0.5">Email</p>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">akshat.desai.754@gmail.com</p>
                </div>
                <Copy size={14} className="text-zinc-700 group-hover:text-white/50 opacity-0 group-hover:opacity-100 transition-all" />
              </button>

              <div className="flex items-center gap-4 p-4 bg-zinc-950/80 border border-white/[0.09] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-0.5">Location</p>
                  <p className="text-sm font-medium text-white/80">Fullerton, California, United States</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Akshat1661"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center text-white/40 hover:bg-white/[0.1] hover:text-white/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-desai-10bba1235/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center text-white/40 hover:bg-white/[0.1] hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=akshat.desai.754@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center text-white/40 hover:bg-white/[0.1] hover:text-white/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-zinc-950/80 border border-white/[0.09] p-8 rounded-2xl space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-2 text-zinc-500 uppercase tracking-widest">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="bg-white/[0.04] border-white/[0.09] focus:border-white/25 text-white placeholder:text-zinc-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-2 text-zinc-500 uppercase tracking-widest">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="bg-white/[0.04] border-white/[0.09] focus:border-white/25 text-white placeholder:text-zinc-700"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium mb-2 text-zinc-500 uppercase tracking-widest">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="bg-white/[0.04] border-white/[0.09] focus:border-white/25 text-white placeholder:text-zinc-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-2 text-zinc-500 uppercase tracking-widest">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                    className="bg-white/[0.04] border-white/[0.09] focus:border-white/25 text-white placeholder:text-zinc-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 active:bg-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-950/80 border border-white/[0.09] p-8 rounded-2xl text-center flex flex-col justify-center items-center min-h-[400px]"
              >
                <div className="w-12 h-12 bg-white/[0.08] border border-white/[0.12] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Message Sent</h3>
                <p className="text-zinc-500 text-sm mb-8 max-w-xs mx-auto">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-500 hover:text-white"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

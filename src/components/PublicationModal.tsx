import { motion } from 'framer-motion';
import { FileText, ExternalLink, Users, Calendar, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  doi: string;
  abstract: string;
  keywords: string[];
  type: string;
  pdfUrl?: string;
}

interface PublicationModalProps {
  publication: Publication | null;
  open: boolean;
  onClose: () => void;
}

export function PublicationModal({ publication, open, onClose }: PublicationModalProps) {
  if (!publication) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-primary/20 p-0">
        <div className="relative">
          {/* Header with gradient */}
          <div className="bg-gradient-to-br from-primary/20 via-background to-background p-6 pb-4">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  {publication.type}
                </span>
              </div>
              <DialogTitle className="text-xl font-bold leading-tight">
                {publication.title}
              </DialogTitle>
            </DialogHeader>
          </div>

          <div className="p-6 pt-4 space-y-6">
            {/* Authors */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                <Users size={16} />
                Authors
              </h4>
              <p className="text-muted-foreground">{publication.authors.join(', ')}</p>
            </motion.div>

            {/* Venue & Year */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/10">
                <BookOpen size={16} className="text-primary" />
                <span className="text-sm font-medium">{publication.venue}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/10">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm font-medium">{publication.year}</span>
              </div>
            </motion.div>

            {/* Abstract */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <FileText size={16} />
                Abstract
              </h4>
              <div className="glass-card rounded-xl p-4">
                <DialogDescription className="text-muted-foreground leading-relaxed text-sm">
                  {publication.abstract}
                </DialogDescription>
              </div>
            </motion.div>

            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Tag size={16} />
                Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {publication.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* PDF Preview */}
            {publication.pdfUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-sm font-semibold text-primary mb-3">PDF Preview</h4>
                <div className="rounded-xl overflow-hidden border border-primary/20 bg-background/50">
                  <iframe
                    src={publication.pdfUrl}
                    className="w-full h-[400px]"
                    title={`${publication.title} PDF`}
                  />
                </div>
              </motion.div>
            )}

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button variant="hero" size="sm" asChild>
                <a href={publication.doi} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  View Publication
                </a>
              </Button>
              {publication.pdfUrl && (
                <Button variant="hero-outline" size="sm" asChild>
                  <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <FileText size={16} className="mr-2" />
                    Download PDF
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

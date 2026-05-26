import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 pb-24 px-6 md:px-20 relative overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Publications
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {portfolioData.publications.map((pub, index) => (
            <motion.div
              key={`${pub.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="group relative h-full"
            >
              <div className="h-full flex flex-col bg-zinc-950/80 border border-white/[0.09] rounded-2xl p-7 hover:border-white/[0.18] transition-all duration-300">
                {/* Status pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-white/45 border border-white/[0.1]">
                    {pub.status}
                  </span>
                  <span className="text-zinc-600 text-xs font-medium">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-white mb-4 leading-snug flex-1">
                  {pub.title}
                </h3>

                {/* Conference */}
                <p className="text-zinc-500 text-sm mb-3">
                  {pub.conference}
                </p>

                {/* Co-authors */}
                <p className="text-zinc-600 text-xs mb-6">
                  {pub.coAuthors}
                </p>

                {/* View paper link */}
                {pub.link !== "#" ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors duration-150 w-full justify-center"
                  >
                    <ExternalLink size={14} />
                    View Full Paper
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] text-white/30 text-sm font-medium rounded-lg border border-white/[0.08] w-full justify-center cursor-not-allowed">
                    Link Coming Soon
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

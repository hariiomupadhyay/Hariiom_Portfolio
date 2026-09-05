import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaMicrophone, FaUsers, FaComments, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPython, SiMysql, SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrain } from "react-icons/tb";

import { Typewriter } from "./ui/typewriter";
import { useLanguage } from "@/lib/language";

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const skills: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "Frontend", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", category: "Frontend", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", category: "Frontend", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", category: "Frontend", icon: <FaBootstrap className="text-purple-500" /> },

  // Backend & Databases
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", category: "Backend", icon: <SiExpress className="text-[color:var(--color-text-secondary)]" /> },
  { name: "MongoDB", category: "Backend", icon: <SiMongodb className="text-emerald-500" /> },
  { name: "Python", category: "Backend", icon: <SiPython className="text-blue-400" /> },
  { name: "MySQL", category: "Backend", icon: <SiMysql className="text-sky-400" /> },
  { name: "PostgreSQL", category: "Backend", icon: <FaDatabase className="text-indigo-400" /> },
  { name: "REST APIs", category: "Backend", icon: <FaNodeJs className="text-teal-400" /> },

  // Tools
  { name: "Git", category: "Tools", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", category: "Tools", icon: <FaGithub className="text-[color:var(--color-text-primary)]" /> },
  { name: "VS Code", category: "Tools", icon: <VscCode className="text-blue-500" /> },
  { name: "Postman", category: "Tools", icon: <SiPostman className="text-orange-500" /> },

  // Soft Skills
  { name: "Public Speaking", category: "Soft Skills", icon: <FaMicrophone className="text-pink-400" /> },
  { name: "Anchoring", category: "Soft Skills", icon: <FaComments className="text-amber-400" /> },
  { name: "Leadership", category: "Soft Skills", icon: <FaUsers className="text-indigo-400" /> },
  { name: "Problem Solving", category: "Soft Skills", icon: <TbBrain className="text-violet-400" /> },
];

const groupCategories = [
  { key: "Frontend", titleEn: "Frontend Development", titleHi: "फ्रंटएंड डेवलपमेंट" },
  { key: "Backend", titleEn: "Backend & Databases", titleHi: "बैकएंड और डेटाबेस" },
  { key: "Tools", titleEn: "Development Tools", titleHi: "डेवलपमेंट टूल्स" },
  { key: "Soft Skills", titleEn: "Soft Skills", titleHi: "सॉफ्ट स्किल्स" },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-12 border-t border-[color:var(--color-border)]/60 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[color:var(--color-accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <span>{t("The toolkit behind every build", "हर बिल्ड के पीछे का टूलकिट")}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--color-text-primary)] tracking-tight font-display">
            <Typewriter
              words={t(
                ["Technical Arsenal & Tooling", "Full Stack & Backend Skills"],
                ["टेक्निकल आर्सेनल और टूलिंग", "फुल स्टैक और बैकएंड स्किल्स"]
              )}
              typingSpeed={60}
              pauseTime={2500}
            />
          </h2>
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {groupCategories.map((group, groupIdx) => {
            const groupSkills = skills.filter((s) => s.category === group.key);
            if (groupSkills.length === 0) return null;

            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[color:var(--color-text-secondary)] whitespace-nowrap">
                    {t(group.titleEn, group.titleHi)}
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-[color:var(--color-border)] to-transparent" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {groupSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-[color:var(--color-bg-card)]/80 backdrop-blur-xl border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.25)] cursor-default overflow-hidden"
                    >
                      {/* Top glowing line accent on hover */}
                      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                        {skill.icon}
                      </span>
                      <span className="text-xs font-semibold text-[color:var(--color-text-primary)] text-center tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
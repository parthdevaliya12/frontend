import { motion } from "framer-motion";
import { CgVercel } from "react-icons/cg";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJs, FaHtml5, FaPhp, FaJava, FaGithub } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiTypescript, SiMysql, SiVscodium, SiVsco } from "react-icons/si";
import { VscCode, VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "PHP", icon: <FaPhp /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        
      ],
    },
     {
      title: "Database",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Vercel", icon: <CgVercel /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Technologies I use to build modern applications
          </p>
        </div>

        {/* UNIQUE GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/10"
            >
              {/* Card */}
              <div className="bg-[#111] rounded-2xl p-6 h-full border border-white/10 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/10 blur-2xl transition"></div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-6 text-cyan-400 relative z-10">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3 relative z-10">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between px-4 py-3 rounded-lg 
                      bg-white/5 border border-white/10 hover:bg-cyan-500/10 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-400 text-xl group-hover:scale-110 transition">
                          {skill.icon}
                        </span>
                        <span className="text-sm">{skill.name}</span>
                      </div>

                      {/* Pulse Indicator */}
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      year: "2025 - 2027",
      degree: "Master of Computer Applications (MCA)",
      college: "LDRP Institute of Technology & Research",
      desc: "Focused on software engineering, cloud computing, and AI technologies while building scalable enterprise solutions.",
      status: "Pursuing",
    },
    {
      year: "2022 - 2025",
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Saurashtra University",
      desc: "Built a strong foundation in programming, data structures, and database management systems.",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 relative"
            >
              {/* Dot */}
              <div className="absolute -left-[30px] top-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-black text-xs" />
              </div>

              {/* Card */}
              <div className="bg-[#111] border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/10 transition">
                {/* Top Row */}
                <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                  <span className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">
                    {item.year}
                  </span>

                  <span className="text-xs text-gray-400">{item.status}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.degree}
                </h3>

                <p className="text-cyan-400 text-sm mt-1">{item.college}</p>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

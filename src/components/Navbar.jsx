import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const github = () =>{
    window.open("https://github.com/parthdevaliya12")
  }
  
  const linkedin = () =>{
    window.open("https://linkedin.com/in/parthdevaliya12")
  }

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // 🔥 Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // 🔥 Active section highlight
  useEffect(() => {
    const handleScrollActive = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-5 w-full flex justify-center z-50">
        <div
          className="w-[95%] md:w-[80%] lg:w-[60%] 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-full px-6 py-3 
          flex items-center justify-between shadow-lg"
        >
          {/* Logo */}
          <h1
            className="font-semibold text-lg text-cyan-400 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            <img src={logo} alt="Logo" className="h-8" />
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 text-sm">
            {links.map((link, i) => (
              <li key={i} className="relative group cursor-pointer">
                <span
                  onClick={() => handleScroll(link.id)}
                  className={`transition 
                  ${
                    active === link.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                  ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4 text-gray-300">
            <FaGithub onClick={()=>github()} className="hover:text-white cursor-pointer" />
            <FaLinkedin onClick={()=>linkedin()} className="hover:text-white cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white text-2xl">
            {open ? (
              <FiX onClick={() => setOpen(false)} />
            ) : (
              <FiMenu onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 w-full px-6 z-40"
        >
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 text-white">
            <ul className="flex flex-col gap-5 text-lg">
              {links.map((link, i) => (
                <li
                  key={i}
                  onClick={() => handleScroll(link.id)}
                  className={`border-b pb-2 cursor-pointer transition
                  ${active === link.id ? "text-cyan-400" : "text-white"}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>

            <div className="flex gap-6 mt-6 text-xl">
              <FaGithub onClick={()=>github()} />
              <FaLinkedin onClick={()=>linkedin()} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

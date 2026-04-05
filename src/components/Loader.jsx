import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#020617] text-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full"
      />
    </div>
  );
}

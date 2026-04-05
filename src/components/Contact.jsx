import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    formData.append("access_key", "476eb1bc-ef7c-4abf-8ca9-466ce89bdc95"); // 🔑 replace this
    formData.append("subject", "New Contact from Portfolio 🚀");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      e.target.reset();
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Let’s build something amazing together 🚀
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* LEFT */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "devparth63@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "Gandhinagar, India",
              },
              {
                icon: <FaLinkedin />,
                title: "LinkedIn",
                value: "linkedin.com/in/parthdevaliya12",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 p-4 rounded-xl 
                bg-white/5 border border-white/10 backdrop-blur-lg"
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 text-lg">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-[#111] p-6 sm:p-8 rounded-xl border border-white/10 shadow-xl space-y-6"
          >
            <h3 className="text-xl font-semibold">Send Message</h3>

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="peer w-full px-4 pt-5 pb-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-400">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full px-4 pt-5 pb-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-400">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                className="peer w-full px-4 pt-5 pb-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 resize-none"
              ></textarea>
              <label className="absolute left-4 top-2 text-xs text-gray-400">
                Your Message
              </label>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              text-black font-semibold shadow-lg shadow-cyan-500/30"
            >
              {loading ? "Sending..." : "Send Message →"}
            </motion.button>

            {/* Success Message */}
            {success && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

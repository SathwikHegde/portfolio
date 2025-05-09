import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 contact-page">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Feel free to reach out for collaborations or opportunities!
      </motion.p>

      <motion.div
        className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows={4}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 px-6 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-6 flex justify-center gap-6 text-gray-500">
          <a href="mailto:satwikhegde14@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/sathwikhegde/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="https://github.com/SathwikHegde" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-600" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

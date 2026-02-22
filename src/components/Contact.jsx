import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactBackground from "./ContactBackground";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date().toLocaleString();
    const timeInput = form.current.querySelector('input[name="time"]');
    if (timeInput) {
      timeInput.value = now;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSent(true);
          setError(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 6000);
        },
        (error) => {
          setError(true);
          setTimeout(() => setError(false), 6000);
        }
      );
  };

  return (
    <div className="relative my-20 py-20 overflow-hidden border-t border-neutral-900">
      {/* Interactive Background Neural Mesh */}
      <ContactBackground />

      <div className="relative z-10 px-4 max-w-2xl mx-auto">
        <div id="contact" className="mb-12 flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            className="relative text-center group"
          >
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
              <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                Let's Connect
              </span>
            </h1>
            <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-2"></div>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 focus:border-purple-500 focus:bg-white/10 transition-all outline-none"
              />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 focus:border-cyan-500 focus:bg-white/10 transition-all outline-none"
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 focus:border-purple-500 focus:bg-white/10 transition-all outline-none resize-none"
            ></motion.textarea>

            <input type="hidden" name="time" />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full py-4 flex items-center justify-center rounded-xl font-black tracking-widest uppercase text-white overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all"></span>
              <span className="relative z-10">Send Message</span>
            </motion.button>

            {isSent && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-center font-bold text-sm">
                ✨ Message sent to Arup!
              </motion.p>
            )}
            {error && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-center font-bold text-sm">
                ❌ Something went wrong.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

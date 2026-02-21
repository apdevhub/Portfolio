import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Automatically add current time to the hidden input named "time"
    const now = new Date().toLocaleString();
    const timeInput = form.current.querySelector('input[name="time"]');
    if (timeInput) {
      timeInput.value = now;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,    // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID,   // Replace with your EmailJS template ID
        form.current,
        import.meta.env.VITE_PUBLIC_KEY    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setError(false);
          form.current.reset();

          // Auto-hide message after 15 seconds
          setTimeout(() => {
            setIsSent(false);
          }, 6000);
        },
        (error) => {
          console.error(error.text);
          setError(true);
          form.current.reset();

          // Auto-hide message after 15 seconds
          setTimeout(() => {
            setError(false);
          }, 6000);
        }
      );
  };

  return (
    <div className="my-20 px-4 max-w-2xl mx-auto">
      <div id="contact" className="mt-20 mb-12 flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="relative text-center group"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
            <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              Contact Me
            </span>
          </h1>
          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
        </motion.div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <motion.input
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.1 }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-neutral-700 bg-neutral-900 text-white"
        />
        <motion.input
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2 }}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-neutral-700 bg-neutral-900 text-white"
        />
        <motion.textarea
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.3 }}
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded border border-neutral-700 bg-neutral-900 text-white"
        ></motion.textarea>
        <input type="hidden" name="time" />  {/* Auto-filled before submit */}
        <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.4 }}
          type="submit"
          className="bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Send
        </motion.button>
        {isSent && <p className="text-green-500">Message sent successfully!</p>}
        {error && <p className="text-red-500">Failed to send message.</p>}
      </form>
    </div>
  );
};

export default Contact;

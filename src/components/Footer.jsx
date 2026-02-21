import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 border-t border-neutral-900 pt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Side */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Arup Patra
            </h2>
            <p className="text-neutral-500 font-medium">Developing with passion, solving with logic.</p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              {[
                { icon: FaLinkedin, href: "https://linkedin.com/in/aruppatra" },
                { icon: FaGithub, href: "https://github.com/aruppatra04" },
                { icon: FaInstagram, href: "https://instagram.com/arup.patra04" },
                { icon: FaXTwitter, href: "https://x.com/arup_patra04" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-all transform hover:scale-125"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Simplified Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-neutral-400">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-center text-xs mt-20 text-neutral-600 tracking-widest uppercase">
          © {new Date().getFullYear()} • Handcrafted by Arup Patra
        </div>
      </div>
    </footer>
  );
};

export default Footer;

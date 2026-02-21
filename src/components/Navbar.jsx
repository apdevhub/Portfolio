import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <div className="flex flex-shrink-0 items-center">
          <a href="#home">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu could be added here, but keeping it clean for now as per "aesthetic" goal */}
        <div className="md:hidden">
          {/* Simple mobile icon or just keeping it minimal */}
          <span className="text-neutral-400 text-xs">Menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

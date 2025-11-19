import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Menu items (static)
const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
];

// Social links (reused for desktop + mobile)
const socialLinks = [
  { icon: <FaGithub size={24} />, href: "https://github.com/MohdShadav", label: "GitHub" },
  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/shadav123", label: "LinkedIn" },
];

const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll (debounced for performance)
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolled(window.scrollY > 50), 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleMenuItemClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-lg border-b border-[#8245ec]/20"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-semibold cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Mohd</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Shadav</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map(({ id, label }) => (
            <li
              key={id}
              className={`cursor-pointer transition-colors hover:text-[#8245ec] ${
                activeSection === id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(id)}>{label}</button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-5">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-300 hover:text-[#8245ec] transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-md rounded-xl shadow-lg md:hidden animate-fadeIn">
          <ul className="flex flex-col items-center space-y-5 py-5 text-gray-300">
            {menuItems.map(({ id, label }) => (
              <li
                key={id}
                className={`cursor-pointer text-lg hover:text-white transition ${
                  activeSection === id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(id)}>{label}</button>
              </li>
            ))}

            {/* Social Links */}
            <div className="flex space-x-6 pt-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-300 hover:text-white transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
});

export default Navbar;

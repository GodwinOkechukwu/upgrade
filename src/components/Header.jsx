import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Using lucide-react for clean icons
import logo from "../assets/logov.png";
import { animate } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Personal Loan", id: "about" },
  { name: "One Card", id: "trust" },
  { name: "Savings", id: "services" },
  { name: "Checking", id: "hero" },
  { name: "Help", id: "features" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    const y = section.offsetTop - 80;

    animate(window.scrollY, y, {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  // Framer Motion variant for the initial entrance of the header
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="sticky top-0 z-50 w-full bg-transparent border-none "
      style={
        {
          //   backgroundImage: `
          //   linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          //   linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          //   linear-gradient(135deg, #00142D80 0%, #004852 100%)
          // `,
          // backgroundSize: "80px 80px, 80px 80px, cover",
          // backgroundPosition: "0 0",
          // backgroundColor: "",
        }
      }>
      <div className="container mx-auto flex items-center justify-between p-4 md:px-10">
        {/* Logo/Brand Name (using text for simplicity) */}
        <img className="w-40" src={logo} alt="logo" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium font-[Poppins] text-[#DCDCDC] transition hover:text-[#00B512] cursor-pointer">
              {link.name}
            </button>
          ))}
        </nav>

        {/* Sign In / Sign Up Button */}
        <div className="hidden items-center space-x-4 md:flex">
          <button className="rounded-xl  border cursor-pointer border-[#DCDCDC]  px-8 py-2 text-sm font-bold font-[Poppins] transition duration-300 hover:bg-[#00B512]! hover:border-[#00B512]">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white bg-[#004852]! md:hidden border-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer (Framer Motion for smooth reveal) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-bg-[#004852] p-4 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollTo(link.id);
                  setIsOpen(false);
                }}
                className="block py-2 text-base font-medium text-[#DCDCDC] hover:text-lime-400">
                {link.name}
              </button>
            ))}

            <div className="mt-4  pt-4">
              <button className="rounded-md bg-transparent! border border-white px-8 py-2 text-sm font-bold transition duration-300 hover:bg-[#00B512]!">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

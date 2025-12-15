import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Define default colors
const defaultColors = {
  primary: "bg-[#00B512]",
  text: "text-gray-900",
  ring: "ring-lime-300",
  border: "",
};

// Arrow animation variants
const arrowVariants = {
  initial: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  hover: {
    x: -1,
    y: -1,
    rotate: -30,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

const Button = ({
  children,
  primaryColor = defaultColors.primary,
  textColor = defaultColors.text,
  circleColor = defaultColors.primary,
  ringColor = defaultColors.ring,
  isOutlined = true,
  onClick,
  arrowColor = "text-white",
  border = defaultColors.border,
  type = "button",
  className = "",
}) => {
  // OUTLINED STYLE
  if (isOutlined) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        className={`group relative flex items-center p-1 transition duration-300 ${className}`}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}>
        {/* Text Button */}
        <div
          className={`rounded-full px-8 py-3 text-lg font-bold font-[Poppins] transition duration-300 ${primaryColor} ${textColor} ${ringColor} ${border}`}>
          <span className="pr-6">{children}</span>
        </div>

        {/* Circular Accent */}
        <motion.div
          className={`absolute right-0 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${circleColor}`}
          whileHover={{ boxShadow: "0 8px 18px rgba(0,0,0,0.2)" }}>
          <motion.div variants={arrowVariants}>
            <ArrowRight className={`h-6 w-6 ${arrowColor}`} />
          </motion.div>
        </motion.div>
      </motion.button>
    );
  }

  // FILLED STYLE
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`rounded-full px-8 py-3 text-lg font-bold shadow-lg transition duration-300 ${primaryColor} ${textColor} ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.95 }}>
      {children}
    </motion.button>
  );
};

export default Button;

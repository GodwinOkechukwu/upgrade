import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Using a standard icon for the arrow

// Define default colors for easy usage
const defaultColors = {
  primary: "bg-[#00B512]", // Default button fill
  text: "text-gray-900", // Default text color
  ring: "ring-lime-300", // Default ring color for the outlined button
  border: "",
};

const Button = ({
  children,
  primaryColor = defaultColors.primary, // Button background color
  textColor = defaultColors.text, // Text color
  circleColor = defaultColors.primary, // Color of the circular accent
  ringColor = defaultColors.ring, // Color for the outlined button ring
  isOutlined = true, // Controls the style (filled vs. outlined)
  onClick,
  arrowColor,
  border = defaultColors.border,
  type = "button",
  className = "", // Allows passing custom Tailwind classes
}) => {
  // Style when the button is *outlined* (like in the Features section CTA image)
  if (isOutlined) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        // Base styling for the container (invisible)
        className={`flex items-center group relative p-1 transition duration-300 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}>
        {/* 1. Main Text Button (Outlined Style) */}
        <div
          className={`rounded-full ${ringColor} ${border}  px-8  py-3 font-bold text-lg ${primaryColor} transition duration-300  ${textColor}`}
          style={{
            // Ensures the text color changes slightly on hover when outlined
            color: textColor.includes("text-gray")
              ? textColor.replace("text-gray", "text-gray")
              : textColor,
          }}>
          <span className="pr-6">{children}</span>
        </div>

        {/* 2. Circular Accent (Filled Style) */}
        <motion.div
          className={`absolute right-0 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300 shadow-lg ${circleColor}`}
          // Hover effect on the circular accent
          whileHover={{ x: 5, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
          <ArrowRight
            className={`h-6 w-6 transition duration-300 ${arrowColor}`}
          />
        </motion.div>
      </motion.button>
    );
  }

  // Style when the button is *filled* (like in the Hero section)
  return (
    <motion.button
      type={type}
      onClick={onClick}
      // Base styling for the filled button
      className={`rounded-full ${primaryColor} px-8 py-3 text-lg font-bold ${textColor} transition duration-300 shadow-lg ${className}`}
      // Sleek Framer Motion hover effects
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 20px -5px ${circleColor
          .replace("bg-", "rgba(")
          .replace("-500", ", 0.4)")
          .replace("-400", ", 0.4)")}`,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}>
      {children}
    </motion.button>
  );
};

export default Button;

import React from "react";
import { motion } from "framer-motion";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import Button from "./ui/Button";

// Framer Motion Variants for Scroll Reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Small delay between items
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const Features = () => {
  const featurePoints = [
    "Get 3% Cash Back On Everyday Purchases, 2% On Everything else",
    "Extra Spending Power When You Have Rewards Checking Through Upgrade",
    // "No-Fee Cash Withdrawals at 40,000+ ATMs Worldwide",
    // "FDIC Insured up to $250,000 for maximum security",
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // <-- Triggers animation when section enters viewport
          viewport={{ once: true, amount: 0.3 }} // Ensures it only animates once
        >
          {/* LEFT SIDE: Text and CTA */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#F9FAFB] rounded-full px-3  inline-flex items-center gap-2 mb-4">
              <motion.p
                className="p-3 text-sm font-semibold uppercase tracking-widest text-black! "
                variants={itemVariants}>
                🔥Featured
              </motion.p>
            </div>

            <motion.h2
              className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
              variants={itemVariants}>
              ALL THE FEATURES <br />
              IN ONE APP
            </motion.h2>

            {/* Feature List */}
            <ul className="mb-8 space-y-4">
              {featurePoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start md:text-lg text-gray-700"
                  variants={itemVariants}
                  // Add a slight delay for subsequent items to feel staggered
                  transition={{ delay: 0.1 + index * 0.05 }}>
                  <span className="mr-3 md:text-xl text-lime-500 font-bold">
                    ✓
                  </span>

                  {point}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              primaryColor="bg-[#fff]"
              textColor="text-black"
              circleColor="bg-[#00B512]"
              arrowColor="text-white"
              border="border border-[#00B512]"
              variants={itemVariants}>
              Get Started
            </Button>
          </div>

          {/* RIGHT SIDE: Product Mockups */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center md:justify-end"
            // The whole image container fades and slides up on view
            variants={itemVariants}
            transition={{ delay: 0.3 }}>
            <div className="w-full max-w-xl relative aspect-4/3 bg-[#F5F5F5] rounded-2xl flex items-center justify-center p-16 shadow-xl border border-gray-100">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-75 md:h-100 absolute bottom-0 left-0"
                src={mobile1}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute h-75 md:h-100 top-0 right-0"
                src={mobile2}
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

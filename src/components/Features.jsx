import { motion } from "framer-motion";
import mobile1 from "../assets/featuresmobile1.png";
import mobile2 from "../assets/featuresmobile2.png";
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
            <div className="inline-flex items-center bg-[#F9FAFB] gap-2 border-2   border-[#EAECF0] px-4 py-1 rounded-full text-sm font-semibold text-[#031B1D] mb-6">
              🔥 FEATURED
            </div>

            <motion.h2
              className="mb-2 text-2xl font-integral md:text-5xl font-normal leading-tight text-[#090909]"
              variants={itemVariants}>
              ALL THE FEATURES <br className="" />
              IN ONE APP
            </motion.h2>

            {/* Feature List */}
            <ul className="mb-8 space-y-4">
              {featurePoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-sm md:text-[16px] font-[Poppins] text-[#676666] max-w-100"
                  variants={itemVariants}
                  // Add a slight delay for subsequent items to feel staggered
                  transition={{ delay: 0.1 + index * 0.05 }}>
                  <span className="mr-3 md:text-xl text-[#676666] font-bold">
                    .
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
            <div className="w-full max-w-xl relative aspect-4/3 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center p-16 border border-[#0000000F]">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-75 md:h-100 absolute bottom-0 left-0 md:left-7"
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

import { motion } from "framer-motion";
import mobile from "../assets/mobile.png";
import atm from "../assets/greenVisa.png";
import yellowcard from "../assets/yellowcard.png";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Paypal from "../assets/Paypal.png";
import Button from "./ui/Button";
// Framer Motion Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Paypal];
  return (
    <section
      className="relative h-auto md:h-auto overflow-hidden pt-20"
      style={{
        backgroundImage: `
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), /* vertical grid lines */
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px), /* horizontal grid lines */
    linear-gradient(135deg, #00142D80 0%, #004852 100%) /* main gradient */
  `,
        backgroundSize: "80px 80px, 80px 80px, cover",
        backgroundPosition: "0 0, 0 0, 0 0",
      }}>
      <div className="container mx-auto px-4 md:px-10 ">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* LEFT SIDE: Content and CTA */}
          <div className="z-10 w-full md:w-1/2 pt-4 md:pt-32 md:relative md:bottom-40 pb-12 md:pb-0">
            {/* Trust Badge (First to fade in) */}
            <div className=" rounded-full bg-white/10 backdrop-blur-sm px-3 max-w-70">
              <motion.p
                className="mb-4 flex items-center text-sm font-semibold uppercase tracking-widest text-white"
                variants={itemVariants}>
                <span className="mr-2 text-lg">🔥</span> 100% TRUSTED PLATFORM
              </motion.p>
            </div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-4xl! md:text-[64px]! font-extrabold leading-tight text-white"
              variants={itemVariants}>
              FINANCE WITH <br />
              SECURITY AND <br />
              <span className="text-[#E2FF54]">FLEXIBILITY</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mb-8 md:text-lg text-gray-300 max-w-md"
              variants={itemVariants}>
              No-Fee Checking Account With Cash Back Rewards. Enjoy Fee-Free
              Banking And Earn Cash Back On Your Everyday Purchases.
            </motion.p>

            {/* Primary CTA Button (Sleek Hover Effect) */}
            <Button
              primaryColor="bg-[#00B512]"
              textColor="text-white"
              circleColor="bg-white"
              arrowColor="text-black"
              variants={itemVariants}>
              Open Account
            </Button>
          </div>

          {/* RIGHT SIDE: Product Mockup (Phone and Card) */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center md:justify-end"
            // Delayed entrance for the main visual element
            variants={itemVariants}
            transition={{ delay: 0.6 }}>
            <motion.div
              initial={{ x: 100, rotate: 10, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className="w-full max-w-lg pt-14 pb-4 md:pt-0">
              <div className="aspect-video relative bottom-25 md:bottom-20 rounded-xl flex items-center justify-center p-12 ">
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="relative h-40 md:h-80 z-20 top-20 left-[40%] sm:left-[45%] md:left-[50%] md:top-37.5"
                  src={atm}
                  alt="atm"
                />
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  src={mobile}
                  className="h-80 md:h-140 z-10 relative"
                  alt="mobile-mopup"
                />
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="relative h-22 md:h-55 right-[23%] top-20  md:right-[36%] md:top-30"
                  src={yellowcard}
                  alt="card"
                />
              </div>
            </motion.div>

            {/* Subtle background glow/blob for visual interest */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-100 rounded-full bg-teal-500 opacity-20 blur-[100px]" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0  bg-[#04684C] backdrop-blur-sm"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 100 }}>
        <div className="overflow-hidden w-full relative">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}>
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-8 shrink-0">
                <img
                  src={logo}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain shrink-0"
                  alt={`logo-${idx}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

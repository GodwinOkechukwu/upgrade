import { motion } from "framer-motion";
import Button from "./ui/Button"; // Import the reusable button component
import mobile3 from "../assets/trustmobile.png";
import atm from "../assets/trustatm.png";

// Framer Motion Variants for Staggered Scroll Reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 }, // Animation for the left side (Text/CTA)
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants = {
  hidden: { y: 50, opacity: 0 }, // Animation for the right side (Mockup)
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.1 },
  },
};

const Trustworthiness = () => {
  return (
    <section
      id="trust"
      className="bg-gray-900 py-2 md:py-4"
      // Subtle background pattern to maintain consistency with the Hero's texture
      style={{
        backgroundImage: `
          radial-gradient(circle at center, rgba(32, 32, 32, 0.3) 1px, transparent 1px), 
          linear-gradient(to bottom right, #101828, #004d40)
        `,
        backgroundSize: "40px 40px, 100% 100%",
      }}>
      <div className="container mx-auto px-4 md:px-10">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24"
          variants={containerVariants}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Ensures animation runs once
        >
          {/* LEFT SIDE: Image/Mockup Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            variants={imageVariants}>
            <div className="relative w-full max-w-lg aspect-5/4 rounded-xl flex items-center justify-center p-12">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-80 md:h-140"
                src={mobile3}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative h-20 md:h-40 z-20 top-20 right-[30%] md:top-37.5"
                src={atm}
                alt=""
              />
              {/* Visual accent circle */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-teal-500 opacity-10 blur-[50px]" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Text and CTA */}
          <div className="w-full md:w-1/2 pt-10 md:pt-0">
            <div className=" rounded-full bg-white/10 backdrop-blur-sm px-3 max-w-50">
              <motion.p
                className="mb-4 flex items-center text-sm font-semibold uppercase tracking-widest text-white!"
                variants={itemVariants}>
                <span className="mr-2 text-lg font-[Poppins] w-fit ">🔥</span>
                TRUSTWORTHINESS
              </motion.p>
            </div>

            <motion.h2
              className="mb-6 font-integral text-2xl md:text-5xl font-normal leading-tight text-white"
              variants={itemVariants}>
              WE VALUE YOUR <br />
              TRUST AND SECURITY
            </motion.h2>

            <motion.p
              className="mb-10 md:text-lg text-gray-300 max-w-xl font-[Poppins] capitalize"
              variants={itemVariants}>
              Our mission is to make finance more accessible, transparent, and
              secure for everyone. with cutting
            </motion.p>

            {/* CTA Button (Using the Reusable Component) */}
            <motion.div variants={itemVariants}>
              <Button
                primaryColor="bg-[#00B512]"
                textColor="text-white"
                circleColor="bg-white"
                arrowColor="text-black"
                variants={itemVariants}>
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trustworthiness;

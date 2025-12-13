import { motion } from "framer-motion";
import heroMobile from "../assets/footermoile1.png";
import heroMobileBack from "../assets/footermobile2.png";
import Button from "./ui/Button";

const HeroCTA = () => {
  return (
    <section
      id="hero"
      className="bg-linear-to-r from-[#001229] to-[#004852] py-24 px-4 md:px-16 rounded-xl relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="text-white md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ARE YOU READY TO <br /> START?
          </h2>
          <p className="text-gray-200 text-base md:text-lg mb-8">
            Personalize your settings, follow your progress, archive your
            highlights and notes automatically. Glose is the ultimate reading
            companion.
          </p>
          <Button
            primaryColor="bg-[#00B512]"
            textColor="text-white"
            circleColor="bg-white"
            arrowColor="text-black">
            Get Started
          </Button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="relative w-64 md:w-80 lg:w-96">
            <motion.img
              src={heroMobileBack}
              alt="Back mobile"
              className="absolute top-0 md:right-0 md:w-full h-auto w-75 rounded-xl shadow-2xl z-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src={heroMobile}
              alt="Front mobile"
              className="relative w-50 md:w-full md:right-25 top-25 h-auto rounded-xl shadow-2xl z-10"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCTA;

import { motion } from "framer-motion";
import heroMobile from "../assets/readymobile.png";
import heroMobileBack from "../assets/footermobile2.png";
import Button from "./ui/Button";

const HeroCTA = () => {
  return (
    <div className="bg-white">
      <section
        id="hero"
        className="bg-linear-to-r from-[#001229] to-[#004852] py-24 px-4 md:px-16 rounded-xl relative overflow-hidden md:w-[85%] m-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between max-h-115">
          {/* Left Content */}
          <motion.div
            className="text-white md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <h2 className="text-4xl font-integral md:text-5xl font-normal mb-6 leading-tight">
              ARE YOU READY TO <br /> START?
            </h2>
            <p className="text-gray-200 font-poppins text-base md:text-lg mb-8">
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
            className="flex  relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="relative w-64 md:w-80 lg:w-96">
              <motion.img
                src={heroMobile}
                alt="Front mobile"
                className="relative w-50 md:w-full  md:top-25 h-auto rounded-xl shadow-2xl z-10"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroCTA;

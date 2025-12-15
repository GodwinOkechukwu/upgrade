import { motion } from "framer-motion";
import mobile1 from "../assets/servicemobile1.png";
import mobile2 from "../assets/servicemobile2.png";
import { ChartNoAxesCombined } from "lucide-react";
import globe from "../assets/globe.png";
import cog from "../assets/settingslogo.png";
import welcome from "../assets/tom1.png";
import dashboard from "../assets/tom2.png";
import slant from "../assets/slanthistory.png";
import Button from "./ui/Button";

// --- Framer Motion Variants ---

// Variants for the main stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for items sliding up
const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const Services = () => {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-10 ">
        {/* Main Section Container with Scroll Trigger */}
        <motion.div
          className="text-center px-3  mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <div className="inline-flex font-[Poppins] items-center bg-[#F9FAFB] gap-2 border-2 border-[#EAECF0] px-4 py-1 rounded-full text-sm font-semibold text-[#031B1D] ">
            🔥 SERVICES
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}>
          {/* Main Headline */}
          <motion.div variants={slideUpVariants} className="mb-16 text-center">
            <h2 className="text-2xl font-integral md:text-5xl font-normal text-black leading-tight tracking-tight">
              CAN HELP YOU ACHIEVE <br /> FINANCIAL SUCCESS
            </h2>
          </motion.div>

          {/* TOP SECTION: Transfers Across The Globe */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-around  rounded-[20px] bg-[#F6F9F8] border mb-8 border-[#0000000F]"
            variants={slideUpVariants}>
            {/* Left Mockup Placeholder (Main App Screen) */}
            <div className="w-full max-w-sm">
              <div className=" rounded-3xl flex items-center justify-center p-8 ">
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className=" w-50 md:w-100 relative top-7.5"
                  src={mobile1}
                  alt="mobile1"
                />
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="w-25 md:w-40 relative right-21.25 top-14.5"
                  src={mobile2}
                  alt="mobile1"
                />
              </div>
            </div>
            {/* Headline and Right Mockup Placeholder (Small Transfer Screen) */}
            <div className="text-center py-10 ">
              <div className="h-11 w-11 rounded-full bg-[#03A300] flex justify-center items-center ">
                <img src={globe} alt="globe" />
              </div>
              <motion.h3
                className="text-2xl md:text-[32px] text-start font-bold font-[Poppins] text-black mb-4"
                variants={slideUpVariants}>
                Transfers Across The <br className="" /> Globe Are Free
              </motion.h3>
            </div>
          </motion.div>

          {/* BOTTOM SECTION: Two Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Feature Card 1: Custom Card (Left Column) */}
            <motion.div
              className="bg-[#F6F9F8] border-[#0000000F] border p-8 rounded-[20px] max-h-168.25  transition-shadow duration-300 "
              variants={slideUpVariants}>
              <div className="h-11 w-11 rounded-full bg-[#03A300] flex justify-center items-center mb-2 ">
                <ChartNoAxesCombined />
              </div>
              <h3 className="text-2xl md:text-3xl font-[Poppins] font-semibold text-black mb-4">
                Create A Card That Is <br /> Unique And Customized
              </h3>
              <p className="text-[#676666] text-sm md:text-[16px] mb-6 font-[Poppins]">
                We Offer A Comprehensive Range Of Innovative Financial Services
                Tailored To Meet Your Needs. Our Services Include High-Yield
                Savings Accounts.
              </p>

              {/* Supporting Visual (Line Chart) */}
              <motion.div variants={slideUpVariants}>
                <img
                  className="md:w-100 m-auto relative top-8"
                  src={welcome}
                  alt="welcome"
                />
              </motion.div>
            </motion.div>

            {/* Feature Card 2: Personalized Insights (Right Column) */}
            <motion.div
              className="p-8 rounded-[20px] border border-[#0000000F] transition-shadow duration-300  bg-[#001027] "
              variants={slideUpVariants}>
              <div className="h-11 w-11 rounded-full bg-[#03A300] flex justify-center items-center mb-2 ">
                <img src={cog} alt="" />
              </div>
              <h3 className="text-2xl md:text-3xl font-[Poppins] font-semibold text-white mb-4">
                Personalized Insights <br /> And Financial Goals
              </h3>
              <p className="text-[#A7A7A7] text-sm md:text-[16px] mb-6 font-[Poppins]">
                Discover Opportunities That Offer Competitive Interest Rates And
                Flexible Deposit Options. Investment Money Whilst Allowing Us To
                Offer Personalized Services.
              </p>

              {/* Supporting Visual (Two Balance Blocks) */}
              <div className="mt-6 flex gap-4 max-h-168.25">
                <img
                  className="md:w-80  m-auto relative top-8"
                  src={dashboard}
                  alt="dash"
                />
                <div className="flex-1 p-4 rounded-xl  hidden md:block  shadow-lg border border-gray-200 bg-white h-25 relative right-12.5 top-20">
                  <p className="text-xs font-semibold text-gray-300 mb-1">
                    Total Balance
                  </p>
                  <h4 className="text-xl font-bold text-gray-900">$9,647.00</h4>
                  <button className="text-sm font-medium text-black ">
                    <span className=" bg-[#03A300] rounded-full px-1 text-white font-bold">
                      +
                    </span>
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full mt-8">
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className=" bg-[#E2FF54] h-80 border border-[#0000000F] rounded-[20px]">
              <div className="mt-10 w-[80%]  m-auto text-black">
                <h2 className="text-2xl md:text-4xl font-[Poppins] font-semibold">
                  100% <br />
                  Dedication
                </h2>
                <p className="pt-5 font-[Poppins]">
                  we offer a comprehensive range of innovative financial
                  services tailored to meet your needs.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className="relative bg-[#F6F9F8] border border-[#0000000F] rounded-[20px] p-10 h-80 overflow-hidden">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#00B512] flex items-center justify-center mb-6 ">
                <span className="text-white text-2xl font-bold">$</span>
              </div>

              {/* Text content */}
              <div className="max-w-[70%]">
                <h2 className="text-2xl md:text-3xl font-semibold font-[Poppins] leading-tight text-black">
                  Hold Money In <br />
                  30+ Currencies
                </h2>
              </div>

              {/* Decorative image */}
              <img
                src={slant}
                alt="chart"
                className="absolute bottom-0 right-0 w-55 md:w-65 pointer-events-none"
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className=" bg-[#2D907A] rounded-[20px] border border-[#0000000F] h-80 text-center flex justify-center items-center">
              <h2 className="text-2xl md:text-4xl font-semibold font-[Poppins] text-white">
                Visit Our
                <br /> Services page
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="mt-5 flex justify-center">
          <Button
            primaryColor="bg-[#fff]"
            textColor="text-black"
            circleColor="bg-[#00B512]"
            arrowColor="text-white"
            border="border border-[#00B512]"
            variants={slideUpVariants}>
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

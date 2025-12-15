import { motion } from "framer-motion";
import { useState } from "react";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ================= DATA ================= */

const graphData = [
  { month: "April", value: 30, amount: "$15,234" },
  { month: "May", value: 50, amount: "$18,456" },
  { month: "June", value: 85, amount: "$20,000" },
  { month: "July", value: 45, amount: "$16,892" },
];

const features = [
  {
    title: "Expenses Tracker",
    desc: "Our comprehensive selection of medications, supplements, and healthcare products.",
  },
  {
    title: "Crypto Connection",
    desc: "From advanced imaging technology such as MRI and CT scanners to precision tools.",
  },
  {
    title: "Automated Invoicing",
    desc: "We're committed to leveraging the latest innovations in medical technology.",
  },
];

/* ================= COMPONENT ================= */

export default function AboutUs() {
  const [activeBar, setActiveBar] = useState(2);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <motion.section
      className="bg-white py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ================= LEFT GRAPH ================= */}
          <motion.div
            variants={fadeUp}
            className="bg-[#F5F5F5] rounded-3xl p-10 border border-[#0000000F]">
            <div className="bg-[#004852] rounded-3xl p-8 text-white">
              {/* Header */}
              <motion.div variants={fadeUp} className="mb-6 font-[Poppins]">
                <p className="text-sm md:text-[18px] opacity-80 text-[#F9F9F9] font-medium">
                  Saving Month
                </p>
                <h3 className="text-4xl font-bold">$1852.00</h3>
                <p className="text-sm text-[#F0F0F0] opacity-80 mt-1">
                  Increase of
                  <span className="font-bold text-white pl-1">12%</span> from
                  last month
                </p>
              </motion.div>

              {/* Chart */}
              <motion.div variants={fade} className="relative h-64 flex">
                {/* Y Axis */}
                <div className="flex flex-col justify-between pr-4 text-xs opacity-70">
                  <span>50k</span>
                  <span>20k</span>
                  <span>10k</span>
                  <span>0</span>
                </div>

                {/* Grid + Bars */}
                <div className="relative flex-1 flex flex-col">
                  {/* Chart Area */}
                  <div className="relative flex-1">
                    {/* Grid */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="border-t border-dashed border-white/20"
                        />
                      ))}
                    </div>

                    {/* Bars */}
                    <div className="absolute inset-0 flex items-end justify-between md:px-6">
                      {graphData.map((bar, i) => {
                        const isActive = activeBar === i;

                        return (
                          <motion.div
                            key={bar.month}
                            onMouseEnter={() => setActiveBar(i)}
                            className="relative flex flex-col items-center cursor-pointer"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: 1,
                              height: `${bar.value}%`,
                            }}
                            transition={{
                              opacity: { duration: 0.3 },
                              height: { duration: 0.6, ease: "easeOut" },
                            }}>
                            {/* Tooltip */}
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute -top-10 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-lg shadow">
                                {bar.amount}
                                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-white rotate-45 -translate-x-1/2" />
                              </motion.div>
                            )}

                            {/* Bar */}
                            <div
                              className={`relative w-10 rounded-t-xl transition-all duration-300 ${
                                isActive ? "bg-[#2C9B7C]" : "bg-[#D9D9D9]"
                              }`}
                              style={{ height: "100%" }}>
                              {isActive && (
                                <span className="absolute top-2 left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 border-2 border-[#D9D9D9]" />
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* X Axis */}
                  <div className="flex justify-between px-6 mt-2 text-xs text-white/80">
                    {graphData.map((bar) => (
                      <span key={bar.month}>{bar.month}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div variants={fadeUp} className="relative">
            {/* About Pill */}
            <div className="inline-flex items-center poppins bg-[#F9FAFB] gap-2 border-2  border-[#EAECF0] px-4 py-1 rounded-full text-sm font-semibold text-[#031B1D] mb-6">
              🔥 ABOUT US
            </div>

            <h2 className="text-2xl font-integral lg:text-5xl font-medium  text-black mb-10">
              ALL YOUR MONEY <br /> NEEDS IN ONE APP
            </h2>

            <div className="relative flex gap-6">
              {/* Indicator Bar */}
              <div className="w-2 bg-[#ddd] rounded-full h-112.5">
                <motion.div
                  layout
                  className="w-2 bg-[#004852] rounded-full"
                  animate={{
                    height: 72,
                    y: activeFeature * 170,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>

              {/* Feature Cards */}
              <div className="flex-1 space-y-6">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActiveFeature(i)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{
                      opacity: 1,
                      y: activeFeature === i ? -4 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`rounded-2xl p-6 cursor-pointer transition  ${
                      activeFeature === i
                        ? "bg-[#F1FFD2] shadow-lg"
                        : "bg-[#E5E5E5] border border-[#F9FAFB]"
                    }`}>
                    <h3 className="text-lg md:text-[20px] font-bold font-[Poppins] text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[16px] font-[Poppins]  text-black mt-2">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

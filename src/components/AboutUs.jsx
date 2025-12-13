import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [activeBar, setActiveBar] = useState(null);

  // Data for the graph
  const graphData = [
    { month: "April", value: 30, amount: "$15,234" },
    { month: "May", value: 50, amount: "$18,456" },
    { month: "June", value: 85, amount: "$20,000" },
    { month: "July", value: 45, amount: "$16,892" },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Card animation variant
  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="bg-white py-20 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center px-3  mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <div className="bg-[#F9FAFB] rounded-full px-3  inline-flex items-center gap-2 mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-600">
              🔥 ABOUT US
            </p>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {/* Left Side - Animated Graph Card */}
          <div className="bg-[#F5F5F5] py-10 rounded-2xl w-full">
            <motion.div
              className="w-[90%] md:w-[80%] m-auto"
              variants={cardVariants}>
              <div className="bg-[#004852] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                      linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>

                {/* Card Header */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-white text-xl font-bold mb-1">
                    Saving Month
                  </h3>
                  <motion.p
                    className="text-white text-4xl font-extrabold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}>
                    $1852.00
                  </motion.p>
                  <p className=" text-sm font-semibold">
                    Increase of <span className="font-bold">12%</span> from last
                    month
                  </p>
                </div>

                {/* Graph Container */}
                <div className="relative z-10 h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-white/60 text-xs">
                    <span>50k</span>
                    <span>20k</span>
                    <span>10k</span>
                    <span>0</span>
                  </div>

                  {/* Grid lines */}
                  <div className="absolute left-12 right-0 top-0 bottom-8 flex flex-col justify-between">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="border-t border-white/10 border-dashed"
                      />
                    ))}
                  </div>

                  {/* Bars */}
                  <div className="absolute left-12 right-0 bottom-0 h-full flex items-end justify-around pb-8">
                    {graphData.map((data, index) => (
                      <motion.div
                        key={data.month}
                        className="relative flex flex-col items-center cursor-pointer group"
                        onHoverStart={() => setActiveBar(index)}
                        onHoverEnd={() => setActiveBar(null)}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{
                          height: `${data.value}%`,
                          opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.7 + index * 0.1,
                          duration: 0.8,
                          ease: "easeOut",
                        }}>
                        {/* Tooltip */}
                        <motion.div
                          className="absolute -top-12 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: activeBar === index ? 1 : 0,
                            y: activeBar === index ? 0 : 10,
                          }}
                          transition={{ duration: 0.2 }}>
                          {data.amount}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                        </motion.div>

                        {/* Bar */}
                        <motion.div
                          className="w-12 md:w-16 bg-linear-to-t from-white/80 to-white/40 rounded-t-lg relative overflow-hidden"
                          style={{ height: "100%" }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}>
                          {/* Highlight dot at top */}
                          {activeBar === index && (
                            <motion.div
                              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#004852]"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.div>

                        {/* Month label */}
                        <span className="text-white/80 text-xs font-medium mt-2">
                          {data.month}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Feature List */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ALL YOUR MONEY
              <br />
              NEEDS IN ONE APP
            </h2>
            {/* Feature 1 */}
            <motion.div
              className="bg-white rounded-2xl p-6 border-l-4 border-gray-300 "
              variants={itemVariants}
              whileHover={{
                x: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                borderColor: "#004852",
                backgroundColor: "#F1FFD2",
              }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expenses Tracker
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our comprehensive selection of medications, supplements, and
                healthcare products.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white rounded-2xl p-6 border-l-4 border-gray-300 shadow-sm"
              variants={itemVariants}
              whileHover={{
                x: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                borderColor: "#004852",
                backgroundColor: "#F1FFD2",
              }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Crypto Connection
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                From advanced imaging technology such as MRI and CT scanners to
                precision surgical tools.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white rounded-2xl p-6 border-l-4 border-gray-300 shadow-sm"
              variants={itemVariants}
              whileHover={{
                x: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                borderColor: "#004852",
                backgroundColor: "#F1FFD2",
              }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Automated Invoicing
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We're committed to leveraging the latest innovations in medical
                technology.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

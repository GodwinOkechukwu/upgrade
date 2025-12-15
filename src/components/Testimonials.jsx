import { motion } from "framer-motion";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import star from "../assets/star.png";
import Button from "./ui/Button";
import colon from "../assets/colon.png";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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
const testimonials = [
  {
    id: 1,
    text: "I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!”",
    name: "Mike Torello",
    role: "CEO of Initech",
    avatar: test1,
    active: false,
  },
  {
    id: 2,
    text: "We have successfully sold digital product and have happy with the results & look forward to using it again.",
    name: "Richards Hawkins",
    role: "Marketing Manager of Upnow",
    avatar: test2,
    active: true,
  },
  {
    id: 3,
    text: "Design Monks offers producers a cost-effective selling tool. Prices you want are clearly visible.",
    name: "Thomas Magnum",
    role: "Barellon NSW",
    avatar: test3,
    active: false,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#F6F9F8] py-24 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}

        <div className="inline-flex items-center font-[Poppins] bg-[#F9FAFB] gap-2 border-2 border-[#EAECF0] px-4 py-1 rounded-full text-sm font-semibold text-[#031B1D] mb-6">
          🔥 TESTIMONIAL
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-5xl font-integral font-normal text-gray-900 mb-14">
          GET TO KNOW OUR CLIENTS
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          //   initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className={`relative rounded-2xl p-8 text-left transition-all ${
                item.active
                  ? "bg-[#004852] text-white scale-105"
                  : "bg-white text-gray-700"
              }`}>
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className={`text-4xl mb-4 font-serif`}>
                <img className="w-15" src={colon} alt="colon" />
              </motion.div>

              <p className="text-sm leading-relaxed mb-6 font-[Poppins]">
                {item.text}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="font-[Poppins]">
                  <img src={star} alt="" />
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p
                    className={`text-xs ${
                      item.active ? "text-gray-300" : "text-gray-500"
                    }`}>
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Button
            primaryColor="bg-[#fff]"
            textColor="text-black"
            circleColor="bg-[#00B512]"
            arrowColor="text-white"
            border="border border-[#00B512]">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

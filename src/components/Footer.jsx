import { motion } from "framer-motion";
import logo from "../assets/logofooter.png";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      className="bg-white border-t border-gray-200 py-12 px-4 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
      <div className="container mx-auto">
        {/* Top Section - Logo and App Buttons */}
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={itemVariants}>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <img className="" src={logo} alt="logo" />
          </div>

          {/* App Store Buttons */}
          <div className="flex gap-3 mb-6">
            <motion.a
              href="#"
              className="bg-black text-white! px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none">GET IT ON</div>
                <div className="text-sm font-semibold leading-tight">
                  App Store
                </div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="bg-black text-white! px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none">GET IT ON</div>
                <div className="text-sm font-semibold leading-tight">
                  Google Play
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          className="flex flex-wrap justify-center gap-6 mb-6 text-sm"
          variants={itemVariants}>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Personal Loan
          </a>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            One Card
          </a>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Savings
          </a>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Checking
          </a>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Contact
          </a>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Help
          </a>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Support
          </a>
        </motion.nav>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-3 mb-6"
          variants={itemVariants}>
          <motion.a
            href="#"
            className="w-10 h-10 bg-[#006022] rounded-full flex items-center justify-center text-white hover:bg-[#00D015] transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}>
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </motion.a>

          <motion.a
            href="#"
            className="w-10 h-10 bg-[#006022] rounded-full flex items-center justify-center text-white hover:bg-[#00D015] transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}>
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

          <motion.a
            href="#"
            className="w-10 h-10 bg-[#006022] rounded-full flex items-center justify-center text-white hover:bg-[#00D015] transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}>
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

          <motion.a
            href="#"
            className="w-10 h-10 bg-[#006022] rounded-full flex items-center justify-center text-white hover:bg-[#00D015] transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}>
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Feedback Section */}
        <motion.div
          className="text-center mb-6 text-sm text-gray-600"
          variants={itemVariants}>
          <p>
            <span className="font-semibold">Send Your Feedback:</span>{" "}
            <a
              href="mailto:mac.eddargujjicatnoc"
              className="text-gray-400! hover:underline">
              mac.eddargujjicatnoc
            </a>
          </p>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-4 text-xs text-gray-500"
          variants={itemVariants}>
          <a
            href="#"
            className="hover:text-[#006022]! text-gray-400! transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-[#006022] text-gray-400! transition-colors">
            Terms & Condition
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-[#006022] text-gray-400! transition-colors">
            Cookie Notice
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-[#006022] text-gray-400! transition-colors">
            Copyright Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-[#006022] text-gray-400! transition-colors">
            Data Policy
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-xs text-gray-500"
          variants={itemVariants}>
          <p>© 2024 Design Monks. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

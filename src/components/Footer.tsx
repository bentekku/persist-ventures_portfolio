import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer
      className="text-gray-300 flex flex-col items-center justify-center space-y-3 py-4 mt-8 lg:mt-0"
      aria-labelledby="footer-text"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          duration: 0.5,
          delay: 0.6,
        }}
        id="footer-text"
        className="text-lg font-thin text-white/90"
        aria-label="Closing message"
      >
        Phir milte hai, Namaste{" "}
        <span
          className="text-white/90"
          role="img"
          aria-label="folded hands emoji"
        >
          🙏
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xs  text-white/65 font-content"
      >
        &copy;2024 All rights reserved
      </motion.p>
    </footer>
  );
};

export default Footer;

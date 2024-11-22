import jsonData from "../../data.json";
import { motion } from "motion/react";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center lg:justify-around relative lg:scroll-snap-y lg:scroll-snap-mandatory overflow-y-auto h-screen"
      id="hero"
      aria-labelledby="hero-heading"
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        style={{ backdropFilter: "blur(3rem)" }}
        className="w-full h-full flex flex-col items-center justify-center backdrop-blur-3xl px-8 py-4 space-y-6 lg:space-y-8 snap-start"
        aria-describedby="hero-description"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2, delay: 0.2 }}
          className="text-white/60 font-thin text-xl lg:text-4xl text-left"
          id="hero-description"
        >
          {jsonData.name}
          <motion.div
            initial={{ opacity: 0, x: "-25vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="h-[2px] w-full bg-white/25 rounded"
          ></motion.div>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 65,
            duration: 0.7,
            delay: 0.5,
          }}
          id="hero-heading"
          className="font-content mt-2 text-white text-sm text-center lg:max-w-3xl lg:text-xl lg:leading-10 lg:tracking-widest leading-6 tracking-wide"
        >
          {jsonData.summary}
        </motion.h2>
        {jsonData.connect.map((item) => (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 180,
              duration: 0.5,
              delay: 0.8,
            }}
            title="LinkedIn"
            key={item.name}
          >
            <a href={item.link} target="_blank">
              <CiLinkedin
                size={34}
                className="text-white/40 hover:text-white/90 hover:scale-110 transition-all duration-100 delay-75"
              />
            </a>
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;

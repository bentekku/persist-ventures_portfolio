import jsonData from "../../data.json";
import { motion } from "motion/react";

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (indx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + 0.05 * indx,
      },
    }),
  };

  return (
    <section
      id="skills"
      role="region"
      aria-labelledby="skills-heading"
      className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around lg:space-x-32 space-y-6 lg:space-y-0 lg:scroll-snap-y lg:scroll-snap-mandatory overflow-y-auto"
    >
      <motion.div className="lg:-rotate-90 space-y-1 snap-start">
        <motion.h2
          initial={{ opacity: 0, x: "-25vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          id="skills-heading"
          className="text-2xl lg:text-3xl"
          aria-hidden="true"
        >
          Skills
        </motion.h2>
        <p className="sr-only">Skills</p>
        <motion.div
          initial={{ opacity: 0, x: "-25vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="h-[2px] w-full bg-white/25"
        ></motion.div>
      </motion.div>

      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8 max-w-full h-auto font-content text-md text-white font-light break-words p-4 text-center">
          {jsonData.skills.map((item, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.7 }}
              custom={index} // allows passing value into the object
              key={index}
              className="text-sm lg:text-md text-gray-200 border border-white/25 p-2 lg:p-3 self-center rounded-lg lg:hover:bg-white lg:hover:text-[#1b1b1b] lg:hover:font-semibold transition-all delay-75 duration-200"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

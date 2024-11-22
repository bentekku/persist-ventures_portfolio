import jsonData from "../../data.json";
import { motion } from "motion/react";

const Education = () => {
  return (
    <section
      id="education"
      className="h-[32rem] py-10 lg:py-0 lg:h-screen w-full flex flex-col lg:flex-row items-center justify-center relative backdrop-blur-3xl space-y-6 lg:space-y-0 lg:scroll-snap-y lg:scroll-snap-mandatory overflow-y-auto"
      aria-labelledby="education-heading"
    >
      {/* Rotated Title */}
      <motion.div
        className="flex flex-col items-center space-y-1 lg:-rotate-90 snap-start"
        aria-hidden="true"
      >
        <motion.h2
          initial={{ opacity: 0, x: "-25vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          id="education-heading"
          className="text-2xl lg:text-3xl"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: "-25vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="h-[2px] w-full bg-white/25"
        ></motion.div>
      </motion.div>

      {/* Education List */}
      <div className="flex flex-col justify-center items-center w-full max-w-4xl h-fit lg:h-full text-sm">
        <ul
          role="list"
          className="grid grid-cols-1 gap-y-12 gap-x-16 !list-disc !list-outside"
        >
          {jsonData.education.map((item, index) => {
            const dynamicDelay = 0.2 + (index + 2) / 10;

            return (
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7, delay: dynamicDelay }}
                key={item.university + index}
                className="flex flex-col items-center lg:items-start space-y-2"
              >
                <h3 className="text-lg lg:text-xl text-white/90 font-semibold">
                  {item.university}
                </h3>
                <h4 className="text-md text-white/60 font-content text-center">
                  {item.field}
                </h4>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;

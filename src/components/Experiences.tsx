import jsonData from "../../data.json";
import { motion } from "motion/react";

const Experiences = () => {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around lg:space-x-32 py-1 px-3 lg:py-3 lg:px-8 space-y-6 lg:space-y-0 lg:scroll-snap-y lg:scroll-snap-mandatory overflow-y-auto h-screen"
    >
      {/* Rotated Title */}
      <motion.div
        className="lg:-rotate-90 lg:text-left text-center space-y-1 snap-start"
        aria-hidden="true"
      >
        <motion.h2
          initial={{ opacity: 0, x: "-25vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          id="experiences-heading"
          className="text-2xl lg:text-3xl text-white font-bold"
        >
          Experiences
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: "-25vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="h-[2px] w-full bg-white/25"
        ></motion.div>
      </motion.div>

      {/* Experiences List */}
      <div className="flex items-center justify-center space-y-0 space-x-0 lg:space-y-8 font-content w-full lg:max-w-4xl">
        <ul className="space-y-4 lg:space-y-8 w-full flex flex-col items-center justify-center">
          {jsonData.experiences.map((item, indx) => {
            const dynamicDelay = 0.2 + (indx + 2) / 10;

            return (
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7, delay: dynamicDelay }}
                key={indx}
                className="text-center sm:text-left text-gray-300 self-start sm:self-auto w-full max-w-full"
              >
                <p className="text-md">
                  <span className="font-semibold text-white/90 text-md lg:text-base font-heading">
                    {item.role} @ {item.company}
                  </span>
                  <span className="text-white/60 text-sm">
                    {" | "}
                    {item.type} | {item["work-type"]}
                  </span>
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;

import jsonData from "../../data.json";

const Skills = () => {
  return (
    <section
      id="skills"
      role="region"
      aria-labelledby="skills-heading"
      className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around lg:space-x-32 space-y-6 lg:space-y-0 lg:scroll-snap-y lg:scroll-snap-mandatory overflow-y-auto"
    >
      <div className="lg:-rotate-90 space-y-1 snap-start">
        <h2
          id="skills-heading"
          className="text-2xl lg:text-3xl"
          aria-hidden="true"
        >
          Skills
        </h2>
        <p className="sr-only">Skills</p>
        <div className="h-[1px] w-full bg-white/10"></div>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8 max-w-full h-auto font-content text-md text-white font-light lg:list-disc lg:list-outside break-words p-4 text-center">
          {jsonData.skills.map((item, index) => (
            <li
              key={index}
              className="text-sm lg:text-md text-gray-200 border border-white/5 lg:border-none self-center p-1 rounded-lg lg:hover:underline lg:hover:underline-offset-8 transition-all delay-75 duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

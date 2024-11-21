import jsonData from "../../data.json";

const Skills = () => {
  return (
    <section
      role="region"
      aria-labelledby="skills-heading"
      className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-around lg:space-x-32 space-y-8 lg:space-y-0"
    >
      <div className="lg:-rotate-90">
        <h2 id="skills-heading" className="text-2xl" aria-hidden="true">
          Skills
        </h2>
        <p className="sr-only">Skills</p>
        <div className="h-[2px] w-full bg-white/10 mt-2"></div>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8 max-w-full h-auto font-content text-md text-white font-light list-disc break-words p-4">
          {jsonData.skills.map((item, index) => (
            <li key={index} className="text-sm text-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

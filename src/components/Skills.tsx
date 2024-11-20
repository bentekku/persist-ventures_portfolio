import jsonData from "../../data.json";

const Skills = () => {
  return (
    <section className="h-screen w-full flex items-start justify-around">
      <div>
        <p className="text-2xl">Skills</p>
        <div className="h-[2px] w-full bg-white/10"></div>
      </div>
      <div className="h-[400px] flex  flex-col flex-wrap space-y-4 space-x-12 items-center justify-center font-content text-md text-white/60 font-light border-red-500 border">
        {jsonData.skills.map((item, indx) => (
          <p
            key={indx}
            className="list-outside list-disc outline outline-yellow-300"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Skills;

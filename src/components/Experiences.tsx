import jsonData from "../../data.json";

const Experiences = () => {
  return (
    <section className="h-screen w-full flex items-start justify-around space-x-32">
      <div>
        <p className="text-2xl">Experiences</p>
        <div className="h-[2px] w-full bg-white/10"></div>
      </div>
      <div className="flex flex-col items-center space-y-8 font-content">
        {jsonData.experiences.map((item, indx) => (
          <p
            className="text-md text-white/80 self-start list-disc list-outside"
            key={indx}
          >
            {item.role} @ {item.company}{" "}
            <span className="font-light text-white/60">
              | {item.type} | {item["work-type"]}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Experiences;

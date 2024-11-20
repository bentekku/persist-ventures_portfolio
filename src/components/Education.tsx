import jsonData from "../../data.json";

const Education = () => {
  return (
    <section className="h-screen w-full flex items-start justify-around space-x-32">
      <div>
        <p className="text-2xl">Education</p>
        <div className="h-[2px] w-full bg-white/10"></div>
      </div>

      {jsonData.education.map((item, indx) => (
        <div className="space-y-6" key={indx}>
          <h1 className="text-xl text-white/80">{item.university}</h1>
          <h2 className="text-md text-white/65 font-content">{item.field}</h2>
        </div>
      ))}
    </section>
  );
};

export default Education;

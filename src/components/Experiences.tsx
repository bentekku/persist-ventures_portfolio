import jsonData from "../../data.json";

const Experiences = () => {
  return (
    <section
      aria-labelledby="experiences-heading"
      className="h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around lg:space-x-32 py-1 px-3 lg:py-3 lg:px-8 space-y-6 lg:space-y-0"
    >
      {/* Rotated Title */}
      <div
        className="lg:-rotate-90 lg:text-left text-center space-y-1"
        aria-hidden="true" // Hide for screen readers as it's decorative
      >
        <p
          id="experiences-heading"
          className="text-2xl lg:text-3xl text-white font-bold"
        >
          Experiences
        </p>
        <div className="h-[1px] w-full bg-white/10"></div>
      </div>

      {/* Experiences List */}
      <div className="flex items-center justify-center space-y-0 space-x-0 lg:space-y-8 font-content w-full lg:max-w-4xl">
        <ul className="space-y-4 lg:space-y-8 w-full flex flex-col items-center justify-center">
          {jsonData.experiences.map((item, indx) => (
            <li
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;

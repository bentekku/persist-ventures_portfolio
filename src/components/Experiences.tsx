import jsonData from "../../data.json";

const Experiences = () => {
  return (
    <section
      aria-labelledby="experiences-heading"
      className="h-screen w-full flex flex-col lg:flex-row items-center justify-around space-x-32 py-3 px-8"
    >
      {/* Rotated Title */}
      <div
        className="lg:-rotate-90 lg:text-left text-center"
        aria-hidden="true" // Hide for screen readers as it's decorative
      >
        <p
          id="experiences-heading"
          className="text-2xl lg:text-3xl text-white font-bold"
        >
          Experiences
        </p>
        <div className="h-[2px] w-full bg-white/10 mt-2"></div>
      </div>

      {/* Experiences List */}
      <div className="flex flex-col items-center space-y-8 font-content w-full max-w-3xl">
        <ul className="space-y-4 list-disc list-outside">
          {jsonData.experiences.map((item, indx) => (
            <li
              key={indx}
              className="text-md sm:text-xl text-center sm:text-left text-gray-300 self-start sm:self-auto"
            >
              <p>
                <span className="font-semibold text-white">
                  {item.role} @ {item.company}
                </span>
                <span className="font-light text-gray-500">
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

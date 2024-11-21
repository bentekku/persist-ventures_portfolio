import jsonData from "../../data.json";

const Education = () => {
  return (
    <section
      id="education"
      className="h-[32rem] py-10 lg:py-0 lg:h-screen w-full flex flex-col lg:flex-row items-center justify-center relative backdrop-blur-3xl space-y-6 lg:space-y-0"
      aria-labelledby="education-heading" // Adding ARIA label to the section
    >
      {/* Rotated Title */}
      <div
        className="flex flex-col items-center space-y-1 lg:-rotate-90"
        aria-hidden="true" // Hide from screen readers since it's decorative
      >
        <p id="education-heading" className="text-2xl lg:text-3xl">
          Education
        </p>
        <div className="h-[1px] bg-white/10 !w-full"></div>
      </div>

      {/* Education List */}
      <div className="flex flex-col justify-center items-center w-full max-w-4xl h-fit lg:h-full text-sm">
        <ul
          role="list" // Explicitly defining the role of the list for screen readers
          className="grid grid-cols-1 gap-y-12 gap-x-16 !list-disc !list-outside\"
        >
          {jsonData.education.map((item, index) => (
            <li
              key={item.university + index}
              className="flex flex-col items-center lg:items-start space-y-2"
            >
              <h3 className="text-lg lg:text-xl text-white/90 font-semibold">
                {item.university}
              </h3>
              <h4 className="text-md text-white/60 font-content text-center">
                {item.field}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;

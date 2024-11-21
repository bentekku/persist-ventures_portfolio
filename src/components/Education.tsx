import jsonData from "../../data.json";

const Education = () => {
  return (
    <section
      className="h-screen w-full flex items-center justify-around relative backdrop-blur-3xl"
      aria-labelledby="education-heading" // Adding ARIA label to the section
    >
      {/* Rotated Title */}
      <div
        className="flex flex-col items-center space-y-4 lg:-rotate-90"
        aria-hidden="true" // Hide from screen readers since it's decorative
      >
        <p id="education-heading" className="text-2xl">
          Education
        </p>
        <div className="h-[2px] w-16 bg-white/10 lg:w-full"></div>
      </div>

      {/* Education List */}
      <div className="flex flex-col justify-center items-center w-full max-w-4xl h-full">
        <ul
          role="list" // Explicitly defining the role of the list for screen readers
          className="grid grid-cols-1 gap-y-12 gap-x-16 !list-disc !list-outside"
        >
          {jsonData.education.map((item, index) => (
            <li
              key={item.university + index}
              className="flex flex-col items-start space-y-2"
            >
              <h3 className="text-xl text-white/90 font-semibold">
                {item.university}
              </h3>
              <h4 className="text-md text-white/60 font-content">
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

import jsonData from "../../data.json";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center lg:justify-around relative lg:scroll-snap-y lg:scroll-snap-mandatory overflow-y-auto h-screen"
      id="hero"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Shapes */}
      <div
        className="shape absolute top-34 right-40 h-44 w-44 z-2 lg:right-40 md:right-24 sm:right-10 sm:h-32 sm:w-32"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-[50%] right-64 h-44 w-44 !bg-red-500 z-1 lg:right-64 md:right-40 sm:right-20 sm:h-32 sm:w-32"
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div
        className="w-full h-full flex flex-col items-center justify-center backdrop-blur-3xl px-8 py-4 space-y-6 lg:space-y-8 snap-start"
        aria-describedby="hero-description"
      >
        <h1
          className="text-white/60 font-thin text-xl lg:text-4xl underline underline-offset-4 lg:underline-offset-8 text-left"
          id="hero-description"
        >
          {jsonData.name}
        </h1>
        <h2
          id="hero-heading"
          className="font-content mt-2 text-white text-sm text-center lg:max-w-3xl lg:text-xl lg:leading-10 lg:tracking-widest leading-6 tracking-wide"
        >
          {jsonData.summary}
        </h2>
      </div>
    </section>
  );
};

export default Hero;

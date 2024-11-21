const Hero = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-around relative"
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
        className="w-full h-screen flex flex-col items-center justify-center backdrop-blur-3xl px-8 py-4"
        aria-describedby="hero-description"
      >
        <div
          className="text-white/50 font-thin text-xl sm:text-lg"
          id="hero-description"
        >
          Design & Development
        </div>
        <h1
          id="hero-heading"
          className="text-3xl font-content mt-2 text-white sm:text-2xl"
        >
          If code is <span className="text-red-500/[76%]">Art</span> - <br />{" "}
          then we all are <span className="text-yellow-500/[60%]">Dante</span>.
        </h1>
      </div>
    </section>
  );
};

export default Hero;

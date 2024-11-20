const Hero = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center relative"
      id="hero"
    >
      <div className="shape absolute top-34 right-40 h-44 w-44 z-2 "></div>
      <div className=" absolute top-[50%] right-64 h-44 w-44 !bg-red-500 z-1"></div>
      <div className="w-full h-screen flex flex-col items-center justify-center backdrop-blur-3xl">
        <div className="text-white/50 font-thin text-xl">
          Design & Development
        </div>
        <h1 className="text-3xl font-content mt-2">
          If code is <span className="text-red-500/[76%]">Art</span> - <br />{" "}
          then we all are <span className="text-yellow-500/[60%]">Dante</span>.
        </h1>
      </div>
    </section>
  );
};

export default Hero;

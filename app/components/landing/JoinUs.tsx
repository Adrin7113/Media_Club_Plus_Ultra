const JoinUs = () => {
  return (
    <div className="hidden w-full h-[600px] bg-footerLanding bg-fixed lg:flex flex-col gap-4 justify-center items-center">
      <h1 className="text-white text-6xl geo font-bold">
        WE {"  "}
        <span className="text-red-600">NEED</span>
      </h1>
      <h1 className="text-white text-6xl geo font-bold">YOUR SKILLS.</h1>
      <button className="bg-red-700 w-56 h-[45px] font-medium open text-sm rounded-sm hover:scale-110 transition-all ease-in-out duration-500">
        Join Now!
      </button>
    </div>
  );
};

export default JoinUs;

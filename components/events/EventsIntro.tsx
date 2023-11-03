const EventsIntro = () => {
  return (
    <div className=" h-max relative bg-grad-redish1 rounded-b-3xl bg-no-repeat bg-cover bg-center flex flex-col items-center pt-40 pb-24">
      <div className="absolute top-0 left-0 bg-black/25 z-10 h-full w-full rounded-b-3xl"></div>
      <div className="relative z-20 w-3/4 geo mb-10">
        <h1 className="w-full h-1/3 text-white text-4xl lg:text-7xl font-bold md:text-left">
          <span className="text-white">Events</span>
        </h1>
      </div>
    </div>
  );
};

export default EventsIntro;

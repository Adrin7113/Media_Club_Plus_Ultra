import Link from "next/link";

const Intro = () => {
  return (
    <div className=" h-max relative bg-hero-intro rounded-b-3xl bg-no-repeat bg-cover bg-center flex flex-col items-center pt-28 ">
      <div className="absolute top-0 left-0 bg-black/60 z-10 h-full w-full rounded-b-3xl"></div>
      <div className="relative z-20 w-3/4  geo mb-10 flex flex-col gap-1 md:gap-5 pt-5 md:py-10 justify-center ">
        <h1 className="w-full h-1/2 text-white text-4xl md:text-5xl lg:text-7xl font-bold md:text-left">
          FUELLED BY <span className="text-red-600">CREATIVITY</span>
        </h1>

        <h1 className="w-full h-1/2 text-white text-4xl md:text-5xl lg:text-7xl font-bold md:text-right">
          BOUND BY <span className="text-red-600">MEDIA</span>
        </h1>
      </div>
      <div className="relative w-full h-full flex flex-col lg:flex-row z-20">
        <div className="lg:w-1/2 w-full h-full flex items-end justify-center gap-4 xl:gap-20 p-14 text-white">
          <div className="flex flex-col items-start justify-center geo">
            <h1 className="text-3xl lg:text-6xl font-bold">
              95K<span className="text-red-600">+</span>
            </h1>
            <h1 className="text-sm">Pictures</h1>
          </div>
          <div className="flex flex-col items-start justify-center geo">
            <h1 className="text-3xl lg:text-6xl font-bold">
              100K<span className="text-red-600">+</span>
            </h1>
            <h1 className="text-sm">Likes</h1>
          </div>
          <div className="flex flex-col items-start justify-center geo">
            <h1 className="text-3xl lg:text-6xl font-bold">
              30<span className="text-red-600">+</span>
            </h1>
            <h1 className="text-sm">Events</h1>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-full flex items-center">
          <div className="h-3/4 w-full bg-grad-redish bg-center bg-fit lg:bg-none lg:bg-black/50 rounded-b-none  lg:rounded-l-3xl p-10 flex flex-col items-center ">
            <h1 className="text-lg text-center text-white open font-medium">
              Explore the world of podcasting with us!
            </h1>
            <h1 className="text-lg text-center text-white open font-medium">
              <span className="font-black text-3xl">
                Introducing MITS Radio.
              </span>
            </h1>
            <div className="w-full flex justify-center">
              <Link href="/radio" className="w-2/3 md:w-1/3 h-[45px]">
                <button className="w-full h-full bg-red-700 mt-6 flex justify-center items-center open text-sm p-3 lg:text-xl font-medium rounded-md hover:scale-110 transition-all duration-500 ease-in-out">
                  Explore Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] relative z-10 bg-red-700 rounded-b-3xl flex justify-center items-center px-5">
        <h1 className="text-md md:text-2xl text-center font-medium text-red-400 geo">
          <span className="text-white font-bold">FIRST</span> AND{" "}
          <span className="text-white font-bold">BIGGEST</span> STUDENT DRIVEN
          CLUB OF <span className="text-white font-bold">MITS</span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;

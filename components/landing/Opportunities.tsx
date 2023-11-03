import Image from "next/image";

const Opportunities = () => {
  return (
    <div className="w-full rounded-3xl bg-oppor md:bg-no-repeat bg-cover  bg-center flex flex-col justify-center items-center md:flex-row ">
      <div className="h-full pt-10 w-full md:w-1/2 flex justify-center items-center open text-3xl md:text-5xl text-white font-extrabold">
        <h1 className="w-full text-center md:text-left lg:w-5/6 pl-5 geo font-bold">
          PUT YOUR POTENTIAL TO THE{" "}
          <span className="text-red-600">GREATER CAUSE</span>
        </h1>
      </div>
      <div className="hidden md:w-1/2  lg:flex flex-col justify-center items-center p-5 gap-5">
        <div className="flex  gap-10 justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/img/opportunities/reels.png"
            alt="Reels"
            className="w-44 h-44  transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/tv.png"
            alt="TV and Media"
            className="w-44 h-44  transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/video.png"
            alt="Videography"
            className="w-44 h-44  transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="flex  gap-10 justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/img/opportunities/edit.png"
            alt="Editing"
            className="w-44 h-44  transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/design.png"
            alt="Designing"
            className="w-44 h-44  transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/campaign.png"
            alt="Campaign"
            className="w-44 h-44  transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      {/*Mobile Only */}
      <div className="lg:hidden w-1/2 flex flex-col justify-center items-center p-5 gap-5">
        <div className="flex  gap-10 justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/img/opportunities/reels.png"
            alt="Reels"
            className="w-32 h-32 md:w-44 md:h-44 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/tv.png"
            alt="TV and Media"
            className="w-32 h-32 md:w-44 md:h-44 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex  gap-10 justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/img/opportunities/video.png"
            alt="Videography"
            className="w-32 h-32 md:w-44 md:h-44 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/edit.png"
            alt="Editing"
            className="w-32 h-32 md:w-44 md:h-44 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex  gap-10 justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/img/opportunities/design.png"
            alt="Designing"
            className="w-32 h-32 md:w-44 md:h-44 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <Image
            width={500}
            height={500}
            src="/img/opportunities/campaign.png"
            alt="Campaign"
            className="w-32 h-32 md:w-44 md:h-44 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;

import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

interface EventProp {
  eventDetails: {
    eventName: string;
    imgUrl?: string;
    link: URL;
    highlight: boolean;
    picUrls: string[];
    eventId: string;
    bgUrl: string;
    writeUp: string;
    drive?: string;
  };
}

const EventIntro: NextPage<EventProp> = ({ eventDetails }) => {
  const [showArrowRight, setShowArrowRight] = useState(true);
  let bg = `url('${eventDetails.bgUrl}')`;
  let increment = 0;
  const scrollToEnd = () => {
    const objDiv = document.getElementById("ScrollOne");
    increment -= 360;
    if (objDiv) {
      if (Math.abs(increment) >= objDiv.scrollWidth - window.innerWidth) {
        increment = window.innerWidth - objDiv.scrollWidth - 32;
        setShowArrowRight(false);
      }
      objDiv.style.transform = `translateX(${increment}px)`;
    }
  };
  const scrollToStart = () => {
    const objDiv = document.getElementById("ScrollOne");
    increment += 360;
    if (objDiv) {
      if (Math.abs(increment) >= 0) {
        increment = 0;
        setShowArrowRight(true);
      }
      objDiv.style.transform = `translateX(${increment}px)`;
    }
  };
  return (
    <>
      <div
        style={{ backgroundImage: `${bg}` }}
        className={`min-h-[600px] relative bg-no-repeat bg-cover bg-center flex flex-col items-start rounded-b-3xl pt-28 `}
      >
        <div className="absolute top-0 left-0 bg-black/60 z-10 h-full w-full"></div>
        <div className="relative z-20 w-full h-full p-10 flex flex-col gap-10">
          <h1 className="text-5xl text-white font-bold">
            {eventDetails.eventName}
          </h1>
          <h1 className="text-lg text-white w-full md:w-1/2">
            {eventDetails.writeUp}
          </h1>
        </div>
        <a href={eventDetails.drive}>
          <button className="relative z-20 bg-red-700 w-56 h-[45px]  m-10 mt-0 font-medium open text-sm rounded-md hover:scale-110 transition-all ease-in-out duration-500">
            Download
          </button>
        </a>
      </div>
      <div className="relative md:h-[600px] overflow-x-hidden rounded-t-none my-5 overflow-y-hidden">
        <Image
          width={500}
          height={500}
          src="/svg/curve.svg"
          alt="Curve"
          className="absolute top-[-50px] z-20 w-full"
        />
        <Image
          width={500}
          height={500}
          src="/svg/curve.svg"
          alt="Curve"
          className="absolute bottom-[-50px] z-20 w-full"
        />
        <div
          id="ScrollOne"
          className="w-full h-full flex transition-all ease-in-out duration-700 gap-5"
        >
          {eventDetails.picUrls.map((value, index) => (
            <Image
              width={1000}
              height={1000}
              key={index}
              src={value}
              alt={`${eventDetails.eventName} Image ${index}`}
              className="h-full w-auto"
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 bg-black/20 z-10 h-full w-full rounded-b-3xl"></div>
        <div className="absolute top-0 left-0 z-20 w-full h-full flex justify-between items-center p-5">
          <Image
            width={50}
            height={50}
            src="/svg/indicateArrow.svg"
            alt="Indication Arrow Left"
            className={`bg-black/60 rounded-full rotate-180 cursor-pointer h-10 w-10`}
            onClick={() => scrollToStart()}
          />
          <Image
            width={50}
            height={50}
            src="/svg/indicateArrow.svg"
            alt="Indication Arrow Right"
            className={`bg-black/60 rounded-full cursor-pointer ${
              showArrowRight ? "" : "hidden"
            } h-10 w-10`}
            onClick={() => scrollToEnd()}
          />
        </div>
      </div>
    </>
  );
};

export default EventIntro;

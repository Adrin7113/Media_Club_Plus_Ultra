"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { URL } from "url";

interface Event {
  eventName: string;
  imgUrl?: string;
  link: URL;
  highlight: boolean;
  picUrls: string[];
  eventId: string;
  bgUrl: string;
  writeUp: string;
  drive?: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    async function getMainEvents() {
      try {
        const response = await axios.get("http://localhost/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMainEvents();
  }, []);
  return (
    <div className="w-full px-5">
      <div className="h-[50px] flex my-5">
        <div className="w-1/2 h-full border-b-[1px] border-red-600 geo">
          <h1 className="text-3xl text-red-600 font-bold">Events</h1>
        </div>
        <div className="w-1/2 h-full flex border-b-[1px] md:border-b-0 border-red-600 justify-end geo">
          <Link href="/events">
            <h1 className="text-xl text-red-600 font-medium cursor-pointer hover:scale-110 transition-all ease-in-out duration-500">
              See More →
            </h1>
          </Link>
        </div>
      </div>
      {events && (
        <div className="w-full lg:flex justify-center gap-5">
          <div
            className={`w-full lg:w-1/3 ${
              events[0] || events[1] ? "h-[600px]" : ""
            } flex flex-col gap-5`}
          >
            {events[0] && (
              <div
                style={{ backgroundImage: `url(${events[0].imgUrl})` }}
                className={`relative w-full h-1/2 bg-no-repeat bg-center bg-cover rounded-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
              >
                <Link href={events[0].link}>
                  <div className="absolute top-0 left-0 w-full h-full gradImg z-10 flex items-end text-white p-10 text-4xl geo font-bold">
                    <h1>{events[0].eventName}</h1>
                  </div>
                </Link>
              </div>
            )}
            {events[1] && (
              <div
                style={{ backgroundImage: `url(${events[1].imgUrl})` }}
                className={`relative w-full h-1/2  bg-no-repeat bg-center bg-cover rounded-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
              >
                <Link href={events[1].link}>
                  <div className="absolute top-0 left-0 w-full h-full gradImg z-10 flex items-end text-white p-10 text-4xl geo font-bold">
                    <h1>{events[1].eventName}</h1>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className={`w-full lg:w-1/3 ${events[2] ? "h-[600px]" : ""}`}>
            {events[2] && (
              <div
                style={{ backgroundImage: `url(${events[2].imgUrl})` }}
                className={`relative w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
              >
                <Link href={events[2].link}>
                  <div className="absolute top-0 left-0 w-full h-full gradImg z-10 flex items-end text-white p-10 text-4xl geo font-bold">
                    <h1>{events[2].eventName}</h1>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div
            className={`w-full lg:w-1/3 ${
              events[3] || events[4] ? "h-[600px]" : ""
            } flex flex-col gap-5`}
          >
            {events[3] && (
              <div
                style={{ backgroundImage: `url(${events[3].imgUrl})` }}
                className={`relative w-full h-1/2 bg-no-repeat bg-center bg-cover rounded-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
              >
                <Link href={events[3].link}>
                  <div className="absolute top-0 left-0 w-full h-full gradImg z-10 flex items-end text-white p-10 text-4xl geo font-bold">
                    <h1>{events[3].eventName}</h1>
                  </div>
                </Link>
              </div>
            )}
            {events[4] && (
              <div
                style={{ backgroundImage: `url(${events[4].imgUrl})` }}
                className={`relative w-full h-1/2 bg-no-repeat bg-center bg-cover rounded-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
              >
                <Link href={events[4].link}>
                  <div className="absolute top-0 left-0 w-full h-full gradImg z-10 flex items-end text-white p-10 text-4xl geo font-bold">
                    <h1>{events[4].eventName}</h1>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

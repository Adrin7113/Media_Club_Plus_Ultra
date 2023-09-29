"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const EventsCards = () => {
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
    <div className="w-full h-full pt-8 pb-8">
      <div className="flex flex-wrap justify-center items-center gap-5 px-2">
        {events && (
          <>
            {events.map((value, index) => (
              <div key={index}>
                <Link href={value.link}>
                  <div
                    style={{ backgroundImage: `url(${value.imgUrl})` }}
                    className={`w-[300px] h-[300px] bg-cover bg-center rounded-lg transition-all hover:scale-105 ease-in-out duration-500 flex justify-start items-end p-5`}
                  >
                    <h1 className="font-bold text-white text-3xl geo">
                      {value.eventName}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default EventsCards;

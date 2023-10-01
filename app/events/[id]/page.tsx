"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import EventIntro from "@/app/components/event/EventIntro";

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

const Event = ({ params }: { params: { id: string } }) => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    imgUrl: "",
    link: new URL("https://mitsmedia.com"),
    highlight: false,
    picUrls: [],
    eventId: "",
    bgUrl: "",
    writeUp: "",
    drive: "",
  });
  useEffect(() => {
    async function getEvent() {
      axios
        .post(`http://localhost/api/events/event`, {
          eventId: params.id,
        })
        .then(function (response) {
          setEventDetails(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getEvent();
  }, [params.id]);

  return (
    <div className="relative min-h-screen w-screen px-6 pb-10 bg-black">
      {eventDetails && <EventIntro eventDetails={eventDetails} />}
    </div>
  );
};

export default Event;

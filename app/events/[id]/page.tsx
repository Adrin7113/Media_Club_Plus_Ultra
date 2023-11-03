"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import EventIntro from "@/components/event/EventIntro";

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
        .post(`https://mediaclubbackend-queengn6.b4a.run/api/events/event`, {
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

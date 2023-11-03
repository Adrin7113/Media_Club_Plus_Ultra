import EventsCards from "@/components/events/EventsCards";
import EventsIntro from "@/components/events/EventsIntro";

const Events = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="px-6 pb-10">
        <EventsIntro />
      </div>
      <EventsCards />
    </div>
  );
};

export default Events;

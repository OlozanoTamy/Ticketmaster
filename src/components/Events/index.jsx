import EventItem from "./components/EvenItem";
import { useState } from "react";
import EventsJson from "../../data/events.json";
const Events = () => {
  const [data, setData] = useState(EventsJson);
  const {
    _embedded: { events },
  } = data;
  const eventsComponent = events.map((eventItem) => (
    <EventItem
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={eventItem.images[0].url}
    />
  ));
  return (
    <>
      <p>Eventos</p>
      {eventsComponent}
    </>
  );
};
export default Events;

import Link from "next/link";
import { Event } from "../../types/event";
import EventList from "./event-list-view";

interface Props {
  eventsArray: Event[];
}

export default function UpcomingEvents({ eventsArray }: Props) {
  return (
    <section className="pt-10 pb-14 md:py-20">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="mb-4 text-center">Upcoming Events</h1>
        <EventList
          eventsArray={eventsArray.slice(0, Math.min(eventsArray.length, 3))}
        />
        <Link href="/events">
          <button className="btn-style2-default">Check out our events!</button>
        </Link>
      </div>
    </section>
  );
}

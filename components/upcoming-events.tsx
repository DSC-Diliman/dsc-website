import Link from "next/link";
import { EventInCMS } from "../types/event-in-cms";
import EventList from "./event-list-view";

interface Props {
  eventsArray: EventInCMS[];
}

export default function UpcomingEvents({ eventsArray }: Props) {
  return (
    <section className="pt-10 pb-14 md:px-10 md:py-20">
      <div className="mx-auto flex flex-col items-center md:max-w-2xl">
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

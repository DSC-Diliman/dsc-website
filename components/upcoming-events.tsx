import Link from "next/link";
import { EventInCMS } from "../types/event-in-cms";
import EventListView from "./event-list-view";

interface Props {
  eventsArray: EventInCMS[];
}

export default function UpcomingEvents({ eventsArray }: Props) {
  return (
    <section
      className="
			pt-10 pb-14
			md:px-10 md:py-20
		"
    >
      <div
        className="
				mx-auto flex flex-col items-center
				md:max-w-2xl
			"
      >
        <h1 className="mb-4 text-center">Upcoming Events</h1>
        <div className="div-style1 w-5/6 overflow-hidden mt-10 mb-20 md:w-full">
          <EventListView
            className="px-6 max-h-80 md:px-10"
            eventsArray={eventsArray}
          />
        </div>
        <Link href="/events">
          <button className="btn-style2-red">Check out our events!</button>
        </Link>
      </div>
    </section>
  );
}

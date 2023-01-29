import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from "react-icons/bi";
import Link from "next/link";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";
import Image from "next/image";
import { EventInCMS } from "../types/event-in-cms";
import titleToId from "../lib/titleToId";

interface Props {
  event: EventInCMS;
}

export default function EventFeatured({ event }: Props) {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto div-style1">
        <div className="sm:flex-1 sm:order-2 h-40 sm:h-auto flex flex-col m-0 md:m-5 img-frame md:rounded-3xl">
          <div className="overflow-y-hidden flex-1">
            <Image src={event.images[0]} alt="Event image" fill />
          </div>
        </div>
        <div className="sm:flex-1 flex flex-col my-4 mx-4 md:my-10 md:ml-12 sm:max-w-sm">
          <div>
            <p className="text-lg text-red-pr mb-4">FEATURED</p>
            <p className="font-medium text-4xl mb-4">{event.title}</p>
            <div className="mb-6 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-1">
              <div>
                <BiCalendarEvent /> <FormattedDate dateTime={event.date} />
              </div>
              <a href={event.locationURL} target="_blank" rel="noreferrer">
                <div>
                  <BiLocationPlus /> {event.location}
                </div>
              </a>
              <div>
                <BiTimeFive />{" "}
                <FormattedTime dateTime={event.date} timeFormat="h:mm aaa" />-
                <FormattedTime dateTime={event.dateEnd} timeFormat="h:mm aaa" />
              </div>
            </div>
            <p className="mb-8">{event.summary}</p>
            <Link
              href={`/events?id=${titleToId(event.title)}`}
              as={`/events/${titleToId(event.title)}`}
              scroll={false}
            >
              <button className="btn-style2-red">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

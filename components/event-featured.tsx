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
      <div className="div-style1 mx-auto flex w-full max-w-6xl flex-col sm:flex-row">
        <div className="img-frame m-0 flex h-40 flex-col sm:order-2 sm:h-auto sm:flex-1 md:m-5 md:rounded-3xl">
          <div className="flex-1 overflow-y-hidden">
            <Image
              src={event.images[0]}
              alt="Event image"
              height={160}
              width={(439 / 214) * 160}
            />
          </div>
        </div>
        <div className="my-4 mx-4 flex flex-col sm:max-w-sm sm:flex-1 md:my-10 md:ml-12">
          <div>
            <p className="mb-4 text-lg text-red-pr">FEATURED</p>
            <p className="mb-4 text-4xl font-medium">{event.title}</p>
            <div className="mb-6 grid grid-rows-3 gap-1 md:grid-cols-2 md:grid-rows-2">
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
              <button className="btn-style2-red">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

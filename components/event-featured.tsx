import { BiTimeFive, BiCalendarEvent } from "react-icons/bi";
import Link from "next/link";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";
import Image from "next/image";
import { EventInCMS } from "../types/event-in-cms";
import sameDay from "../lib/sameDay";
import { eventColors } from "../lib/eventColors";
import { GrLocation } from "react-icons/gr";

interface Props {
  event: EventInCMS;
  openModal: (e: EventInCMS) => void;
}

export default function EventFeatured({ event, openModal }: Props) {
  return (
    <div className="div-style1 mx-auto flex max-h-80 w-full max-w-6xl flex-col sm:flex-row">
      <div className="img-frame sm:order-2 sm:flex-1">
        <Image
          src={event.images[0]}
          alt="Event image"
          height={120}
          width={(439 / 214) * 120}
        />
      </div>
      <div className="flex items-center">
        <div className="m-4 flex flex-col sm:max-w-md sm:flex-1 md:my-5 md:ml-10">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-3xl font-medium">{event.title}</p>
              <div
                className={`rounded-full px-2.5 py-0.5 text-sm font-medium text-white ${
                  eventColors["light-bg"][event.eventType]
                }`}
              >
                {event.eventType}
              </div>
            </div>
          </div>
          <div className="my-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <BiCalendarEvent size={20} />{" "}
              <span>
                <FormattedDate dateTime={event.date} />
                {!sameDay(event.date, event.dateEnd) && (
                  <>
                    <span> – </span>
                    <FormattedDate dateTime={event.dateEnd} />
                  </>
                )}
              </span>
            </div>
            {sameDay(event.date, event.dateEnd) && (
              <div className="flex items-center gap-2">
                <BiTimeFive size={20} />{" "}
                <span>
                  <FormattedTime dateTime={event.date} /> –{" "}
                  <FormattedTime dateTime={event.dateEnd} />
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <GrLocation size={20} />{" "}
              <Link href={event.locationURL}>
                <span className="border-b border-black">{event.location}</span>
              </Link>
            </div>
          </div>
          <div className="mb-6">
            <p>{event.summary}</p>
          </div>
          <div>
            <button
              className={`${eventColors["button"][event.eventType]}`}
              onClick={() => openModal(event)}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

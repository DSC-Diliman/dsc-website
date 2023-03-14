import { BiTimeFive, BiCalendarEvent } from "react-icons/bi";
import Link from "next/link";
import FormattedDate from "../formatted-date";
import FormattedTime from "../formatted-time";
import Image from "next/image";
import { Event } from "../../types/event";
import sameDay from "../../lib/same-day";
import { eventColors } from "../../lib/event-colors";
import { GrLocation } from "react-icons/gr";

interface Props {
  event: Event;
  openModal: (e: Event) => void;
}

export default function EventFeatured({ event, openModal }: Props) {
  return (
    <div className="div-style1 relative mx-auto flex w-full max-w-5xl flex-col sm:max-h-80 sm:flex-row">
      <div className="img-frame absolute right-0 z-0 h-full opacity-10 sm:order-2 sm:flex-1 lg:opacity-30">
        <Image
          src={event.images[0]}
          alt="Event image"
          height={120}
          width={(439 / 214) * 120}
        />
      </div>
      <div className="z-10 flex items-center px-8 py-6 sm:p-0">
        <div className="flex flex-col sm:my-8 sm:mx-8 sm:max-w-lg sm:flex-1 md:mx-10">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-2xl font-medium md:text-3xl">{event.title}</p>
            <div
              className={`rounded-full px-2.5 py-0.5 text-sm font-medium text-white ${
                eventColors["light-bg"][event.eventType]
              }`}
            >
              {event.eventType}
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

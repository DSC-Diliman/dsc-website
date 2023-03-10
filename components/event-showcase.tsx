import Image from "next/image";
import Link from "next/link";
import { BiTimeFive, BiCalendarEvent } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { eventColors } from "../lib/eventColors";
import sameDay from "../lib/sameDay";
import { EventInCMS } from "../types/event-in-cms";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";
import markdownStyle from "/components/Markdown.module.scss";

interface Props {
  event: EventInCMS;
}

export default function EventShowcase({ event }: Props) {
  return (
    <div className="max-h-[40rem]">
      <div className="img-frame h-60 sm:h-80 md:rounded-3xl">
        <Image
          src={event.images[0]}
          alt="Event image"
          height={320}
          width={(439 / 214) * 320}
        />
      </div>
      <div
        className={`flex border-t-2 border-solid ${
          eventColors["border"][event.eventType]
        } flex h-fit max-h-80 flex-col gap-3 px-7 py-5 md:flex-row md:items-center`}
      >
        <div className="flex min-w-[40%] flex-col justify-center">
          <div className="mb-4 flex flex-col items-start gap-3">
            <h1 className="text-2xl">{event.title}</h1>
            <div
              className={`rounded-full px-2.5 py-0.5 text-sm font-medium text-white ${
                eventColors["light-bg"][event.eventType]
              }`}
            >
              {event.eventType}
            </div>
          </div>
          <div className="flex flex-col gap-1 md:grid-cols-2 md:grid-rows-2">
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
        </div>
        {event.body && (
          <div className="max-h-60 overflow-auto">
            <div
              className={`${markdownStyle.markdown} overflow-auto`}
              dangerouslySetInnerHTML={{ __html: event.body || "" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

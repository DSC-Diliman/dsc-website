import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { eventColors } from "../lib/eventColors";
import sameDay from "../lib/sameDay";
import { EventInCMS } from "../types/event-in-cms";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";

interface Props {
  eventsArray: EventInCMS[];
}

export default function EventList({ eventsArray }: Props) {
  return (
    <div className="mt-10 mb-20 flex w-5/6 flex-col gap-14 md:w-full">
      {eventsArray &&
        eventsArray.map((e, index) => (
          <div key={index} className="div-style1 flex px-8 py-5">
            <div className="flex flex-col justify-center text-center">
              <FormattedDate
                dateTime={e.date}
                dateFormat="MMM"
                func={(string) => string.toUpperCase()}
              />
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  eventColors["light-bg"][e.eventType]
                } text-2xl font-bold text-white`}
              >
                <FormattedDate dateTime={e.date} dateFormat="dd" />
              </div>
              <FormattedDate dateTime={e.date} dateFormat="yyyy" />
            </div>
            {!sameDay(e.date, e.dateEnd) && (
              <>
                <div
                  className={`mx-3 w-1 rounded-full ${
                    eventColors["separator"][e.eventType]
                  }`}
                />
                <div className="flex flex-col justify-center text-center">
                  <FormattedDate
                    dateTime={e.dateEnd}
                    dateFormat="MMM"
                    func={(string) => string.toUpperCase()}
                  />
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      eventColors["light-bg"][e.eventType]
                    } text-2xl font-bold text-white`}
                  >
                    <FormattedDate dateTime={e.dateEnd} dateFormat="dd" />
                  </div>
                  <FormattedDate dateTime={e.dateEnd} dateFormat="yyyy" />
                </div>
              </>
            )}
            <div
              className={`mx-4 w-1 rounded-full ${
                eventColors["light-bg"][e.eventType]
              } md:mx-6`}
            />
            <div className="flex flex-col justify-center gap-1">
              <p className="text-base font-bold sm:text-lg">{e.title}</p>
              {sameDay(e.date, e.dateEnd) && (
                <div className="flex items-center gap-2">
                  <BiTimeFive size={20} />{" "}
                  <span>
                    <FormattedTime dateTime={e.date} /> –{" "}
                    <FormattedTime dateTime={e.dateEnd} />
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <GrLocation size={20} />{" "}
                <Link href={e.locationURL}>
                  <span className="border-b border-black">{e.location}</span>
                </Link>
              </div>
            </div>
            <div className="ml-auto flex items-center">
              <Link href={`/events#${e.id}`}>
                <button className={`${eventColors["button"][e.eventType]}`}>
                  See Event
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

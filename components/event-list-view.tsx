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
    <div className="mt-10 mb-20 flex w-5/6 max-w-lg flex-col items-center gap-14 md:w-full md:max-w-full">
      {eventsArray &&
        eventsArray.map((e, index) => (
          <div
            key={index}
            className="div-style1 flex w-fit gap-8 px-8 py-6 sm:px-8"
          >
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <div className="flex">
                <div className="flex items-center justify-center gap-1 text-center md:flex-col md:gap-0">
                  <FormattedDate dateTime={e.date} dateFormat="MMM" />
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      eventColors["light-bg"][e.eventType]
                    } text-2xl font-medium text-white`}
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
                    <div className="flex items-center justify-center gap-1 text-center md:flex-col md:gap-0">
                      <FormattedDate dateTime={e.dateEnd} dateFormat="MMM" />
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          eventColors["light-bg"][e.eventType]
                        } text-2xl font-medium text-white`}
                      >
                        <FormattedDate dateTime={e.dateEnd} dateFormat="dd" />
                      </div>
                      <FormattedDate dateTime={e.dateEnd} dateFormat="yyyy" />
                    </div>
                  </>
                )}
              </div>
              <div
                className={`my-2 h-1 w-full rounded-full md:mx-2 md:my-0 md:h-full md:w-1 ${
                  eventColors["light-bg"][e.eventType]
                } md:mx-5`}
              />
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <div className="mb-4 flex w-full flex-col items-start gap-1 md:mb-0 md:flex-row md:items-center md:gap-4">
                  <p className="text-base font-medium sm:text-lg">{e.title}</p>
                  <div
                    className={`rounded-full px-2.5 py-0.5 text-sm font-medium text-white md:ml-auto ${
                      eventColors["light-bg"][e.eventType]
                    }`}
                  >
                    {e.eventType}
                  </div>
                </div>
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
            </div>
            <div className="hidden md:ml-auto md:block md:flex md:items-center">
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

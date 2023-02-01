import Link from "next/link";
import getEventColor from "../lib/eventColor";
import { EventInCMS } from "../types/event-in-cms";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";

interface Props {
  eventsArray: EventInCMS[];
  className: string;
}

export default function EventListView({ eventsArray, className }: Props) {
  return (
    <div
      className={`scroll-y mx-auto overflow-y-auto overscroll-contain ${className}`}
    >
      {eventsArray &&
        eventsArray.map((currEvent, index) => (
          <div
            key={index}
            className="w-fullscroll-start border-b-2 border-gray-100 py-4 md:py-6"
          >
            <p className="mb-2 text-base">
              <FormattedDate dateTime={currEvent.date} />
            </p>
            <div className="flex items-center">
              <div className="w-18">
                <p className="text-sm font-medium sm:text-base">
                  <FormattedTime dateTime={currEvent.date} />
                </p>
                <p className="text-xs sm:text-sm">
                  <FormattedTime dateTime={currEvent.dateEnd} />
                </p>
              </div>
              <div
                className={`mx-4 h-12 w-1 rounded-full ${getEventColor(
                  currEvent.eventType
                )} md:mx-6`}
              />
              <div className="flex-auto">
                <p className="text-xs sm:text-sm">{currEvent.eventType}</p>
                <p className="text-base font-bold sm:text-lg">
                  {currEvent.title}
                </p>
              </div>
              {currEvent.locationURL ? (
                <Link href={currEvent.locationURL}>
                  <p className="cursor-pointer hover:underline">
                    {currEvent.location}
                  </p>
                </Link>
              ) : (
                <p>{currEvent.location}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

import { useRouter } from "next/router";
import FormattedDate from "./formatted-date";
import getEventColor from "../lib/eventColor";
import FormattedTime from "./formatted-time";
import { BiTimeFive, BiLocationPlus } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { EventInCMS } from "../types/event-in-cms";
import titleToId from "../lib/titleToId";

interface Props {
  eventsData: EventInCMS[];
}

export default function EventsGrid({ eventsData }: Props) {
  const router = useRouter();

  return (
    <>
      <h2 className="mb-6 text-center text-2xl font-medium">All Events</h2>
      <div className="mb-10 flex flex-wrap place-content-center space-x-8">
        <div className="flex items-center">
          <div className="h-4 w-4 rounded-full bg-red-500" />
          <p className="ml-4">Speaker Sessions</p>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 rounded-full bg-blue-500" />
          <p className="ml-4">Internal</p>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 rounded-full bg-emerald-500" />
          <p className="ml-4">Workshops</p>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 rounded-full bg-amber-500" />
          <p className="ml-4">Tech Solutions</p>
        </div>
      </div>
      <div className="auto-grid-base mx-auto grid max-w-6xl auto-rows-fr gap-x-8 gap-y-4 md:gap-y-12">
        {eventsData
          ? eventsData.map((e, index) => (
              <Link
                href={`/events?id=${titleToId(e.title)}`}
                as={`/events/${titleToId(e.title)}`}
                scroll={router.pathname != "/events"}
                shallow={true}
                key={index}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-0 ring-inset ring-red-700 transition-all hover:shadow-none hover:ring-4">
                  <div className="img-frame h-32 flex-none">
                    <Image
                      src={e.images[0]}
                      alt="Event image"
                      height={128}
                      width={(439 / 214) * 128}
                    />
                  </div>
                  <div className="flex flex-1 p-4 text-sm">
                    <div className="self-center text-center">
                      <FormattedDate
                        dateTime={e.date}
                        dateFormat="MMM"
                        func={(string) => string.toUpperCase()}
                      />
                      <br />
                      <span className="text-3xl font-bold">
                        <FormattedDate dateTime={e.date} dateFormat="dd" />
                      </span>
                      <br />
                      <FormattedDate dateTime={e.date} dateFormat="yyyy" />
                    </div>
                    <div
                      className={
                        "mx-3 w-1 rounded-full " + getEventColor(e.eventType)
                      }
                    />
                    <div className="w-full">
                      <p className="text-xl font-bold">{e.title}</p>
                      <div className="flex w-full">
                        <p>
                          <BiTimeFive />{" "}
                          <FormattedTime
                            dateTime={e.date}
                            timeFormat="h:mm aaa"
                          />
                          -
                          <FormattedTime
                            dateTime={e.dateEnd}
                            timeFormat="h:mm aaa"
                          />
                        </p>
                        <BiLocationPlus className="ml-auto" /> {e.location}
                      </div>
                      <p className="mt-2 max-h-24 overflow-y-auto">
                        {e.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>
    </>
  );
}

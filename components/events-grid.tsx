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
      <h2 className="text-center mb-6 text-2xl font-medium">All Events</h2>
      <div className="flex flex-wrap place-content-center mb-10 space-x-8">
        <div className="flex items-center">
          <div className="bg-red-500 w-4 h-4 rounded-full" />
          <p className="ml-4">Speaker Sessions</p>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-500 w-4 h-4 rounded-full" />
          <p className="ml-4">Internal</p>
        </div>
        <div className="flex items-center">
          <div className="bg-emerald-500 w-4 h-4 rounded-full" />
          <p className="ml-4">Workshops</p>
        </div>
        <div className="flex items-center">
          <div className="bg-amber-500 w-4 h-4 rounded-full" />
          <p className="ml-4">Tech Solutions</p>
        </div>
      </div>
      <div className="grid auto-grid-base gap-x-8 gap-y-4 md:gap-y-12 auto-rows-fr max-w-6xl mx-auto">
        {eventsData
          ? eventsData.map((e, index) => (
              <Link
                href={`/events?id=${titleToId(e.title)}`}
                as={`/events/${titleToId(e.title)}`}
                scroll={router.pathname != "/events"}
                shallow={true}
                key={index}
              >
                <div className="transition-all h-full flex flex-col shadow-2xl rounded-2xl bg-white overflow-hidden hover:shadow-none ring-inset ring-0 hover:ring-4 ring-red-700">
                  <div className="flex-none img-frame h-32">
                    <Image
                      src={e.images[0]}
                      alt="Event image"
                      height={128}
                      width={(439 / 214) * 128}
                    />
                  </div>
                  <div className="flex flex-1 p-4 text-sm">
                    <div className="text-center self-center">
                      <FormattedDate
                        dateTime={e.date}
                        dateFormat="MMM"
                        func={(string) => string.toUpperCase()}
                      />
                      <br />
                      <span className="font-bold text-3xl">
                        <FormattedDate dateTime={e.date} dateFormat="dd" />
                      </span>
                      <br />
                      <FormattedDate dateTime={e.date} dateFormat="yyyy" />
                    </div>
                    <div
                      className={
                        "w-1 mx-3 rounded-full " + getEventColor(e.eventType)
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

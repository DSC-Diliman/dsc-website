import { useRouter } from "next/router"
import DateFormatter from "./dateformatter";
import getEventColor from '../lib/eventColor'
import TimeFormatter from "./timeformatter";
import { BiTimeFive, BiLocationPlus } from 'react-icons/bi'
import Link from "next/link";

export default function EventsGrid({ eventsData }) {
  const router = useRouter()

  return (<>
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
        <div className="bg-green-500 w-4 h-4 rounded-full" />
        <p className="ml-4">Workshops</p>
      </div>
      <div className="flex items-center">
        <div className="bg-yellow-500 w-4 h-4 rounded-full" />
        <p className="ml-4">Tech Solutions</p>
      </div>
    </div>
    <div className="grid auto-grid-base gap-x-8 gap-y-4 md:gap-y-12 auto-rows-fr max-w-6xl mx-auto">
      {eventsData ? eventsData.map((e, index) =>
        <Link
          href={`/events?id=${e.id}`}
          as={`/events/${e.id}`}
          scroll={router.pathname != "/events"}
          shallow={true}
          key={index}
        >
          <a>
            <div className="transition-all h-full flex flex-col shadow-2xl rounded-2xl bg-white overflow-hidden hover:shadow-none ring-inset ring-0 hover:ring-4 ring-red-700">
              <div className="flex-none img-frame h-32">
                <img src={e.images[0]} />
              </div>
              <div className="flex flex-1 p-4 text-sm">
                <div className="text-center self-center">
                  <DateFormatter dateTime={e.date} dateFormat="MMM" func={string => string.toUpperCase()} /><br />
                  <span className="font-bold text-3xl"><DateFormatter dateTime={e.date} dateFormat="dd" /></span><br />
                  <DateFormatter dateTime={e.date} dateFormat="yyyy" />
                </div>
                <div className={"w-1 mx-3 rounded-full " + getEventColor(e.eventType)} />
                <div className="w-full">
                  <p className="text-xl font-bold">{e.title}</p>
                  <div className="flex w-full">
                    <p>
                      <BiTimeFive /> <TimeFormatter dateTime={e.date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={e.dateEnd} timeFormat="h:mm aaa" />
                    </p>
                    <BiLocationPlus className="ml-auto" /> {e.location}
                  </div>
                  <p className="mt-2 max-h-24 overflow-y-auto">
                    {e.summary}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ) : null}
    </div>
  </>)
}
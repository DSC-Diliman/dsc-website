import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from "react-icons/bi"
import Link from "next/link";
import DateFormatter from "/components/dateformatter"
import TimeFormatter from "/components/timeformatter"

export default function EventFeatured({ event }) {
  return (<>
    <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto div-style1">
      <div className="sm:flex-1 sm:order-2 h-40 sm:h-auto flex flex-col m-0 md:m-5 img-frame md:rounded-3xl">
        <div className="overflow-y-hidden flex-1">
          <img src={event.images[0]} />
        </div>
      </div>
      <div className="sm:flex-1 flex flex-col my-4 mx-4 md:my-10 md:ml-12 sm:max-w-sm">
        <div>
          <p className="text-lg text-red-pr mb-4">FEATURED</p>
          <p className="font-medium text-4xl mb-4">{event.title}</p>
          <div className="mb-6 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-1">
            <div><BiCalendarEvent /> <DateFormatter dateTime={event.date} /></div>
            <a href={event.locationURL} target="_blank"><div><BiLocationPlus /> {event.location}</div></a>
            <div><BiTimeFive /> <TimeFormatter dateTime={event.date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={event.dateEnd} timeFormat="h:mm aaa" /></div>
          </div>
          <p className="mb-8">{event.summary}</p>
          <Link
            href={`/events?id=${event.id}`}
            as={`/events/${event.id}`}
            scroll={false}
          >
            <button className="btn-style2-red">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  </>)
}

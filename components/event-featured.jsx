import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from 'react-icons/bi'
import DateFormatter from '../components/dateformatter'
import TimeFormatter from '../components/timeformatter'

export default function EventFeatured({ event }) {
  return (<>
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto div-style1">
      <div className="flex flex-col my-10 ml-12 mr-4 md:flex-shrink-0 max-w-sm">
        <div>
          <p className="text-lg text-red-pr mb-4">FEATURED</p>
          <p className="font-medium text-4xl mb-4">{event.title}</p>
          <div className="mb-6 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-1">
            <div><BiCalendarEvent /> <DateFormatter dateTime={event.date} /></div>
            <a href={event.locationURL} target="_blank"><div><BiLocationPlus /> {event.location}</div></a>
            <div><BiTimeFive /> <TimeFormatter dateTime={event.date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={event.dateEnd} timeFormat="h:mm aaa" /></div>
          </div>
          <p className="mb-8">{event.summary}</p>
          <button className="btn-style2-red">Learn More</button>
        </div>
      </div>
      <div className="flex flex-col m-5 img-frame rounded-3xl">
        <div className="overflow-y-hidden flex-1">
          <img src={event.images[0]} />
        </div>
      </div>
    </div>
  </>)
}

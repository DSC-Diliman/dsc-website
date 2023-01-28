import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from "react-icons/bi"
import DateFormatter from "./formatted-date"
import TimeFormatter from "./formatted-time"
import markdownStyle from "/components/Markdown.module.scss"

export default function EventShowcase({ event }) {
  return (<>
    <div className="md:px-6 md:pt-6 img-frame h-80 md:rounded-3xl"><img src={event.images[0]} alt="Event image" /></div>
    <div className="p-3 md:p-6">
      <p className="text-red-pr text-lg">{event.eventType}</p>
      <h1>{event.title}</h1>
      <div className="my-4 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-1">
        <div><BiCalendarEvent /> <DateFormatter dateTime={event.date} /></div>
        <a href={event.locationURL} target="_blank" rel="noreferrer"><div><BiLocationPlus /> {event.location}</div></a>
        <div><BiTimeFive /> <TimeFormatter dateTime={event.date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={event.dateEnd} timeFormat="h:mm aaa" /></div>
      </div>
      <div className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: event.content }} />
    </div>
  </>)
}
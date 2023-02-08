import Image from "next/image";
import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from "react-icons/bi";
import { EventInCMS } from "../types/event-in-cms";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";
import markdownStyle from "/components/Markdown.module.scss";

interface Props {
  event: EventInCMS;
}

export default function EventShowcase({ event }: Props) {
  return (
    <>
      <div className="img-frame h-80 md:rounded-3xl md:px-6 md:pt-6">
        <Image
          src={event.images[0]}
          alt="Event image"
          height={320}
          width={(439 / 214) * 320}
        />
      </div>
      <div className="p-3 md:p-6">
        <p className="text-lg text-red-pr">{event.eventType}</p>
        <h1>{event.title}</h1>
        <div className="my-4 grid grid-rows-3 gap-1 md:grid-cols-2 md:grid-rows-2">
          <div>
            <BiCalendarEvent /> <FormattedDate dateTime={event.date} />
          </div>
          <a href={event.locationURL} target="_blank" rel="noreferrer">
            <div>
              <BiLocationPlus /> {event.location}
            </div>
          </a>
          <div>
            <BiTimeFive />{" "}
            <FormattedTime dateTime={event.date} timeFormat="h:mm aaa" />-
            <FormattedTime dateTime={event.dateEnd} timeFormat="h:mm aaa" />
          </div>
        </div>
        <div
          className={markdownStyle.markdown}
          dangerouslySetInnerHTML={{ __html: event.body || "" }}
        />
      </div>
    </>
  );
}

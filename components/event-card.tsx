import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import sameDay from "../lib/sameDay";
import { EventInCMS } from "../types/event-in-cms";
import FormattedDate from "./formatted-date";
import FormattedTime from "./formatted-time";
import { eventColors } from "../lib/eventColors";

interface Props {
  e: EventInCMS;
  openModal: (e: EventInCMS) => void;
}

export default function EventCard({ e, openModal }: Props) {
  return (
    <div
      id={e.id}
      className={`h-56 rounded-2xl ${eventColors["bg"][e.eventType]}`}
    >
      <div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 border-solid bg-white ${
          eventColors["border"][e.eventType]
        } h-56 transition-all hover:-translate-y-1.5`}
        onClick={() => openModal(e)}
      >
        <div className="img-frame h-32 flex-none opacity-50">
          <Image
            src={e.images[0]}
            alt="Event image"
            height={128}
            width={(439 / 214) * 128}
          />
        </div>
        <div
          className={`flex flex-1 border-t-2 border-solid ${
            eventColors["border"][e.eventType]
          } text-sm`}
        >
          <div className="flex min-w-fit flex-col self-center py-2 px-4 text-center">
            <div>
              <span className="text-lg font-bold">
                <FormattedDate
                  dateTime={e.date}
                  dateFormat="MMM dd"
                  func={(string) => string.toUpperCase()}
                />
              </span>{" "}
              <FormattedDate dateTime={e.date} dateFormat="yyyy" />
            </div>
            {!sameDay(e.date, e.dateEnd) && (
              <>
                <div
                  className={`my-1 h-1 rounded-full ${
                    eventColors["separator"][e.eventType]
                  }`}
                />
                <div>
                  <span className="text-lg font-bold">
                    <FormattedDate
                      dateTime={e.dateEnd}
                      dateFormat="MMM dd"
                      func={(string) => string.toUpperCase()}
                    />
                  </span>{" "}
                  <FormattedDate dateTime={e.dateEnd} dateFormat="yyyy" />
                </div>
              </>
            )}
          </div>
          <div
            className={`flex w-full flex-col justify-center gap-1 border-l-2 border-solid ${
              eventColors["border"][e.eventType]
            } px-5 py-2`}
          >
            <p className="text-xl font-bold">{e.title}</p>
            {sameDay(e.date, e.dateEnd) && (
              <div className="flex items-center gap-2">
                <BiTimeFive size={17.5} />{" "}
                <span>
                  <FormattedTime dateTime={e.date} /> –{" "}
                  <FormattedTime dateTime={e.dateEnd} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

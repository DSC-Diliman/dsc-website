import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import sameDay from "../../lib/same-day";
import { Event } from "../../types/event";
import FormattedDate from "../formatted-date";
import FormattedTime from "../formatted-time";
import { eventColors } from "../../lib/event-colors";
import shorten from "../../lib/shorten";
import { motion } from "framer-motion";

interface Props {
  e: Event;
  openModal: (e: Event) => void;
}

export default function EventCard({ e, openModal }: Props) {
  return (
    <div
      id={e.id}
      className={`h-56 rounded-2xl md:h-64 xl:h-56 ${
        eventColors["bg"][e.eventType]
      }`}
    >
      <motion.div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 border-solid bg-white ${
          eventColors["border"][e.eventType]
        } h-56 transition-all hover:cursor-pointer`}
        whileHover={{ y: -6 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.05 }}
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
              <span className="text-base font-medium xl:text-lg">
                <FormattedDate dateTime={e.date} dateFormat="MMM dd" />
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
                  <span className="text-base font-medium xl:text-lg">
                    <FormattedDate dateTime={e.dateEnd} dateFormat="MMM dd" />
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
            <p className="text-lg font-medium xl:text-xl">{shorten(e.title)}</p>
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
      </motion.div>
    </div>
  );
}

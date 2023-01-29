import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getEvents } from "../lib/posts";
import markdownToHtml from "../lib/markdownToHtml";
import EventsGrid from "../components/events-grid";
import EventFeatured from "../components/event-featured";
import EventShowcase from "../components/event-showcase";
import ButtonClose from "../components/button-close";
import Head from "next/head";
import { EventInCMS, isArrayOfEventsInCMS } from "../types/event-in-cms";
import titleToId from "../lib/titleToId";

Modal.setAppElement("#__next");

interface Props {
  allEventsData: EventInCMS[];
}

export default function Events({ allEventsData }: Props) {
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = useState<EventInCMS | null>(null);

  function closeModal() {
    router.push(router.pathname, undefined, { scroll: false });
  }

  useEffect(() => {
    if (router.query.id) {
      const result = allEventsData.find(
        (event) => titleToId(event.title) == router.query.id
      );
      setSelectedEvent(result === undefined ? null : result);
    } else {
      setSelectedEvent(null);
    }
  }, [router.query.id, allEventsData]);

  return (
    <>
      <Head>
        <title>Events | GDSC UPD</title>
      </Head>
      <Modal
        isOpen={!!selectedEvent}
        onRequestClose={closeModal}
        contentLabel="Event modal"
        className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
        style={{ content: { maxHeight: "calc(100% - 5rem)" } }}
        overlayClassName="fixed bg-black/50 inset-0"
        parentSelector={() => document.querySelector("#__next") as HTMLElement}
      >
        <ButtonClose onClick={closeModal} />
        {selectedEvent ? <EventShowcase event={selectedEvent} /> : null}
      </Modal>
      <h1 className="text-center my-4 pt-12 md:pt-24">Events</h1>
      {allEventsData.length ? (
        <div>
          <section id="featured" className="px-4 md:px-10">
            <EventFeatured event={allEventsData[0]} />
          </section>

          <section id="allEvents" className="my-6 md:my-10 px-4 md:px-10">
            <EventsGrid eventsData={allEventsData} />
          </section>
        </div>
      ) : (
        <p className="flex-1 text-center text-3xl p-10">
          No events at the moment...
        </p>
      )}
    </>
  );
}

export async function getStaticProps() {
  const allEventsData = getEvents();

  if (isArrayOfEventsInCMS(allEventsData)) {
    allEventsData.forEach(async (event, index, events) => {
      events[index].body = await markdownToHtml(event.body || "");
    });
    await Promise.all(allEventsData);
  }

  return {
    props: { allEventsData: JSON.parse(JSON.stringify(allEventsData)) },
  };
}

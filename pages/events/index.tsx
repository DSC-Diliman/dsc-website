import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getEvents } from "../../lib/posts";
import markdownToHtml from "../../lib/markdownToHtml";
import EventsGrid from "../../components/events-grid";
import EventFeatured from "../../components/event-featured";
import EventShowcase from "../../components/event-showcase";
import ButtonClose from "../../components/button-close";
import Head from "next/head";
import { EventInCMS, isArrayOfEventsInCMS } from "../../types/event-in-cms";
import titleToId from "../../lib/titleToId";

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
        className="div-style1 absolute inset-x-4 mx-auto my-4 max-w-3xl overflow-y-auto bg-white md:inset-x-10 md:my-10"
        style={{ content: { maxHeight: "calc(100% - 5rem)" } }}
        overlayClassName="fixed bg-black/50 inset-0"
        parentSelector={() => document.querySelector("#__next") as HTMLElement}
      >
        <ButtonClose onClick={closeModal} />
        {selectedEvent ? <EventShowcase event={selectedEvent} /> : null}
      </Modal>
      {allEventsData.length ? (
        <div>
          <h1 className="mt-12 text-center md:mt-32">Featured</h1>
          <section id="featured" className="md:mt-10">
            <EventFeatured event={allEventsData[0]} />
          </section>
          <h1 className="mt-12 text-center md:mt-28">All Events</h1>
          <section id="all-events" className="md:mt-10">
            <EventsGrid eventsData={allEventsData} />
          </section>
        </div>
      ) : (
        <p className="flex-1 p-10 text-center text-3xl">
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

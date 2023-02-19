import { useState } from "react";
import Modal from "react-modal";
import { getEvents } from "../lib/posts";
import markdownToHtml from "../lib/markdownToHtml";
import EventsGrid from "../components/events-grid";
import EventFeatured from "../components/event-featured";
import EventShowcase from "../components/event-showcase";
import ButtonClose from "../components/button-close";
import Head from "next/head";
import { EventInCMS, isArrayOfEventsInCMS } from "../types/event-in-cms";

Modal.setAppElement("#__next");

interface Props {
  allEventsData: EventInCMS[];
}

export default function Events({ allEventsData }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<EventInCMS | null>(null);

  function openModal(e: EventInCMS) {
    setSelectedEvent(e);
  }

  function closeModal() {
    setSelectedEvent(null);
  }

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
        {selectedEvent && <EventShowcase event={selectedEvent} />}
      </Modal>
      {allEventsData.length > 0 ? (
        <div>
          <h1 id="featured" className="mt-12 text-center md:mt-32">
            Featured
          </h1>
          <section className="md:mt-10">
            <EventFeatured event={allEventsData[0]} openModal={openModal} />
          </section>
          <h1 id="all-events" className="mt-12 text-center md:mt-28">
            All Events
          </h1>
          <section className="md:mt-10">
            <EventsGrid eventsData={allEventsData} openModal={openModal} />
          </section>
        </div>
      ) : (
				<div className="mt-12 md:mt-32">
					<p className="flex-1 p-10 text-center text-3xl">
						No events at the moment...
					</p>
				</div>
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

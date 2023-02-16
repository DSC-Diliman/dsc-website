import { useRouter } from "next/router";
import { useEffect } from "react";
import Modal from "react-modal";
import { getEventById, getEvents } from "../../lib/posts";
import markdownToHtml from "../../lib/markdownToHtml";
import EventShowcase from "../../components/event-showcase";
import ButtonClose from "../../components/button-close";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  EventInCMS,
  isArrayOfEventsInCMS,
  isEventInCMS,
} from "../../types/event-in-cms";
import { ParsedUrlQuery } from "querystring";
import EventsGrid from "../../components/events-grid";
import EventFeatured from "../../components/event-featured";

Modal.setAppElement("#__next");

interface Props {
  event: EventInCMS;
  allEventsData: EventInCMS[];
}

export default function EventPage({ event, allEventsData }: Props) {
  const router = useRouter();

  function closeModal() {
    router.push("/events");
  }

  useEffect(() => {
    router.prefetch("/events");
  });

  return (
    <>
      <Head>
        <title>Events | GDSC UPD</title>
      </Head>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Event modal"
        className="div-style1 absolute inset-x-4 mx-auto my-4 max-w-3xl overflow-y-auto bg-white md:inset-x-10 md:my-10"
        style={{ content: { maxHeight: "calc(100% - 5rem)" } }}
        overlayClassName="fixed bg-black/50 inset-0"
        parentSelector={() => document.querySelector("#__next") as HTMLElement}
      >
        <ButtonClose onClick={closeModal} />
        <EventShowcase event={event} />
      </Modal>
      {allEventsData.length ? (
        <div>
          <h1 id="featured" className="mt-12 text-center md:mt-32">
            Featured
          </h1>
          <section className="md:mt-10">
            <EventFeatured event={allEventsData[0]} />
          </section>
          <h1 id="all-events" className="mt-12 text-center md:mt-28">
            All Events
          </h1>
          <section className="md:mt-10">
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

interface SafeParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as SafeParams;
  const event = getEventById(id);
  const allEventsData = getEvents();

  if (isArrayOfEventsInCMS(allEventsData)) {
    allEventsData.forEach(async (event, index, events) => {
      events[index].body = await markdownToHtml(event.body || "");
    });
    await Promise.all(allEventsData);
  }

  if (isEventInCMS(event)) {
    const body = await markdownToHtml(event.body || "");
    const eventInProps = JSON.parse(JSON.stringify({ ...event, body }));
    return {
      props: {
        allEventsData: JSON.parse(JSON.stringify(allEventsData)),
        event: eventInProps,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = getEvents();
  if (isArrayOfEventsInCMS(allEvents)) {
    return {
      paths: allEvents.map(({ id }) => ({
        params: { id },
      })),
      fallback: false,
    };
  } else {
    return {
      paths: [],
      fallback: false,
    };
  }
};

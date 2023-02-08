import { useRouter } from "next/router";
import { useEffect } from "react";
import Modal from "react-modal";
import { getEventIds, getEventById } from "../../lib/posts";
import markdownToHtml from "../../lib/markdownToHtml";
import EventShowcase from "../../components/event-showcase";
import ButtonClose from "../../components/button-close";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { EventInCMS, isEventInCMS } from "../../types/event-in-cms";
import { ParsedUrlQuery } from "querystring";

Modal.setAppElement("#__next");

interface Props {
  event: EventInCMS;
}

export default function EventPage({ event }: Props) {
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
        <title>Event | GDSC UPD</title>
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
    </>
  );
}

interface SafeParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as SafeParams;
  const event = getEventById(id);

  if (isEventInCMS(event)) {
    const body = await markdownToHtml(event.body || "");
    const eventInProps = JSON.parse(JSON.stringify({ ...event, body }));
    return {
      props: { event: eventInProps },
    };
  } else {
    return {
      props: {},
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getEventIds().map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

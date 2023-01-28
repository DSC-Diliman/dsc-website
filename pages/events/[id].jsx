import { useRouter } from "next/router";
import { useEffect } from "react";
import Modal from "react-modal";
import Layout from "/components/layout-default";
import { getEventIds, getEventById } from "/lib/posts";
import markdownToHtml from "/lib/markdownToHtml";
import EventShowcase from "../../components/event-showcase";
import ButtonClose from "../../components/button-close";

Modal.setAppElement("#__next");

export default function EventPage({ event }) {
  const router = useRouter();

  function closeModal() {
    router.push("/events");
  }

  useEffect(() => {
    router.prefetch("/events");
  });

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Event modal"
      className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
      style={{ content: { maxHeight: "calc(100% - 5rem)" } }}
      overlayClassName="fixed bg-black bg-opacity-50 inset-0"
      parentSelector={() => document.querySelector("#__next")}
    >
      <ButtonClose onClick={closeModal} />
      <EventShowcase event={event} />
    </Modal>
  );
}

EventPage.getLayout = (page) => <Layout title="Event">{page}</Layout>;

export async function getStaticProps({ params: { id } }) {
  const event = getEventById(id);
  const content = await markdownToHtml(event.content || "");

  return {
    props: { event: { ...event, content } },
  };
}

export async function getStaticPaths() {
  return {
    paths: getEventIds().map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}

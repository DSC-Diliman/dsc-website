import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Modal from "react-modal"
import { IoClose } from "react-icons/io5"
import { getEvents } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import Layout from "/components/layout-default"
import EventsGrid from "/components/events-grid"
import EventFeatured from "/components/event-featured"
import EventShowcase from "/components/event-showcase"
import ButtonClose from "../components/button-close"

Modal.setAppElement("#__next")

export default function Events({ allEventsData }) {
  const router = useRouter()
  const [selectedEvent, setSelectedEvent] = useState(null)

  function closeModal() {
    router.push(router.pathname, undefined, { scroll: false })
  }

  useEffect(() => {
    if (router.query.id) {
      setSelectedEvent(allEventsData.find(
        event => event.id == router.query.id
      ))
    } else {
      setSelectedEvent(null)
    }
  }, [router.query.id])

  return (<>
    <Modal
      isOpen={!!selectedEvent}
      onRequestClose={closeModal}
      contentLabel="Event modal"
      className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
      style={{ content: { maxHeight: 'calc(100% - 5rem)' } }}
      overlayClassName="fixed bg-black bg-opacity-50 inset-0"
      parentSelector={() => document.querySelector("#__next")}
    >
      <ButtonClose onClick={closeModal} />
      {selectedEvent ? <EventShowcase event={selectedEvent} /> : null}
    </Modal>
    <h1 className="text-center my-4 pt-12 md:pt-24">Events</h1>
    {allEventsData.length ?
      <div>
        <section id="featured" className="px-4 md:px-10">
          <EventFeatured event={allEventsData[0]} />
        </section>

        <section id="allEvents" className="my-6 md:my-10 px-4 md:px-10">
          <EventsGrid eventsData={allEventsData} />
        </section>
      </div>
      : <p className="flex-1 text-center text-3xl p-10">No events at the moment...</p>}
  </>)
}

Events.getLayout = page => (
  <Layout title="Events">
    {page}
  </Layout>
)

export async function getStaticProps() {
  const allEventsData = getEvents()
  allEventsData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allEventsData)

  return {
    props: { allEventsData }
  }
}

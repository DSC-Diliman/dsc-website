import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Modal from "react-modal"

import { getEvents } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import Layout from "/components/layout-default"
import EventsGrid from "/components/events-grid"
import EventFeatured from "/components/event-featured"
import EventShowcase from "/components/event-showcase"

Modal.setAppElement("#__next")

export default function Events({ allEventsData }) {
  const router = useRouter()
  const [selectedEvent, setSelectedEvent] = useState(null)

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
      onRequestClose={() => router.push(router.pathname, undefined, { scroll: false })}
      contentLabel="Event modal"
      className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
      style={{ content: { maxHeight: 'calc(100% - 5rem)' } }}
      overlayClassName="fixed bg-black bg-opacity-50 inset-0"
    >
      {selectedEvent ? <EventShowcase event={selectedEvent} /> : null}
    </Modal>
    <h1 className="text-center my-4 pt-24">Events</h1>
    {allEventsData ?
      <div>
        <section id="featured" className="pb-14 px-10">
          <EventFeatured event={allEventsData[0]} />
        </section>

        <section id="allEvents" className="p-10">
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

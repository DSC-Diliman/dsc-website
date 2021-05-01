import { useRouter } from "next/router"
import { useEffect } from "react"
import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from 'react-icons/bi'
import Layout from "/components/layout-default"
import DateFormatter from "/components/dateformatter"
import TimeFormatter from "/components/timeformatter"
import { getEventIds, getEvents } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import markdownStyle from "/components/Markdown.module.scss"
import EventsGrid from "/components/events-grid"
import EventShowcase from "../../components/event-showcase"

export default function EventPage({ allEventsData, selectedEvent }) {
  const router = useRouter()

  useEffect(() => {
    router.prefetch("/events")
  }, [])

  return (<>
    <h1 className="text-center my-4 pt-24">Events</h1>
    {allEventsData ?
      <div>
        <section className="pb-2 px-10">
          <div className="mx-auto my-4 max-w-3xl bg-white div-style1">
            <EventShowcase event={selectedEvent} />
          </div>
        </section>

        <section id="allEvents" className="py-2 px-10">
          <EventsGrid eventsData={allEventsData} />
        </section>
      </div>
      : <p className="flex-1 text-center text-3xl p-10">No events at the moment...</p>}
  </>)
}

EventPage.getLayout = page => (
  <Layout title="Event">
    {page}
  </Layout>
)

export async function getStaticProps({ params: { id } }) {
  const allEventsData = getEvents()
  allEventsData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allEventsData)

  const selectedEvent = allEventsData.find(event => event.id == id)

  return {
    props: { allEventsData, selectedEvent }
  }
}


export async function getStaticPaths() {
  return {
    paths: getEventIds().map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}
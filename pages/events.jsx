import { getEvents } from '../lib/posts'
import Layout from '../components/layout-default'
import EventsGrid from '../components/events-grid'
import EventFeatured from '../components/event-featured'

export default function Events({ allEventsData }) {
  return (<>
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
  return {
    props: {
      allEventsData: getEvents([
        "title",
        "date",
        "dateEnd",
        "eventType",
        "location",
        "locationURL",
        "images",
        "summary"
      ])
    }
  }
}
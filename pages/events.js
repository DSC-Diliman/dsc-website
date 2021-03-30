import DateFormatter from '../components/dateformatter'
import Layout from '../components/layout-default'
import { getEvents } from '../lib/posts'
import getEventColor from '../lib/eventColor'
import TimeFormatter from '../components/timeformatter'
import { BiTimeFive, BiLocationPlus } from 'react-icons/bi'

export default function Events({ allEventsData }) {
  return (
    <>
      <section id="featured" className="pt-24 pb-14">
        <h1 className="text-center my-4">
          Events
        </h1>
      </section>

      <section id="allEvents" className="p-10">
        <h2 className="text-center my-2 text-lg font-medium">All Events</h2>
        <div className="flex flex-wrap place-content-center my-4 space-x-8">
          <div className="flex items-center">
            <div className="bg-red-500 w-4 h-4 rounded-full" />
            <p className="ml-4">Speaker Sessions</p>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 w-4 h-4 rounded-full" />
            <p className="ml-4">Study Jams</p>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 w-4 h-4 rounded-full" />
            <p className="ml-4">Workshops</p>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-500 w-4 h-4 rounded-full" />
            <p className="ml-4">Tech Solutions</p>
          </div>
        </div>
        <div className="grid auto-grid-base gap-x-8 gap-y-12 auto-rows-fr max-w-6xl mx-auto">
          {allEventsData ? allEventsData.map((e, index) =>
            <div className="shadow-2xl rounded-2xl bg-white overflow-hidden" key={index}>
              <div className="img-frame h-32">
                <img src={e.images[0]} />
              </div>
              <div className="flex p-5 text-sm">
                <div className="text-center self-center">
                  <DateFormatter dateTime={e.date} dateFormat="MMM" func={string => string.toUpperCase()} /><br />
                  <span className="font-bold text-3xl"><DateFormatter dateTime={e.date} dateFormat="dd" /></span><br />
                  <DateFormatter dateTime={e.date} dateFormat="yyyy" />
                </div>
                <div className={"w-1 mx-3 rounded-full " + getEventColor(e.eventType)} />
                <div className="w-full">
                  <p className="text-xl font-bold">
                    {e.title}
                  </p>
                  <div className="flex w-full">
                    <p>
                      <BiTimeFive /> <TimeFormatter dateTime={e.date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={e.dateEnd} timeFormat="h:mm aaa" />
                    </p>
                    <a className="ml-auto" href={e.locationURL} target="_blank"><BiLocationPlus /> {e.location}</a>
                  </div>
                  <p>
                    {e.summary}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}

Events.getLayout = page => (
  <Layout title="Events">
    {page}
  </Layout>
)

export async function getStaticProps() {
  return {
    props: {
      allEventsData: getEvents()
    }
  }
}
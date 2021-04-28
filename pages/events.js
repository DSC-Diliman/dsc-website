import Image from 'next/image'
import DateFormatter from '../components/dateformatter'
import Layout from '../components/layout-default'
import { getEvents } from '../lib/posts'
import getEventColor from '../lib/eventColor'
import TimeFormatter from '../components/timeformatter'
import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from 'react-icons/bi'

export default function Events({ allEventsData }) {
  return (
    <>
      <section id="featured" className="pt-24 pb-14 px-10">
        <h1 className="text-center my-4">
          Events
        </h1>
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto div-style1">
          <div className="flex flex-col my-10 ml-12 mr-4 md:flex-shrink-0 max-w-sm">
            <div>
              <p className="text-lg text-red-pr mb-4">FEATURED</p>
              <p className="font-medium text-4xl mb-4">{allEventsData[0].title}</p>
              <div className="mb-6 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-1">
                <div><BiCalendarEvent /> <DateFormatter dateTime={allEventsData[0].date} /></div>
                <a href={allEventsData[0].locationURL} target="_blank"><div><BiLocationPlus /> {allEventsData[0].location}</div></a>
                <div><BiTimeFive /> <TimeFormatter dateTime={allEventsData[0].date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={allEventsData[0].dateEnd} timeFormat="h:mm aaa" /></div>
              </div>
              <p className="mb-8">{allEventsData[0].summary}</p>
              <button className="btn-style2-red">Learn More</button>
            </div>
          </div>
          <div className="relative flex-1 m-5 rounded-3xl">
            <Image
              src={allEventsData[0].images[0]}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </section>

      <section id="allEvents" className="p-10">
        <h2 className="text-center mb-6 text-2xl font-medium">All Events</h2>
        <div className="flex flex-wrap place-content-center mb-10 space-x-8">
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
            <div className="flex flex-col shadow-2xl rounded-2xl bg-white overflow-hidden" key={index}>
              <div className="relative h-32">
                <Image
                  src={e.images[0]}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className="flex p-5 text-sm flex-grow">
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
                  <p className="mt-2">
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
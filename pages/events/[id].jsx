import { useRouter } from "next/router"
import { useEffect } from "react"
import { BiTimeFive, BiLocationPlus, BiCalendarEvent } from 'react-icons/bi'
import Modal from "react-modal"
import Layout from "/components/layout-default"
import DateFormatter from "/components/dateformatter"
import TimeFormatter from "/components/timeformatter"
import { getEventById, getEventIds } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import markdownStyle from "/components/Markdown.module.scss"

Modal.setAppElement("#__next")

export default function EventPage({ event }) {
  const router = useRouter()

  useEffect(() => {
    router.prefetch("/events")
  })

  return (<>
    <Modal
      isOpen={true}
      onRequestClose={() => router.back()}
      contentLabel="Event modal"
      className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
      style={{ content: { maxHeight: 'calc(100% - 5rem)' } }}
      overlayClassName="fixed bg-black bg-opacity-50 inset-0"
    >
      <div className="md:mx-6 md:mt-6 img-frame h-80 md:rounded-3xl"><img src={event.images[0]} /></div>
      <div className="m-3 md:m-6">
        <p className="text-red-pr text-lg">{event.eventType}</p>
        <h1>{event.title}</h1>
        <div className="my-4 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-1">
          <div><BiCalendarEvent /> <DateFormatter dateTime={event.date} /></div>
          <a href={event.locationURL} target="_blank"><div><BiLocationPlus /> {event.location}</div></a>
          <div><BiTimeFive /> <TimeFormatter dateTime={event.date} timeFormat="h:mm aaa" />-<TimeFormatter dateTime={event.dateEnd} timeFormat="h:mm aaa" /></div>
        </div>
        <div className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: event.content }} />
      </div>
    </Modal>
  </>)
}

EventPage.getLayout = page => (
  <Layout title="Event">
    {page}
  </Layout>
)

export async function getStaticProps({ params: { id } }) {
  const event = getEventById(id)
  const content = await markdownToHtml(event.content || '')

  return {
    props: { event: { ...event, content } }
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
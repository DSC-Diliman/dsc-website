import Layout from '../components/layout-default'
import { getSortedPosts } from '../lib/posts'

export default function Events({ allEventsData }) {
  return (
    <>
      <h1>
        Events
      </h1>
      <ul>
        {allEventsData.map((eventData, index) => (
          <li key={index}>
            {eventData.title}
            <br />
            {eventData.date}
            <br />
            {eventData.summary}
          </li>
        ))}
      </ul>
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
      allEventsData: getSortedPosts("events", [
        "title",
        "date",
        "summary"
      ])
    }
  }
}
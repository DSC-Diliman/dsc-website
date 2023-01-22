import Link from "next/link"
import Layout from "../components/layout-default"
import { getEvents } from "../lib/posts"
import EventListView from "../components/eventlistview"
import Landing from "../components/landing"
import WhatDoWeDo from "../components/what-do-we-do"

export default function Home({ eventsArray }) {
  return (
    <>
			<Landing />
			<WhatDoWeDo />

      <section className="
				py-4 pt-10 pb-14
				md:px-10 md:py-20
			">
        <div className="
					mx-auto flex flex-col items-center
					md:max-w-2xl
				">
          <h1 className="mb-4 text-center">Upcoming Events</h1>
          <div className="div-style1 w-full overflow-hidden mt-10 mb-20">
            <EventListView
              className="px-2 sm:px-8 max-h-80"
              eventsArray={eventsArray}
            />
          </div>
          <Link href="/events">
            <button className="btn-style2-red">Check out our events!</button>
          </Link>
        </div>
      </section>
    </>
  )
}

Home.getLayout = page => (
  <Layout
    footerChildren={<p className="text-xs italic">Oblation photo by Mila D. Aguilar.</p>}
  >
    {page}
  </Layout>
)

export async function getStaticProps() {
  return {
    props: {
      eventsArray: getEvents([
        "title",
        "date",
        "dateEnd",
        "eventType",
        "location",
				"locationURL",
      ])
    }
  }
}
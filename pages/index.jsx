import Link from "next/link"
import Layout from "../components/layout-default"
import { getEvents } from "../lib/posts"
import EventListView from "../components/eventlistview"
import Landing from "../components/landing"
import { GiMicrophone, GiMagnifyingGlass } from "react-icons/gi"
import { BsWrench } from "react-icons/bs"
import { ImLab } from "react-icons/im"
import OffsetGrid from "../components/offset-grid"

export default function Home({ eventsArray }) {
	const offsetGridContents =
		[
			{
				heading: "Speaker Sessions",
				text: "Hear from esteemed speakers as they share their insights, experience, and wisdom.",
				icon: <GiMicrophone />,
			},
			{
				heading: "Internal",
				text: "Get a glimpse of how our organization operates!",
				icon: <GiMagnifyingGlass />,
			},
			{
				heading: "Workshops",
				text: "Get a chance to learn new skills through hands-on workshops and study jams.",
				icon: <BsWrench />,
			},
			{
				heading: "Tech Solutions",
				text: "Use the skills you learn in our events to solve community problems through projects!",
				icon: <ImLab />,
			},
		]

  return (
    <>
			<Landing />

      <section className="
				px-4 pt-12 pb-6 bg-gray-200 flex flex-col items-center justify-center
				sm:pb-16
				md:px-10 md:shadow-above
			">
        <h1 className="text-center mb-4">What do we do in GDSC UP Diliman?</h1>
        <OffsetGrid elements={offsetGridContents} />
        <Link href="/team">
          <button className="btn-style2-red">Check out our teams!</button>
        </Link>
      </section>

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
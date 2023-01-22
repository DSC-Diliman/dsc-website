import Link from "next/link"
import Head from 'next/head'
import AnimatedEm from "../components/animated-em"
import Layout from "../components/layout-default"
import { getEvents } from "../lib/posts"
import EventListView from "../components/eventlistview"
import Landing from "../components/landing"
import { GiMicrophone, GiMagnifyingGlass } from "react-icons/gi"
import { BsWrench } from "react-icons/bs"
import { ImLab } from "react-icons/im"
import { IconContext } from "react-icons"

export default function Home({ eventsArray }) {
  function* getNextPrimaryColor() {
    const color_names = ["red", "blue", "green", "yellow"]
    let index = 0
    while (true) {
      yield color_names[index]
      index = (index + 1) % color_names.length
    }
  }

  function renderOffsetGrid(elements) {
    const color_gen = getNextPrimaryColor()
    return (
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-8 md:gap-16 mt-6 mb-40">
        {elements.map(({ heading, text, icon }, index) => {
					const color = color_gen.next().value
					return (
						<div key={index} className="relative w-64 div-style1 overflow-hidden md:w-80 sm:even:top-1/2 p-4 md:p-11">
							<div className="mb-1 sm:mb-4 font-semibold text-lg sm:text-xl flex gap-5 items-center">
								<AnimatedEm emClassName={`right-4 bottom-0 bg-${color}-300`} >{heading}</AnimatedEm>
							</div>
							<p className="text-sm sm:text-base">{text}</p>
							<IconContext.Provider value={
								{
									size: 150,
									color: color,
									className: `absolute bottom-5 -right-5 z-0 opacity-${color === "yellow" ? 30 : 10}`,
								}
							}>
								{icon}
							</IconContext.Provider>
						</div>
          )
				})}
      </div>
    )
  }

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
			<Landing />

      <section className="px-4 md:px-10 pt-12 pb-6 sm:pb-16 bg-gray-200 flex flex-col items-center justify-center md:shadow-above">
        <h1 className="text-center mb-4">What do we do in GDSC UP Diliman?</h1>
        {renderOffsetGrid([
          { heading: "Speaker Sessions", text: "Hear from esteemed speakers as they share their insights, experience, and wisdom.", icon: <GiMicrophone /> },
          { heading: "Internal", text: "Get a glimpse of how our organization operates!", icon: <GiMagnifyingGlass /> },
          { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams.", icon: <BsWrench />  },
          { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects!", icon: <ImLab /> }
        ])}
        <Link href="/team">
          <button className="btn-style2-red">Check out our teams!</button>
        </Link>
      </section>

      <section className="p-4 md:px-10 pt-10 pb-14 md:py-20">
        <div className="mx-auto md:max-w-2xl flex flex-col items-center">
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
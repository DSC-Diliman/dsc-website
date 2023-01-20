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
export default function Home({ eventsArray }) {
  function* getNextPrimaryColor() {
    const color_names = ["bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300"]
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
        {elements.map(({ heading, text, icon }, index) => (
          <div key={index} className="relative w-64 div-style1 md:w-80 sm:even:top-1/2 p-4 md:p-11">
            <div className="mb-1 sm:mb-4 font-semibold text-lg sm:text-xl flex gap-5 items-center">
              <AnimatedEm emClassName={`right-4 bottom-0 ${color_gen.next().value}`} >{heading}</AnimatedEm>
							{icon}
            </div>
            <p className="text-sm sm:text-base">{text}</p>
          </div>
        ))}
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
          { heading: "Speaker Sessions", text: "Hear from esteemed speakers as they share their insights, experience, and wisdom.", icon: <GiMicrophone size={30} /> },
          { heading: "Internal", text: "Get a glimpse of how our organization operates!", icon: <GiMagnifyingGlass size={30} /> },
          { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams.", icon: <BsWrench size={30} />  },
          { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects!", icon: <ImLab size={30} /> }
        ])}
        <Link href="/team">
          <button className="btn-style2-red">Check out our teams!</button>
        </Link>
      </section>

      <section className="p-4 md:px-10 pt-10 pb-14 md:py-20">
        <div className="mx-auto w-full md:max-w-2xl">
          <h1 className="mb-4">Upcoming Events</h1>
          <Link href="/events">
            <button className="btn-style2-red mb-6">Check out our events!</button>
          </Link>
          <div className="div-style1 overflow-hidden">
            <EventListView
              className="px-2 sm:px-8 max-h-80"
              eventsArray={eventsArray}
            />
          </div>
        </div>
        {/* <EventViewer eventsArray={eventsArray} /> */}
      </section>

      {/*
      <section className="pt-12 bg-gray-200 w-full">
        <h1 className="text-center mb-4">Other GDSC Chapters</h1>
        <div className="max-w-min mx-auto py-6 md:py-10 flex overflow-x-auto flex-nowrap space-x-10 md:space-x-24">
          <div />
          {[
            { school: "Ateneo de Manila University Loyola", location: "Manila" },
            { school: "Ateneo de Manila University Loyola", location: "Manila" },
            { school: "Ateneo de Manila University Loyola", location: "Manila" },
            { school: "Ateneo de Manila University Loyola", location: "Manila" },
            { school: "Ateneo de Manila University Loyola", location: "Manila" },
            { school: "Ateneo de Manila University Loyola", location: "Manila" },
          ].map(({ school, location, imgsrc }, index) => (
            <div key={index} className="max-w-min text-center flex-grow-0">
              <div className="rounded-full bg-white shadow-md w-28 h-28 md:w-36 md:h-36 mb-4">
                <img
                  className="object-cover"
                  src={imgsrc ? imgsrc : ""}
                />
              </div>
              <p className="font-medium">{school}</p>
              <p className="text-sm">{location}</p>
            </div>
          ))}
          <div>&nbsp;</div>
        </div>
      </section>
      */}
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
        "location"
      ])
    }
  }
}
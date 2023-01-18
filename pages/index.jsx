import Link from "next/link"
import Head from 'next/head'
import Em from "../components/em"
import AnimatedEm from "../components/animated-em"
import Layout from "../components/layout-default"
import { getEvents } from "../lib/posts"
import indexHeroStyle from "/components/IndexHero.module.scss"
import EventListView from "../components/eventlistview"

export default function Home({ eventsArray }) {
  function* getNextPrimaryColor() {
    let color_names = ["bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300"]
    let index = 0
    while (true) {
      yield color_names[index++]
      index = index < color_names.length ? index : 0
    }
  }

  function renderOffsetGrid(elements) {
    const color_gen = getNextPrimaryColor()
    return (
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-8 md:gap-16 mb-8">
        {elements.map(({ heading, text }, index) => (
          <div key={index} className="relative w-64 div-style1 md:w-80 sm:even:top-1/2 p-4 md:p-11">
            <h1 className="mb-1 sm:mb-4 font-semibold text-lg sm:text-xl">
              <AnimatedEm emClassName={`right-4 bottom-0 ${color_gen.next().value}`} >{heading}</AnimatedEm>
            </h1>
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
      <section className="relative flex flex-row items-center min-h-screen pt-10 sm:pt-0">
        <div className={indexHeroStyle["mobile-hero"]}/>
        <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-60 sm:backdrop-filter-none sm:bg-transparent p-8 md:pl-20 md:pr-10 md:pt-24 md:pb-10 w-full sm:w-1/2">
          <div className="max-w-xl mx-auto">
            <h1 className="mb-2 md:mb-10 text-2xl md:text-5xl">
              <Em emClassName="bg-red-300 right-4 bottom-2">Grow. Learn. Connect.</Em>
            </h1>

            <p className="mb-4 md:mb-10">The <b>GDSC UP Diliman Chapter</b> is part of a global community of over 1500 universities.</p>

            <Link href="/about">
              <button className="btn-style2-red">Learn More</button>
            </Link>
          </div>
        </div>
        <div className={`hidden sm:block ${indexHeroStyle.hero}`}>
          <div>
            <div />
          </div>
          <div />
        </div>
      </section>

      <section className="px-4 md:px-10 pt-12 pb-6 sm:pb-32 bg-gray-200 flex flex-col items-center justify-center md:shadow-above">
        <h1 className="text-center mb-4">What do we do in GDSC UP Diliman?</h1>

        <Link href="/team">
          <button className="btn-style2-red mb-10">Check out our teams!</button>
        </Link>

        {renderOffsetGrid([
          { heading: "Speaker Sessions", text: "Hear from esteemed speakers as they share their insights, experience, and wisdom" },
          { heading: "Internal", text: "Get a glimpse of how our organization operates" },
          { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams" },
          { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects" }
        ])}
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
import Link from "next/link"
import Head from 'next/head'
import { RiCopyrightLine } from "react-icons/ri"
import Em from "../components/em"
import AnimatedEm from "../components/animated-em"
import EventViewer from "../components/eventviewer"
import Layout from "../components/layout-default"
import { getEvents } from "../lib/posts"
import indexHeroStyle from "/components/IndexHero.module.scss"

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
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-16 mb-8">
        {elements.map(({ heading, text }, index) => (
          <div key={index} className="relative w-64 div-style1 md:w-80 md:even:top-1/2 p-4 md:p-11">
            <h1 className="mb-1 md:mb-4 font-semibold text-lg md:text-xl">
              <AnimatedEm emClassName={`right-4 bottom-0 ${color_gen.next().value}`} >{heading}</AnimatedEm>
            </h1>
            <p className="text-sm md:text-base">{text}</p>
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
      <section className="flex flex-col md:flex-row items-center min-h-screen">
        <div className="px-10 pt-24 w-1/2">
          <div className="max-w-xl space-y-10 mx-auto p-10">
            <h1 className="text-3xl md:text-5xl">
              <Em emClassName="bg-red-300 right-4 bottom-2">Lorem ipsum</Em> dolor sit amet, consectetur
            </h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem <Em emClassName="bg-green-300 left-4 -bottom-0.5">ipsum dolor sit amet, consectetur</Em> adipiscing elit</p>

            <Link href="/about">
              <button className="btn-style2-red">Learn More</button>
            </Link>
          </div>
        </div>
        <div className={indexHeroStyle.hero}>
          <div>
            <div />
          </div>
          <div />
        </div>
      </section>

      <section className="px-10 pt-12 pb-6 md:pb-32 bg-gray-200 flex flex-col items-center justify-center shadow-above">
        <h1 className="text-center mb-4">What do we do in DSC UP Diliman?</h1>

        <Link href="/team">
          <button className="btn-style2-red mb-10">Check out our teams!</button>
        </Link>

        {renderOffsetGrid([
          { heading: "Speaker Sessions", text: "Listen from esteemed speakers as they share their insights, experience and wisdom" },
          { heading: "Study Jams", text: "Learning never stops! Watch events online by Developer Student Clubs and by Google" },
          { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams" },
          { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects" }
        ])}
      </section>

      <section className="px-10 py-20">
        <EventViewer eventsArray={eventsArray} />
      </section>

      <section className="bg-gray-200 w-full">
        <div className="max-w-min mx-auto py-10 flex overflow-x-auto flex-nowrap space-x-24">
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
              <div className="rounded-full bg-white shadow-md w-36 h-36 mb-4">
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
    </>
  )
}

Home.getLayout = page => (
  <Layout
    footerChildren={<p><RiCopyrightLine /> Oblation photo by Mila D. Aguilar</p>}
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
import Link from "next/link"
import EventViewer from "../components/eventviewer"
import Layout from "../components/layout-default"
import { getEvents } from "../lib/posts"

export default function Home({ eventsArray }) {
  function* getNextEmPrimaryColor() {
    let color_names = ["em-red", "em-blue", "em-green", "em-yellow"]
    let index = 0
    while (true) {
      yield color_names[index++]
      index = index < color_names.length ? index : 0
    }
  }

  function renderOffsetGrid(elements) {
    const color_gen = getNextEmPrimaryColor()
    return (
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-16 mb-8">
        {elements.map(({ heading, text }, index) => (
          <div key={index} className="relative w-64 div-style1 md:w-md md:even:top-1/2 p-4 md:p-11">
            <h1 className="mb-1 md:mb-4 font-semibold text-lg md:text-xl">
              <span className={"em em-left em-text-md " + color_gen.next().value}>
                {heading}
              </span>
            </h1>
            <p className="text-sm md:text-base">{text}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen px-10 grid grid-cols-1 md:grid-cols-2 content-center">
        <div className="justify-self-center md:justify-self-end max-w-lg space-y-10">
          <h1 className="text-3xl md:text-5xl">
            <span className="em em-red em-left em-text-lg">Lorem ipsum</span> dolor sit amet, consectetur
          </h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem <span className="em em-green em-right em-text-base">ipsum dolor sit amet, consectetur</span> adipiscing elit</p>

          <Link href="/about">
            <button className="btn-style2-red">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="min-h-screen px-10 flex flex-col items-center justify-center">
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
      </div>

      <div className="min-h-screen px-10 flex justify-center items-center">
        <EventViewer eventsArray={eventsArray} />
      </div>

      <div className="self-center max-w-full py-4 my-12 flex overflow-x-auto flex-nowrap space-x-24">
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
    </>
  )
}

Home.getLayout = page => (
  <Layout>
    {page}
  </Layout>
)

export async function getStaticProps() {
  return {
    props: {
      eventsArray: getEvents([
        "title",
        "dateStartISO",
        "dateEndISO",
        "eventType",
        "location"
      ])
    }
  }
}
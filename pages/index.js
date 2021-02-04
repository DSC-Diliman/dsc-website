import Link from "next/link"
import EventViewer from "../components/eventviewer"
import Layout from "../components/layout"
import { getSortedPosts } from "../lib/posts"

export default function Home({ eventData }) {
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
        {elements.map(({ heading, text }) => (
          <div key={heading} className="relative w-64 div-style1 md:w-md md:even:top-1/2 p-4 md:p-11">
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
    <Layout>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 content-center">
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

      <div className="min-h-screen flex flex-col items-center justify-center space-y-10">
        <h1 className="text-center">What do we do in DSC UP Diliman?</h1>

        <Link href="/team">
          <button className="btn-style2-red">Check out our teams!</button>
        </Link>

        {renderOffsetGrid([
          { heading: "Speaker Sessions", text: "Listen from esteemed speakers as they share their insights, experience and wisdom" },
          { heading: "Study Jams", text: "Learning never stops! Watch events online by Developer Student Clubs and by Google" },
          { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams" },
          { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects" }
        ])}
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <EventViewer eventData={null} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      eventData: getSortedPosts('events')
    }
  }
}
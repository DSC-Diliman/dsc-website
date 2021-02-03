import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="test">
        <Image
          src="/images/dsc-logo.png"
          width={439}
          height={214}
        />
      </div>

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 content-center">
        <div className="justify-self-end max-w-lg">
          <h1 className="text-3xl md:text-5xl">
            Lorem ipsum dolor sit amet, consectetur
          </h1>

          <p className="my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <button className="btn-style2-red">Learn More</button>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="mb-8 text-center">What do we do in DSC UP Diliman?</h1>

        <button className="btn-style2-red mb-8">Check out our teams!</button>

        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-16 mb-8">
          {[
            { heading: "Speaker Sessions", text: "Listen from esteemed speakers as they share their insights, experience and wisdom" },
            { heading: "Study Jams", text: "Learning never stops! Watch events online by Developer Student Clubs and by Google" },
            { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams" },
            { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects" }
          ].map(({ heading, text }) => (
            <div key={heading} className="relative w-64 div-style1 md:w-88 md:even:top-1/2 p-4 md:p-11">
              <h1 className="mb-1 md:mb-4 font-semibold text-lg md:text-xl">{heading}</h1>
              <p className="text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen flex flex-row justify-center items-center">
        <div className="div-style1 p-4">
          calendar here
        </div>
        <div>
          <h1>Upcoming Events</h1>
          <button className="btn-style2-red">Check out our events!</button>
          <div className="div-style1 p-4">
            events here
          </div>
        </div>
      </div>
    </Layout>
  )
}

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

      <div className="h-screen grid grid-cols-1 md:grid-cols-2 content-center">
        <div className="justify-self-end max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>

          <p className="my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <button className="btn-style1-red py-1.5 px-10 text-red border-2 border-red rounded-full">Learn More</button>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">What do we do in DSC UP Diliman?</h1>

        <button className="btn-style1-red py-2 px-10 text-red border-2 border-red rounded-full mb-4 md:mb-8">Check out our teams!</button>

        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-16 mb-8">
          {[
            { heading: "Speaker Sessions", text: "Listen from esteemed speakers as they share their insights, experience and wisdom" },
            { heading: "Study Jams", text: "Learning never stops! Watch events online by Developer Student Clubs and by Google" },
            { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams" },
            { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects" }
          ].map(({ heading, text }, index) => (
            <div className="w-64 md:w-88 rounded-2xl md:rounded-4xl shadow-3xl bg-white p-4 md:p-11">
              <h1 className="mb-1 md:mb-4 font-semibold text-lg md:text-xl">{heading}</h1>
              <p className="text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

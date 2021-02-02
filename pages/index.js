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
        <h1 className="text-3xl font-semibold m-7">What do we do in DSC UP Diliman?</h1>

        <button className="btn-style1-red py-2 px-10 text-red border-2 border-red rounded-full mb-8">Check out our teams!</button>

        <div className="grid grid-cols-2 grid-rows-2 gap-16 mb-8">
          {[
            { heading: "Speaker Sessions", text: "Listen from esteemed speakers as they share their insights, experience and wisdom" },
            { heading: "Study Jams", text: "Learning never stops! Watch events online by Developer Student Clubs and by Google" },
            { heading: "Workshops", text: "Get a chance to learn new skills through hands-on workshops and study jams" },
            { heading: "Tech Solutions", text: "Use the skills you learn in our events to solve community problems through projects" }
          ].map(({ heading, text }) => (
            <div className="relative w-88 rounded-4xl shadow-3xl bg-white p-11">
              <h1 className="mb-4 font-semibold text-xl">{heading}</h1>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

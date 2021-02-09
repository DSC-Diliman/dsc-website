import Link from "next/link"
import Layout from "../components/layout-default"

export default function About() {
  return (
    <>
      <section className="flex flex-col min-h-screen px-10 py-24 text-center justify-center">
        <h1 className="mb-4 text-4xl">What is DSC-UPD?</h1>
        <p className="mb-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="img-frame mb-12 mx-auto max-w-7xl h-96 shadow-2xl rounded-4xl">
          <img
            src="/images/oops.png"
          />
        </div>
        <p className="max-w-3xl text-sm mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section id="vision">
      </section>

      <section id="mission" className="px-10 py-10 text-center">
        <h1>MISSION</h1>
        <p>We, as an organization, aim to</p>
        <div className="flex justify-center">
          {[
            {
              title: "Empower",
              desc: "Empower people through technology and programming education",
              image: ""
            },
            {
              title: "Enlighten",
              desc: "Equip members with the right tools to address local issues through data",
              image: ""
            },
            {
              title: "Create",
              desc: "Create meaningful technological solutions for the community",
              image: ""
            },
          ].map(e =>
            <div key={e.title} className="px-4 py-4 max-w-sm">
              <img src={e.image} />
              <p className="text-2xl font-medium">{e.title}</p>
              <p>{e.desc}</p>
            </div>)}
        </div>
      </section>

      <section id="reach" className="px-10 py-10 bg-gray-200">
        <div className="mx-auto max-w-max grid grid-cols-4 grid-rows-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1>Reach Us</h1>
            <p className="text-sm">in our socials!</p>
          </div>
          <div />
          {[
            { name: "Facebook", icon: "/images/facebook-icon.svg" },
            { name: "Youtube", icon: "/images/youtube-icon.svg" },
            {},
            { name: "Gmail", icon: "/images/gmail-icon.svg" },
            { name: "LinkedIn", icon: "/images/linkedin-icon.svg" },
          ].map((e, index) =>
            <a key={index}>
              <div className={`px-10 py-7 text-center transition-shadow hover:shadow-none cursor-pointer ${e.name ? "div-style1" : null}`}>
                <img
                  src={e.icon}
                  className="w-8 mx-auto mb-3"
                />
                <p className="text-sm">{e.name}</p>
              </div>
            </a>
          )}
        </div>
      </section>
    </>
  )
}

About.getLayout = page => (
  <Layout title="About">
    {page}
  </Layout>
)
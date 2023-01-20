import Image from 'next/image'
import Layout from "../components/layout-default"
import ParallaxImage from "../components/parallax-image"
import Socials from '../components/socials'
import Vision from '../components/vision'

export default function About() {
  return (
    <>
      <section className="flex flex-col min-h-screen px-4 md:px-10 py-12 md:py-24 text-center justify-center">
        <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl">What is GDSC-UPD?</h1>
        <ParallaxImage src="images/about-hero.png" className="max-w-5xl w-full mx-auto h-52 sm:h-64 md:h-96 my-4 md:my-8 bg-cover"/>
        <p className="max-w-3xl text-base mx-auto">
          Ever since its fruition in India, the Developer Student Clubs has grown globally and 
          currently has over 1500 chapters spread across over 150 countries, with the Philippines 
          having 41 of those chapters. In other words, the GDSC UP Diliman Chapter is part of a <b>global community</b>.
        </p>
      </section>
			<Vision />
      <section id="mission" className="p-4 md:p-10 text-center">
        <h1 className="text-lg text-red-700 font-black">MISSION</h1>
        <p className="mb-6">We, as an organization, aim to</p>
        <div className="flex justify-center">
          {[
            {
              title: "Empower",
              desc: "people through technology and programming education",
              image: "/images/dot_empower.png"
            },
            {
              title: "Enlighten",
              desc: "members with the right tools to address local issues through data",
              image: "/images/dot_enlighten.png"
            },
            {
              title: "Create",
              desc: "meaningful technological solutions for the community",
              image: "/images/dot_create.png"
            },
          ].map(e =>
            <div key={e.title} className="px-1 md:px-4 py-4 max-w-sm">
              <div 
                className="mx-auto img-frame rounded-full mb-10 w-20 h-20 sm:w-32 sm:h-32"
                style={{ position: "relative" }}
              >
                <Image src={e.image} height={480} width={480} />
              </div>
              <p className="text-lg md:text-2xl font-medium mb-2">{e.title}</p>
              <p className="text-xs sm:text-base">{e.desc}</p>
            </div>)}
        </div>
      </section>

			<Socials />
    </>
  )
}

About.getLayout = page => (
  <Layout title="About">
    {page}
  </Layout>
)
import Link from "next/link"
import Image from 'next/image'
import Layout from "../components/layout-default"
import AnimatedText from "../components/animated-text"
import ParallaxImage from "../components/parallax-image"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import AnimatedObject from "../components/animated-object"
import AnimatedEm from "../components/animated-em"
import ParallaxObject from "../components/parallax-object"

export default function About() {
  /* ScrollTrigger.defaults({
    markers: true
  }) */

  return (
    <>
      <section className="flex flex-col min-h-screen px-10 pt-32 pb-24 text-center justify-center">
        <h1 className="mb-4 text-4xl">What is DSC-UPD?</h1>
        <p className="mb-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <ParallaxImage src="images/about-hero.png" className="div-style1 mb-12 max-w-7xl w-full mx-auto h-96 bg-cover" />
        <p className="max-w-3xl text-sm mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section id="vision" className="p-10 bg-gray-200 overflow-hidden">
        <div className="grid grid-cols-2 max-w-3xl mx-auto gap-12">
          <div>
            <AnimatedObject
              className="img-frame div-style1 ml-auto w-56 h-64 mb-16"
              fromVars={{
                x: -100,
                opacity: 0
              }}
              toVars={{
                x: 0,
                opacity: 1
              }}
              scrub={2}
            >
              <Image
                src="/images/vision-1.png"
                width={224}
                height={256}
              />
            </AnimatedObject>
            <div className="div-style1 img-frame w-64 h-52">
              <Image
                src="/images/vision-2.png"
                width={256}
                height={208}
              />
            </div>
            <div className="mt-20 mr-20 ml-auto max-w-min text-5xl font-medium space-y-6">
              <AnimatedText className="text-red-400">Empower.</AnimatedText>
              <AnimatedText className="text-blue-400">Enlighten.</AnimatedText>
              <AnimatedText className="text-yellow-400">Create.</AnimatedText>
            </div>
          </div>
          <div>
            <h1 className="mt-28 text-lg text-red-700 font-normal mb-4">VISION</h1>
            <p className="text-3xl font-medium mb-6">Uplifting communities through <AnimatedEm emClassName="bg-yellow-300 bottom-0 left-4">technology</AnimatedEm></p>
            <p className="mb-12">This organization envisions itself as a community of tech enthusiasts who are passionate about uplifting communities through technology and innovation.</p>
            <AnimatedObject
              className="img-frame div-style1 h-96 w-72"
              fromVars={{
                x: 100,
                opacity: 0
              }}
              toVars={{
                x: 0,
                opacity: 1
              }}
              scrub={2}
            >
              <Image
                src="/images/vision-3.png"
                width={288}
                height={384}
              />
            </AnimatedObject>
          </div>
        </div>
      </section>

      <section id="mission" className="p-10 text-center">
        <h1 className="text-lg text-red-700 font-normal">MISSION</h1>
        <p className="mb-6">We, as an organization, aim to</p>
        <div className="flex justify-center">
          {[
            {
              title: "Empower",
              desc: "Empower people through technology and programming education",
              image: "/images/mission-1.png"
            },
            {
              title: "Enlighten",
              desc: "Equip members with the right tools to address local issues through data",
              image: "/images/mission-2.png"
            },
            {
              title: "Create",
              desc: "Create meaningful technological solutions for the community",
              image: "/images/mission-3.png"
            },
          ].map(e =>
            <div key={e.title} className="px-4 py-4 max-w-sm">
              <div className="mx-auto rounded-full mb-10 w-32 h-32 overflow-hidden">
                <Image
                  src={e.image}
                  width={128}
                  height={128}
                />
              </div>
              <p className="text-2xl font-medium mb-2">{e.title}</p>
              <p>{e.desc}</p>
            </div>)}
        </div>
      </section>

      <section id="reach" className="relative px-10 py-10 bg-gray-200 overflow-hidden">
        <div className="mx-auto max-w-max grid grid-cols-4 grid-rows-2 gap-8">
          <div className="relative flex flex-col justify-center z-0">
            <h1>Reach Us</h1>
            <p className="text-sm">in our socials!</p>
            <ParallaxObject className="absolute -left-6 -z-10 w-20 h-20 bg-yellow-300 rounded-full" y={[-200, 200]} />
            <ParallaxObject className="absolute left-12 -z-10 w-10 h-10 bg-blue-300 rounded-full" y={[-200, 450]} />
            <ParallaxObject className="absolute left-36 -z-10 w-10 h-10 bg-red-300 rounded-full" y={[-100, 100]} />
          </div>
          <div />
          {[
            { name: "Facebook", icon: "/images/facebook-icon.svg" },
            { name: "Youtube", icon: "/images/youtube-icon.svg" },
            null,
            { name: "Gmail", icon: "/images/gmail-icon.svg" },
            { name: "LinkedIn", icon: "/images/linkedin-icon.svg" },
          ].map((e, index) => (
            e ?
              <a key={index}>
                <button className={"w-full px-10 py-7 text-center transition-shadow hover:shadow-none div-style1"}>
                  <img
                    src={e.icon}
                    className="w-8 mx-auto mb-3"
                  />
                  <p className="text-sm">{e.name}</p>
                </button>
              </a>
              :
              <div key={index} />
          ))}
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
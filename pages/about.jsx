import Image from 'next/image'
import Layout from "../components/layout-default"
import AnimatedText from "../components/animated-text"
import ParallaxImage from "../components/parallax-image"
import AnimatedObject from "../components/animated-object"
import AnimatedEm from "../components/animated-em"
import ParallaxObject from "../components/parallax-object"

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

      <section id="vision" className="px-4 py-10 md:p-10 bg-gray-200 overflow-hidden">
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-4 md:gap-12">
          <div className="hidden sm:block">
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
              <Image src="/images/vision-1.png" layout="fill"/>
            </AnimatedObject>
            <div className="div-style1 img-frame w-64 h-52" style={{ position: "relative" }}>
              <Image src="/images/vision-2.png" layout="fill"/>
            </div>
            <div className="mt-20 mr-20 ml-auto max-w-min text-5xl font-medium space-y-6">
              <AnimatedText className="text-red-400">Empower.</AnimatedText>
              <AnimatedText className="text-blue-400">Enlighten.</AnimatedText>
              <AnimatedText className="text-yellow-400">Create.</AnimatedText>
            </div>
          </div>
          <div>
            <h1 className="mb-4 sm:mt-28 text-lg text-red-700 font-normal">VISION</h1>
            <p className="text-3xl font-medium mb-6">Uplifting communities through <AnimatedEm emClassName="bg-yellow-300 bottom-0 left-4">technology</AnimatedEm></p>
            <p className="sm:mb-12">This organization envisions itself as a community of tech enthusiasts who are passionate about uplifting communities through technology and innovation.</p>
            <AnimatedObject
              className="hidden sm:block img-frame div-style1 h-96 w-85"
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
              <Image src="/images/vision-3.png" layout="fill"/>
            </AnimatedObject>
          </div>
        </div>
      </section>

      <section id="mission" className="p-4 md:p-10 text-center">
        <h1 className="text-lg text-red-700 font-normal">MISSION</h1>
        <p className="mb-6">We, as an organization, aim to</p>
        <div className="flex justify-center">
          {[
            {
              title: "Empower",
              desc: "Empower people through technology and programming education",
              image: "/images/dot_empower.png"
            },
            {
              title: "Enlighten",
              desc: "Equip members with the right tools to address local issues through data",
              image: "/images/dot_enlighten.png"
            },
            {
              title: "Create",
              desc: "Create meaningful technological solutions for the community",
              image: "/images/dot_create.png"
            },
          ].map(e =>
            <div key={e.title} className="px-1 md:px-4 py-4 max-w-sm">
              <div 
                className="mx-auto img-frame rounded-full mb-10 w-20 h-20 sm:w-32 sm:h-32"
                style={{ position: "relative" }}
              >
                <Image src={e.image} layout="fill"/>
              </div>
              <p className="text-lg md:text-2xl font-medium mb-2">{e.title}</p>
              <p className="text-xs sm:text-base">{e.desc}</p>
            </div>)}
        </div>
      </section>

      <section id="reach" className="relative px-10 py-10 bg-gray-200 overflow-hidden">
        <div className="mx-auto max-w-max grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1 relative flex flex-col justify-center">
            <ParallaxObject className="absolute -left-6 w-20 h-20 bg-yellow-300 rounded-full" y={[-200, 200]} />
            <ParallaxObject className="absolute left-12 w-10 h-10 bg-blue-300 rounded-full" y={[-200, 450]} />
            <ParallaxObject className="absolute left-36 w-10 h-10 bg-red-300 rounded-full" y={[-100, 100]} />
            <h1 className="relative">Reach Us</h1>
            <p className="relative text-sm">in our socials!</p>
          </div>
          {[
            { name: "Facebook", icon: "/images/facebook-icon.svg", link: "https://www.facebook.com/GDSCupdiliman" },
            { name: "LinkedIn", icon: "/images/linkedin-icon.svg", link: "https://www.linkedin.com/company/gdscupdiliman/mycompany/" },
          ].map((e, index) => (
            e ?
              <a className="relative" key={index} href={e.link} target="_blank" >
                <button 
                  className="w-full px-3 py-3 md:px-10 md:py-7 text-center transition-shadow hover:shadow-none div-style1"
                >
                  <img
                    src={e.icon}
                    className="h-6 md:h-8 mx-auto mb-3"
                  />
                  <p className="text-sm">{e.name}</p>
                </button>
              </a>
              :
              <div key={index} className="hidden sm:block" />
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
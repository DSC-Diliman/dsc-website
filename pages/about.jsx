import Link from "next/link"
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
      <section className="flex flex-col min-h-screen px-4 md:px-10 py-12 md:py-24 text-center justify-center">
        <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl">What is DSC-UPD?</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <ParallaxImage src="images/about-hero.png" className="div-style1 max-w-5xl w-full mx-auto h-52 sm:h-64 md:h-96 my-4 md:my-8 bg-cover" />
        <p className="max-w-3xl text-sm mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
              <img src="/images/vision-1.png" />
            </AnimatedObject>
            <div className="div-style1 img-frame w-64 h-52">
              <img src="/images/vision-2.png" />
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
              className="hidden sm:block img-frame div-style1 h-96 w-72"
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
              <img src="/images/vision-3.png" />
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
            <div key={e.title} className="px-1 md:px-4 py-4 max-w-sm">
              <div className="mx-auto img-frame rounded-full mb-10 w-20 h-20 sm:w-32 sm:h-32">
                <img src={e.image} />
              </div>
              <p className="text-lg md:text-2xl font-medium mb-2">{e.title}</p>
              <p className="text-xs sm:text-base">{e.desc}</p>
            </div>)}
        </div>
      </section>

      <section>
      <div className='bg-gray-200 pb-4'>
      <div className="lg:w-8/12 lg:grid grid-cols-1 gap-1 2xl:w-1/2 2xl:grid-cols-2 m-auto"> 
      {/* left div */}
      <div className="gap-y-2 p-4">
        <div className="flex flex-col w-11/12 m-auto">
          <h1 className='text-sans text-4xl text-red'>Contact Us!</h1>
          <div className="flex flex-col items-center gap-y-2 mt-2 m-auto">
            <form action="https://formsubmit.co/dscdiliman@gmail.com" method="POST"> 
            <input className="w-11/12 rounded-xl pl-2 transform hover:scale-105 hover:shadow-xl transition-all focus:outline-none border-2 focus:border-blue-700  focus:scale-105" type='text' placeholder="Email address" name='email'></input>
            <input className="w-11/12 rounded-xl pl-2 transform hover:scale-105 hover:shadow-xl transition-all focus:outline-none border-2 focus:border-red-700  focus:scale-105" type='text' placeholder="Name" name='name'></input>
            <input className="w-11/12 rounded-xl pl-2 transform hover:scale-105 hover:shadow-xl transition-all focus:outline-none border-2 focus:border-green-500  focus:scale-105" type='text' placeholder="Subject" name='_subject'></input>
            <textarea className="w-11/12 rounded-xl pl-2 transform hover:scale-105 hover:shadow-xl transition-all focus:outline-none border-2 focus:border-yellow-500  focus:scale-105" rows="5" placeholder="Message" name='message'></textarea>
            <div className="flex flex-col w-11/12">
              <button className="bg-transparent rounded-xl w-20 self-end bg-red-500 text-white hover:scale-105 hover:bg-red-700 transform active:translate-y-0.5 transition-all" type='submit'>Send</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    {/* right div */}
      <div className="flex">
          <div className='flex w-full m-auto'>
            <p className="m-auto text-center 2xl:text-left">
              We would love to hear from you
              <br></br>
              <br></br>
              If you would prefer to email us directly, you may reach us at <b>dscdiliman@gmail.com</b> or at <b>dsc.diliman.externals@gmail.com</b>
              <br></br>
              <br></br>
              For inquiries, please feel free to contact us here and we will get back to you as soon as possible.
            </p>
          </div>
      </div>
      </div>
      </div>          
      </section>

      <section id="reach" className="relative px-10 py-10 overflow-hidden">
        <div className="mx-auto max-w-max grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1 relative flex flex-col justify-center">
            <ParallaxObject className="absolute -left-6 w-20 h-20 bg-yellow-300 rounded-full" y={[-200, 200]} />
            <ParallaxObject className="absolute left-12 w-10 h-10 bg-blue-300 rounded-full" y={[-200, 450]} />
            <ParallaxObject className="absolute left-36 w-10 h-10 bg-red-300 rounded-full" y={[-100, 100]} />
            <h1 className="relative">Reach Us</h1>
            <p className="relative text-sm">in our socials!</p>
          </div>
          <div className="hidden sm:block" />
          {[
            { name: "Facebook", icon: "/images/facebook-icon.svg" },
            { name: "Youtube", icon: "/images/youtube-icon.svg" },
            null,
            { name: "Gmail", icon: "/images/gmail-icon.svg" },
            { name: "LinkedIn", icon: "/images/linkedin-icon.svg" },
          ].map((e, index) => (
            e ?
              <a className="relative" key={index}>
                <button className="w-full px-3 py-3 md:px-10 md:py-7 text-center transition-shadow hover:shadow-none div-style1">
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
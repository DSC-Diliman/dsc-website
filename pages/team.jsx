import AnimatedEm from "../components/animated-em"
import Layout from "../components/layout-default"
import ParallaxObject from "../components/parallax-object"
import Portrait from "../components/portrait"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Team() {
  /* ScrollTrigger.defaults({
    markers: false
  }) */

  return (
    <>
      <div className="px-10 pt-32 pb-10 w-full text-center">
        <h1 className="my-4">Meet our Team</h1>
        <p className="my-4">Our lineup that empowers, enlightens, and nurtures student developers in UP Diliman</p>
      </div>
      <div className="space-y-20 mb-20">
        <section id="executive" className="px-10">
          <h2 className="text-center">Executive Board</h2>
          <div className="flex flex-wrap justify-evenly gap-x-7 gap-y-14 max-w-3xl mx-auto mt-8 mb-28">
            <Portrait
              src="/images/portrait.png"
              name="Gianna Burgos"
              position="Position"
              desc='"Something short and fun like a yearbook quote or life motto haha"'
              socials={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/home",
                linkedin: "https://www.linkedin.com/",
                github: "https://github.com/"
              }}
            />
            <Portrait
              src="/images/portrait.png"
              name="Gianna Burgos"
              position="Position"
              desc='"Something short and fun like a yearbook quote or life motto haha"'
            />
            <Portrait
              src="/images/portrait.png"
              name="Gianna Burgos"
              position="Position"
              desc='"Something short and fun like a yearbook quote or life motto haha"'
            />
            <Portrait
              src="/images/portrait.png"
              name="Gianna Burgos"
              position="Position"
              desc='"Something short and fun like a yearbook quote or life motto haha"'
            />
            <Portrait
              src="/images/portrait.png"
              name="Gianna Burgos"
              position="Position"
              desc='"Something short and fun like a yearbook quote or life motto haha"'
            />
          </div>
        </section>
        <section id="technology" className="px-10">
          <div className="grid grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
            <div className="relative w-full flex flex-wrap justify-evenly gap-4">
              <ParallaxObject className="absolute -left-24 -z-10 w-20 h-20 bg-green-500 rounded-full" y={[0, 200]} end="bottom+=160 top" />
              <ParallaxObject className="absolute bottom-0 right-24 -z-10 w-6 h-6 bg-green-500 rounded-full" y={[0, 50]} end="bottom+=200 top" />
              <Portrait
                src="/images/portrait.png"
                className="transform -translate-y-6"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
              <Portrait
                src="/images/portrait.png"
                className="transform translate-y-6"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
            </div>
            <div>
              <h2><AnimatedEm emClassName="bg-green-500 bottom-0 left-4">Technology</AnimatedEm></h2>
              <p className="mt-4">The Technology department is a group of passionate students that are responsible for the planning, design, and implementation of various activities such as Workshops and Client/Internal projects in different aspects of software and technology namely: Web Design, Mobile App Development, UX/UI, AI, ML, Data Science, and Cloud Engineering.</p>
            </div>
          </div>
        </section>
        <section id="operations" className="px-10">
          <div className="grid grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
            <div>
              <h2><AnimatedEm emClassName="bg-red-400 bottom-0 -left-4">Operations</AnimatedEm></h2>
              <p className="mt-4">The Operations is the internals manager of the organization. The department oversees and ensures that the events and initiatives are well delivered and successful. Moreover, the operations team is in-charge of project management, document organization and legal concerns.</p>
            </div>
            <div className="relative w-full flex flex-wrap justify-evenly gap-4">
              <ParallaxObject className="absolute -right-12 -z-10 w-20 h-20 bg-red-400 rounded-full" y={[0, 200]} end="bottom+=160 top" />
              <Portrait
                src="/images/portrait.png"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
            </div>
          </div>
        </section>
        <section id="communications" className="px-10">
          <div className="grid grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
            <div className="relative w-full flex flex-wrap justify-evenly gap-4">
              <ParallaxObject className="absolute -left-2 -z-10 w-10 h-10 bg-yellow-300 rounded-full" y={[-100, 200]} end="bottom+=160 top" />
              <Portrait
                src="/images/portrait.png"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
            </div>
            <div>
              <h2><AnimatedEm emClassName="bg-yellow-300 bottom-0 left-4">Communications</AnimatedEm></h2>
              <p className="mt-4">The Communications Department is in charge of planning, developing, and implementing the marketing and communication strategies of the organization. The department makes sure that the organization’s messages are clearly distributed and communicated through channels towards the targeted audience.</p>
            </div>
          </div>
        </section>
        <section id="community-development" className="px-10">
          <div className="grid grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
            <div>
              <h2><AnimatedEm emClassName="bg-blue-300 bottom-0 -left-4">Community Development</AnimatedEm></h2>
              <p className="mt-4">The Human Resources department is the community builder of the organization. The department assesses the performances of the members and encourages an environment that is collaborative and growth-minded, while also strengthening the organization's relationships with community partners.</p>
            </div>
            <div className="relative w-full flex flex-wrap justify-evenly gap-4">
              <ParallaxObject className="absolute -right-4 -z-10 w-14 h-14 bg-blue-300 rounded-full" y={[-50, 100]} end="bottom+=160 top" />
              <Portrait
                src="/images/portrait.png"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
            </div>
          </div>
        </section>
        <section id="finance-and-externals" className="px-10">
          <div className="grid grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
            <div className="relative w-full flex flex-wrap justify-evenly gap-4">
              <ParallaxObject className="absolute left-6 -z-10 w-6 h-6 bg-yellow-500 rounded-full" y={[-100, 100]} end="bottom+=160 top" />
              <Portrait
                src="/images/portrait.png"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
            </div>
            <div>
              <h2><AnimatedEm emClassName="bg-yellow-500 bottom-0 left-4">Finance and Externals</AnimatedEm></h2>
              <p className="mt-4">The Finance and Externals Department is the funding and partnerships arm of DSC Loyola. The department manages the organization's funds making sure there is always enough financial resources for its projects and activities. It also builds strong relationships with various institutions, such as businesses, schools, and organizations.</p>
            </div>
          </div>
        </section>
        <section id="delegates" className="px-10">
          <div className="grid grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
            <div>
              <h2><AnimatedEm emClassName="bg-purple-400 bottom-0 -left-4" trigger="90%">Delegates</AnimatedEm></h2>
              <p className="mt-4">The Human Resources department is the community builder of the organization. The department assesses the performances of the members and encourages an environment that is collaborative and growth-minded, while also strengthening the organization's relationships with community partners.</p>
            </div>
            <div className="relative w-full flex flex-wrap justify-evenly gap-4">
              <ParallaxObject className="absolute -right-6 -z-10 w-20 h-20 bg-purple-400 rounded-full" y={[-100, 200]} />
              <Portrait
                src="/images/portrait.png"
                name="Gianna Burgos"
                position="Position"
                desc='"Something short and fun like a yearbook quote or life motto haha"'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

Team.getLayout = page => (
  <Layout title="Team">
    {page}
  </Layout>
)
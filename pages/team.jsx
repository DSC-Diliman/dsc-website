import AnimatedEm from "../components/animated-em"
import Layout from "../components/layout-default"
import Em from "../components/em"
import ParallaxObject from "../components/parallax-object"
import Portrait from "../components/portrait"
import { getExecData } from "/lib/posts"
import { getTechData } from "/lib/posts"
import { getOpsData } from "/lib/posts"
import { getCommsData } from "/lib/posts"
import { getExteFinData } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Team({allExecData, allTechData, allOpsData, allCommsData, allExteFinData}) {
  /* ScrollTrigger.defaults({
    markers: false
  }) */
  return (
    <>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="my-4">Meet our Team</h1>
        <p>Our lineup that empowers, enlightens, and nurtures student developers in UP Diliman</p>
      </div>
      <div className="space-y-14 md:space-y-20 pb-20 px-4 md:px-10 overflow-x-hidden">
        <section id="executive">
          <h2 className="text-center"><Em emClassName="bg-blue-400 bottom-0">&nbsp;&nbsp;&nbsp;Exec</Em><Em emClassName="bg-red-400 bottom-0">utiv</Em><Em emClassName="bg-yellow-400 bottom-0">e Boa</Em><Em emClassName="bg-green-400 bottom-0">rd&nbsp;&nbsp;&nbsp;</Em></h2>
          <div className="flex flex-wrap justify-evenly gap-4 md:gap-x-7 md:gap-y-14 max-w-3xl mx-auto mt-8 mb-28">
            {allExecData[0]?<Portrait
              src={allExecData[0].thumbnail}
              name= {allExecData[0].name}
              position={allExecData[0].position}
              desc={allExecData[0].quote}
              socials={{
                facebook: allExecData[0].facebookURL? allExecData[0].facebookURL : null,
                twitter: allExecData[0].twitterURL? allExecData[0].twitterURL : null,
                linkedin: allExecData[0].linkedinURL? allExecData[0].linkedinURL : null,
                github: allExecData[0].githubURL? allExecData[0].githubURL : null
              }}
            />
            : null}
            {allExecData[1]?<Portrait
              src={allExecData[1].thumbnail}
              name= {allExecData[1].name}
              position={allExecData[1].position}
              desc={allExecData[1].quote}
              socials={{
                facebook: allExecData[1].facebookURL? allExecData[1].facebookURL : null,
                twitter: allExecData[1].twitterURL? allExecData[1].twitterURL : null,
                linkedin: allExecData[1].linkedinURL? allExecData[1].linkedinURL : null,
                github: allExecData[1].githubURL? allExecData[1].githubURL : null
              }}
            />
            : null}
            {allExecData[2]?<Portrait
              src={allExecData[2].thumbnail}
              name= {allExecData[2].name}
              position={allExecData[2].position}
              desc={allExecData[2].quote}
              socials={{
                facebook: allExecData[2].facebookURL? allExecData[2].facebookURL : null,
                twitter: allExecData[2].twitterURL? allExecData[2].twitterURL : null,
                linkedin: allExecData[2].linkedinURL? allExecData[2].linkedinURL : null,
                github: allExecData[2].githubURL? allExecData[2].githubURL : null
              }}
            />
            : null}
            {allExecData[3]?<Portrait
              src={allExecData[3].thumbnail}
              name= {allExecData[3].name}
              position={allExecData[3].position}
              desc={allExecData[3].quote}
              socials={{
                facebook: allExecData[3].facebookURL? allExecData[3].facebookURL : null,
                twitter: allExecData[3].twitterURL? allExecData[3].twitterURL : null,
                linkedin: allExecData[3].linkedinURL? allExecData[3].linkedinURL : null,
                github: allExecData[3].githubURL? allExecData[3].githubURL : null
              }}
            />
            : null}
            {allExecData[4]?<Portrait
              src={allExecData[4].thumbnail}
              name= {allExecData[4].name}
              position={allExecData[4].position}
              desc={allExecData[4].quote}
              socials={{
                facebook: allExecData[4].facebookURL? allExecData[4].facebookURL : null,
                twitter: allExecData[4].twitterURL? allExecData[4].twitterURL : null,
                linkedin: allExecData[4].linkedinURL? allExecData[4].linkedinURL : null,
                github: allExecData[4].githubURL? allExecData[4].githubURL : null
              }}
            />
            : null}
          </div>
        </section>
        <section id="technology" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
          <div className="md:order-2 pt-32">
            <h2><AnimatedEm emClassName="bg-green-500 bottom-0 left-4">Technology</AnimatedEm></h2>
            <p className="mt-4">The Technology department is a group of passionate students that are responsible for the planning, design, and implementation of various activities such as Workshops and Client/Internal projects in different aspects of software and technology namely: Web Design, Mobile App Development, UX/UI, AI, ML, Data Science, and Cloud Engineering.</p>
          </div>
          <div className="relative w-full flex flex-wrap justify-evenly gap-4">
            <ParallaxObject className="absolute -left-24 w-20 h-20 bg-green-500 rounded-full" y={[0, 200]} end="bottom+=160 top" />
            <ParallaxObject className="absolute bottom-0 right-24 w-6 h-6 bg-green-500 rounded-full" y={[0, 50]} end="bottom+=200 top" />
            {allTechData[0]?<Portrait
              src={allTechData[0].thumbnail}
              name= {allTechData[0].name}
              position={allTechData[0].position}
              desc={allTechData[0].quote}
              socials={{
                facebook: allTechData[0].facebookURL? allTechData[0].facebookURL : null,
                twitter: allTechData[0].twitterURL? allTechData[0].twitterURL : null,
                linkedin: allTechData[0].linkedinURL? allTechData[0].linkedinURL : null,
                github: allTechData[0].githubURL? allTechData[0].githubURL : null
              }}
            />
            : null}
            {allTechData[1]?<Portrait
              src={allTechData[1].thumbnail}
              name= {allTechData[1].name}
              position={allTechData[1].position}
              desc={allTechData[1].quote}
              socials={{
                facebook: allTechData[1].facebookURL? allTechData[1].facebookURL : null,
                twitter: allTechData[1].twitterURL? allTechData[1].twitterURL : null,
                linkedin: allTechData[1].linkedinURL? allTechData[1].linkedinURL : null,
                github: allTechData[1].githubURL? allTechData[1].githubURL : null
              }}
            />
            : null}
            {allTechData[2]?<Portrait
              src={allTechData[2].thumbnail}
              name= {allTechData[2].name}
              position={allTechData[2].position}
              desc={allTechData[2].quote}
              socials={{
                facebook: allTechData[2].facebookURL? allTechData[2].facebookURL : null,
                twitter: allTechData[2].twitterURL? allTechData[2].twitterURL : null,
                linkedin: allTechData[2].linkedinURL? allTechData[2].linkedinURL : null,
                github: allTechData[2].githubURL? allTechData[2].githubURL : null
              }}
            />
            : null}
          </div>
        </section>
        <section id="operations" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
          <div className="pt-32">
            <h2><AnimatedEm emClassName="bg-red-400 bottom-0 -left-4">Operations</AnimatedEm></h2>
            <p className="mt-4">The Operations is the internals manager of the organization. The department oversees and ensures that the events and initiatives are well delivered and successful. Moreover, the operations team is in-charge of project management, document organization and legal concerns.</p>
          </div>
          <div className="relative w-full flex flex-wrap justify-evenly gap-4">
            <ParallaxObject className="absolute -right-12 w-20 h-20 bg-red-400 rounded-full" y={[0, 200]} end="bottom+=160 top" />
            {allOpsData[0]?<Portrait
              src={allOpsData[0].thumbnail}
              name= {allOpsData[0].name}
              position={allOpsData[0].position}
              desc={allOpsData[0].quote}
              socials={{
                facebook: allOpsData[0].facebookURL? allOpsData[0].facebookURL : null,
                twitter: allOpsData[0].twitterURL? allOpsData[0].twitterURL : null,
                linkedin: allOpsData[0].linkedinURL? allOpsData[0].linkedinURL : null,
                github: allOpsData[0].githubURL? allOpsData[0].githubURL : null
              }}
            />
            : null}
            {allOpsData[1]?<Portrait
              src={allOpsData[1].thumbnail}
              name= {allOpsData[1].name}
              position={allOpsData[1].position}
              desc={allOpsData[1].quote}
              socials={{
                facebook: allOpsData[1].facebookURL? allOpsData[1].facebookURL : null,
                twitter: allOpsData[1].twitterURL? allOpsData[1].twitterURL : null,
                linkedin: allOpsData[1].linkedinURL? allOpsData[1].linkedinURL : null,
                github: allOpsData[1].githubURL? allOpsData[1].githubURL : null
              }}
            />
            : null}
            {allOpsData[2]?<Portrait
              src={allOpsData[2].thumbnail}
              name= {allOpsData[2].name}
              position={allOpsData[2].position}
              desc={allOpsData[2].quote}
              socials={{
                facebook: allOpsData[2].facebookURL? allOpsData[2].facebookURL : null,
                twitter: allOpsData[2].twitterURL? allOpsData[2].twitterURL : null,
                linkedin: allOpsData[2].linkedinURL? allOpsData[2].linkedinURL : null,
                github: allOpsData[2].githubURL? allOpsData[2].githubURL : null
              }}
            />
            : null}
          </div>
        </section>
        <section id="communications" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
          <div className="md:order-2">
            <h2><AnimatedEm emClassName="bg-blue-400 bottom-0 left-4">Communications</AnimatedEm></h2>
            <p className="mt-4">The Communications Department is in charge of planning, developing, and implementing the marketing and communication strategies of the organization. The department makes sure that the organization’s messages are clearly distributed and communicated through channels towards the targeted audience.</p>
          </div>
          <div className="relative w-full flex flex-wrap justify-evenly gap-4">
            <ParallaxObject className="absolute -left-2 w-10 h-10 bg-blue-400 rounded-full" y={[-100, 200]} end="bottom+=160 top" />
            {allCommsData[0]?<Portrait
              src={allCommsData[0].thumbnail}
              name= {allCommsData[0].name}
              position={allCommsData[0].position}
              desc={allCommsData[0].quote}
              socials={{
                facebook: allCommsData[0].facebookURL? allCommsData[0].facebookURL : null,
                twitter: allCommsData[0].twitterURL? allCommsData[0].twitterURL : null,
                linkedin: allCommsData[0].linkedinURL? allCommsData[0].linkedinURL : null,
                github: allCommsData[0].githubURL? allCommsData[0].githubURL : null
              }}
            />
            : null}
            {allCommsData[1]?<Portrait
              src={allCommsData[1].thumbnail}
              name= {allCommsData[1].name}
              position={allCommsData[1].position}
              desc={allCommsData[1].quote}
              socials={{
                facebook: allCommsData[1].facebookURL? allCommsData[1].facebookURL : null,
                twitter: allCommsData[1].twitterURL? allCommsData[1].twitterURL : null,
                linkedin: allCommsData[1].linkedinURL? allCommsData[1].linkedinURL : null,
                github: allCommsData[1].githubURL? allCommsData[1].githubURL : null
              }}
            />
            : null}
          </div>
        </section>
        <section id="finance-and-externals" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
          <div>
            <h2><AnimatedEm emClassName="bg-yellow-300 bottom-0 -left-4" trigger="90%">Finance and Externals</AnimatedEm></h2>
            <p className="mt-4">The Finance and Externals Department is the funding and partnerships arm of DSC Loyola. The department manages the organization's funds making sure there is always enough financial resources for its projects and activities. It also builds strong relationships with various institutions, such as businesses, schools, and organizations.</p>
          </div>
          <div className="relative w-full flex flex-wrap justify-evenly gap-4">
            <ParallaxObject className="absolute -right-6 w-20 h-20 bg-yellow-300 rounded-full" y={[-100, 200]} />
            {allExteFinData[0]?<Portrait
              src={allExteFinData[0].thumbnail}
              name= {allExteFinData[0].name}
              position={allExteFinData[0].position}
              desc={allExteFinData[0].quote}
              socials={{
                facebook: allExteFinData[0].facebookURL? allExteFinData[0].facebookURL : null,
                twitter: allExteFinData[0].twitterURL? allExteFinData[0].twitterURL : null,
                linkedin: allExteFinData[0].linkedinURL? allExteFinData[0].linkedinURL : null,
                github: allExteFinData[0].githubURL? allExteFinData[0].githubURL : null
              }}
            />
            : null}
            {allExteFinData[1]?<Portrait
              src={allExteFinData[1].thumbnail}
              name= {allExteFinData[1].name}
              position={allExteFinData[1].position}
              desc={allExteFinData[1].quote}
              socials={{
                facebook: allExteFinData[1].facebookURL? allExteFinData[1].facebookURL : null,
                twitter: allExteFinData[1].twitterURL? allExteFinData[1].twitterURL : null,
                linkedin: allExteFinData[1].linkedinURL? allExteFinData[1].linkedinURL : null,
                github: allExteFinData[1].githubURL? allExteFinData[1].githubURL : null
              }}
            />
            : null}
          </div>
        </section>
      </div>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="text-center"><Em emClassName="bg-blue-400 bottom-0">&nbsp;&nbsp;&nbsp;Websit</Em><Em emClassName="bg-red-400 bottom-0">e Deve</Em><Em emClassName="bg-yellow-400 bottom-0">lopmen</Em><Em emClassName="bg-green-400 bottom-0">t Team&nbsp;&nbsp;&nbsp;</Em></h1>
        <p className="mt-8 mb-0">This website was brought to you by the following hardworking and awesome people!</p>
      </div>
      <div className="space-y-14 md:space-y-20 pb-20 px-4 md:px-10 overflow-x-hidden">
        <section id="website">
          <div className="flex flex-wrap justify-evenly gap-4 md:gap-x-7 md:gap-y-7 max-w-max mx-auto mt-8 mb-0">
            <Portrait
              src="images\about-hero.png"
              name="Test 1"
              position=""
              desc=""
              socials={{
                facebook: null,
                twitter: null,
                linkedin: null,
                github:  null
              }}
            />
            <Portrait
              src="images\about-hero.png"
              name="Test 1"
              position=""
              desc=""
              socials={{
                facebook: null,
                twitter: null,
                linkedin: null,
                github:  null
              }}
            />
            <Portrait
              src="images\about-hero.png"
              name="Test 1"
              position=""
              desc=""
              socials={{
                facebook: null,
                twitter: null,
                linkedin: null,
                github:  null
              }}
            />
            <Portrait
              src="images\about-hero.png"
              name="Test 1"
              position=""
              desc=""
              socials={{
                facebook: null,
                twitter: null,
                linkedin: null,
                github:  null
              }}
            />
            <Portrait
              src="images\about-hero.png"
              name="Test 1"
              position=""
              desc=""
              socials={{
                facebook: null,
                twitter: null,
                linkedin: null,
                github:  null
              }}
            />
            <Portrait
              src="images\about-hero.png"
              name="Test 1"
              position=""
              desc=""
              socials={{
                facebook: null,
                twitter: null,
                linkedin: null,
                github:  null
              }}
            />
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

export async function getStaticProps() {
  const allExecData = getExecData()
  allExecData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allExecData)

  const allTechData = getTechData()
  allTechData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allTechData)

  const allOpsData = getOpsData()
  allOpsData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allOpsData)

  const allCommsData = getCommsData()
  allCommsData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allCommsData)

  const allExteFinData = getExteFinData()
  allExteFinData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allExteFinData)

  return {
    props: { allExecData, allTechData, allOpsData, allCommsData, allExteFinData }
  }
}
import AnimatedEm from "../components/animated-em"
import Layout from "../components/layout-default"
import Em from "../components/em"
import ParallaxObject from "../components/parallax-object"
import { getExecData } from "/lib/posts"
import { getTechData } from "/lib/posts"
import { getOpsData } from "/lib/posts"
import { getCommsData } from "/lib/posts"
import { getExteFinData } from "/lib/posts"
import extractPortraits from "../lib/extractPortraits"
import markdownToHtml from "/lib/markdownToHtml"
import ExecutiveTeam from "../components/executive-team"
import TechnologyTeam from "../components/technology-team"
import OperationsTeam from "../components/operations-team"

export default function Team({allExecData, allTechData, allOpsData, allCommsData, allExteFinData, allWebDevData}) {
  return (
    <>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="my-4">Meet our Team</h1>
        <p>The lineup that empowers, enlightens, and nurtures student developers in UP Diliman!</p>
      </div>
      <div className="space-y-14 md:space-y-20 pb-20 px-4 md:px-10 overflow-x-hidden">
				<ExecutiveTeam allExecData={allExecData} />
				<TechnologyTeam allTechData={allTechData} />
				<OperationsTeam allOpsData={allOpsData} />

        <section id="communications" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
          <div className="md:order-2">
            <h2><AnimatedEm emClassName="bg-blue-400 bottom-0 left-4">Communications</AnimatedEm></h2>
            <p className="mt-4">
              The Communications Department is in charge of crafting promotional plans and publicity materials for the organization’s projects and initiatives, and managing all of the organization’s social media pages.
            </p>
          </div>
          <div className="relative w-full flex flex-wrap justify-evenly gap-4">
            <ParallaxObject className="absolute -left-2 w-10 h-10 bg-blue-400 rounded-full" y={[-100, 200]} end="bottom+=160 top" />
            {extractPortraits(allCommsData)}
          </div>
        </section>
        <section id="finance-and-externals" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
          <div>
            <h2><AnimatedEm emClassName="bg-yellow-300 bottom-0 -left-4" trigger="90%">Finance and Externals</AnimatedEm></h2>
            <p className="mt-4">
              The Finance Externals Department manages the finances of the organization and maintains communication with external entities such as other organizations, companies, and clients.   
            </p>
          </div>
          <div className="relative w-full flex flex-wrap justify-evenly gap-4">
            <ParallaxObject className="absolute -right-6 w-20 h-20 bg-yellow-300 rounded-full" y={[-100, 200]} />
            {extractPortraits(allExteFinData)}
          </div>
        </section>
      </div>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="text-center"><Em emClassName="bg-blue-400 bottom-0">&nbsp;&nbsp;&nbsp;Websit</Em><Em emClassName="bg-red-400 bottom-0">e Deve</Em><Em emClassName="bg-yellow-400 bottom-0">lopmen</Em><Em emClassName="bg-green-400 bottom-0">t Team&nbsp;&nbsp;&nbsp;</Em></h1>
        <p className="mt-8 mb-0">This website was brought to you by the following hardworking and awesome people!</p>
      </div>
      <div className="space-y-14 md:space-y-20 px-4 md:px-10 overflow-x-hidden">
        <section id="website">
          <div className="flex flex-wrap justify-evenly gap-4 md:gap-x-7 md:gap-y-14 max-w-3xl mx-auto mt-8 mb-28">
						{extractPortraits(allWebDevData)}
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

	const allWebDevData = [
		{
			thumbnail: "/images/gerizim.jpg",
			name: "Gerizim Villarante",
			position: "",
			quote: "",
			facebookURL: "https://www.facebook.com/gerizim16",
			twitterURL: "https://twitter.com/gerizim316",
			linkedinURL: "https://www.linkedin.com/in/gerizim16/",
			githubURL: "https://github.com/gerizim16",
		},
		{
			thumbnail: "/images/allaine.jpg",
			name: "Allaine Tan",
			position: "",
			quote: "I am the one thing in life I can control. I am inimitable, I am an original. -Aaron Burr",
			facebookURL: "https://www.facebook.com/allaine.tan",
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/allaine-tan",
			githubURL: null,
		},
		{
			thumbnail: "/images/gene.jpg",
			name: "Gene Tan",
			position: "",
			quote: "",
			facebookURL: "https://www.facebook.com/geneaudrey.tan",
			twitterURL: null,
			linkedinURL: null,
			githubURL: null,
		},
		{
			thumbnail: "/images/edrick.jpg",
			name: "Edrick Gador",
			position: "",
			quote: "A lion does not concern himself with the opinions of a sheep - Tywin Lannister",
			facebookURL: "https://www.facebook.com/edrick.gador",
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/john-edrick-gador-199308221/",
			githubURL: "https://github.com/JohnEdrickGador",
		},
		{
			thumbnail: "/images/vitus.png",
			name: "Vitus Acabado",
			position: "",
			quote: "",
			facebookURL: null,
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/vitusmurdock16/",
			githubURL: "https://github.com/tusvi",
		},
		{
			thumbnail: "/images/lagos.jpg",
			name: "Ivan Lagos",
			position: "",
			quote: "",
			facebookURL: "https://www.facebook.com/ivan.lagos.583",
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/ivan-lagos-021b4a217/",
			githubURL: null,
		},
	]

  return {
    props: { allExecData, allTechData, allOpsData, allCommsData, allExteFinData, allWebDevData }
  }
}
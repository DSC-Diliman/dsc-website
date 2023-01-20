import Layout from "../components/layout-default"
import { getExecData } from "/lib/posts"
import { getTechData } from "/lib/posts"
import { getOpsData } from "/lib/posts"
import { getCommsData } from "/lib/posts"
import { getExteFinData } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import ExecTeam from "../components/exec-team"
import TechTeam from "../components/tech-team"
import OpsTeam from "../components/ops-team"
import CommsTeam from "../components/comms-team"
import FinExtTeam from "../components/finext-team"
import WebDevTeam from "../components/web-dev-team"

export default function Team({allExecData, allTechData, allOpsData, allCommsData, allExteFinData, allWebDevData}) {
  return (
    <>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="my-4">Meet our Team</h1>
        <p>The lineup that empowers, enlightens, and nurtures student developers in UP Diliman!</p>
      </div>
      <div className="space-y-14 md:space-y-20 pb-20 px-4 md:px-10 overflow-x-hidden">
				<ExecTeam allExecData={allExecData} />
				<TechTeam allTechData={allTechData} />
				<OpsTeam allOpsData={allOpsData} />
				<CommsTeam allCommsData={allCommsData} />
				<FinExtTeam allExteFinData={allExteFinData} />
      </div>
			<WebDevTeam allWebDevData={allWebDevData} />
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
			position: "Web Development Lead",
			quote: "",
			facebookURL: "https://www.facebook.com/gerizim16",
			twitterURL: "https://twitter.com/gerizim316",
			linkedinURL: "https://www.linkedin.com/in/gerizim16/",
			githubURL: "https://github.com/gerizim16",
		},
		{
			thumbnail: "/images/allaine.jpg",
			name: "Allaine Tan",
			position: "UI / UX Designer",
			quote: "I am the one thing in life I can control. I am inimitable, I am an original. -Aaron Burr",
			facebookURL: "https://www.facebook.com/allaine.tan",
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/allaine-tan",
			githubURL: null,
		},
		{
			thumbnail: "/images/gene.jpg",
			name: "Gene Tan",
			position: "UI / UX Designer",
			quote: "",
			facebookURL: "https://www.facebook.com/geneaudrey.tan",
			twitterURL: null,
			linkedinURL: null,
			githubURL: null,
		},
		{
			thumbnail: "/images/edrick.jpg",
			name: "Edrick Gador",
			position: "Developer",
			quote: "A lion does not concern himself with the opinions of a sheep - Tywin Lannister",
			facebookURL: "https://www.facebook.com/edrick.gador",
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/john-edrick-gador-199308221/",
			githubURL: "https://github.com/JohnEdrickGador",
		},
		{
			thumbnail: "/images/vitus.png",
			name: "Vitus Acabado",
			position: "Developer",
			quote: "",
			facebookURL: null,
			twitterURL: null,
			linkedinURL: "https://www.linkedin.com/in/vitusmurdock16/",
			githubURL: "https://github.com/tusvi",
		},
		{
			thumbnail: "/images/lagos.jpg",
			name: "Ivan Lagos",
			position: "Developer",
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
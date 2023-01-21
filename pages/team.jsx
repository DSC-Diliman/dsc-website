import Layout from "../components/layout-default"
import markdownToHtml from "/lib/markdownToHtml"
import ExecTeam from "../components/exec-team"
import TechTeam from "../components/tech-team"
import OpsTeam from "../components/ops-team"
import CommsTeam from "../components/comms-team"
import FinExtTeam from "../components/finext-team"
import WebDevTeam from "../components/web-dev-team"
import { getTeam } from "../lib/posts"

export default function Team({allMemberData}) {
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
	const teams = [
		"Executive",
		"Technology",
		"Operations",
		"Communications",
		"Finance and Externals",
		"Web Development"
	]
	
	const allMemberData = []
	for (const team in teams) {
		allMemberData.push(...getTeam(team))
	}

  return {
    props: { allMemberData }
  }
}
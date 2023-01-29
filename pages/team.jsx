import Layout from "../components/layout-default"
import ExecTeam from "../components/exec-team"
import TechTeam from "../components/tech-team"
import OpsTeam from "../components/ops-team"
import CommsTeam from "../components/comms-team"
import FinExtTeam from "../components/finext-team"
import WebDevTeam from "../components/web-dev-team"
import { getTeam } from "../lib/posts"
import { useState } from "react"
import getNextPrimaryColor from "../lib/getNextPrimaryColor"

export default function Team({ allMemberData }) {
	const [yearToShow, setYearToShow] = useState(2022)

	function getFilteredData(wantedYear, wantedTeam) {
		return allMemberData.filter(({ year, team }) => year === wantedYear && team === wantedTeam)
	}

	const colorGenerator = getNextPrimaryColor()

  return (
    <>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="my-4">Meet our Team!</h1>
        <p>The lineup that empowers, enlightens, and nurtures student developers in UP Diliman!</p>
				<div className="lg: mt-12 mb-6 justify-center gap-x-10 sm:flex flex-column px-10">
					{
						[2022, 2021].map((year, index) => {
							const color = colorGenerator.next().value
							return (
								<button
									key={index}
									onClick={() => setYearToShow(year)}
									className={
										`border-2 border-${color}-500 rounded-full px-8 py-1
										${year === yearToShow && `bg-${color}-500 text-white`}
										${year !== yearToShow && `text-${color}-500 hover:bg-${color}-500 hover:text-white ease-in-out duration-200`}
										sm:text-2xl mx-2 my-1
										lg:text-3xl
										`
									}
								>
									{year} - {year + 1}
								</button>
							)
						})
					}
				</div>
      </div>
      <div className="space-y-14 md:space-y-20 pb-20 px-4 md:px-10 overflow-x-hidden">
				<ExecTeam allExecData={getFilteredData(yearToShow, "Executive")} />
				<TechTeam allTechData={getFilteredData(yearToShow, "Technology")} />
				<OpsTeam allOpsData={getFilteredData(yearToShow, "Operations")} />
				<CommsTeam allCommsData={getFilteredData(yearToShow, "Communications")} />
				<FinExtTeam allExteFinData={getFilteredData(yearToShow, "Finance and Externals")} />
      </div>
			<WebDevTeam allWebDevData={getFilteredData(yearToShow, "Web Development")} />
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
		"Web Development",
	]
	
	let allMemberData = []
	for (const team of teams) {
		allMemberData.push(...getTeam(team))
	}

  return {
    props: { allMemberData }
  }
}
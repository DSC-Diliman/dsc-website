import ExecTeam from "../components/exec-team";
import TechTeam from "../components/tech-team";
import OpsTeam from "../components/ops-team";
import CommsTeam from "../components/comms-team";
import FinExtTeam from "../components/finext-team";
import WebDevTeam from "../components/web-dev-team";
import { getTeam } from "../lib/posts";
import { useState } from "react";
import Head from "next/head";
import { isArrayOfMembersInCMS, MemberInCMS } from "../types/member-in-cms";
import HRTeam from "../components/human-resources-team";

interface Props {
  allMemberData: MemberInCMS[];
}

export default function Team({ allMemberData }: Props) {
  const [yearToShow, setYearToShow] = useState(2022);

  function getFilteredData(wantedYear: number, wantedTeam: string) {
    return allMemberData.filter(
      ({ year, team }) => year === wantedYear && team === wantedTeam
    );
  }

  const colors = [
    {
      borderColor: "border-red-500",
      textColor: "text-red-500",
      bgColor: "bg-red-500",
      bgColorWithHover: "hover:bg-red-500",
    },
    {
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
      bgColor: "bg-blue-500",
      bgColorWithHover: "hover:bg-blue-500",
    },
    {
      borderColor: "border-amber-500",
      textColor: "text-amber-500",
      bgColor: "bg-amber-500",
      bgColorWithHover: "hover:bg-amber-500",
    },
    {
      borderColor: "border-emerald-500",
      textColor: "text-emerald-500",
      bgColor: "bg-emerald-500",
      bgColorWithHover: "hover:bg-emerald-500",
    },
  ];

  const yearSelectionButtons = [2022, 2021].map((year, index) => {
    const { borderColor, textColor, bgColor, bgColorWithHover } =
      colors[index % 4];
    const className = `border-2 ${borderColor} border-solid text-2xl rounded-full px-8 py-1 mx-2 my-1 ${
      year === yearToShow
        ? `${bgColor} text-white ease-in-out duration-200`
        : `bg-transparent ${textColor} ease-in-out duration-200 ${bgColorWithHover} hover:text-white`
    } md:text-3xl`;
    return (
      <button
        key={index}
        onClick={() => setYearToShow(year)}
        className={className}
      >
        {year} – {year + 1}
      </button>
    );
  });

  return (
    <>
      <Head>
        <title>Team | GDSC UPD</title>
      </Head>
      <div className="w-full px-10 pt-32 pb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Meet our Team</h1>
        <p className="mt-4 text-base">
          The lineup that empowers, enlightens, and nurtures student developers
          in UP Diliman!
        </p>
        <div className="mt-12 mb-6 flex flex-grow flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-12">
          {yearSelectionButtons}
        </div>
      </div>
      <div className="space-y-14 px-10 pb-20 md:space-y-20">
        <ExecTeam allExecData={getFilteredData(yearToShow, "Executive")} />
        <TechTeam allTechData={getFilteredData(yearToShow, "Technology")} />
        <OpsTeam allOpsData={getFilteredData(yearToShow, "Operations")} />
        <CommsTeam
          allCommsData={getFilteredData(yearToShow, "Communications")}
        />
        <FinExtTeam
          allExteFinData={getFilteredData(yearToShow, "Finance and Externals")}
        />
        {yearToShow >= 2022 && (
          <HRTeam allHRData={getFilteredData(yearToShow, "Human Resources")} />
        )}
      </div>
      <WebDevTeam
        allWebDevData={getFilteredData(yearToShow, "Web Development")}
      />
    </>
  );
}

export async function getStaticProps() {
  const teams = [
    "Executive",
    "Technology",
    "Operations",
    "Communications",
    "Finance and Externals",
    "Human Resources",
    "Web Development",
  ];

  let allMemberData: MemberInCMS[] = [];
  for (const team of teams) {
    const teamData = getTeam(team);
    if (isArrayOfMembersInCMS(teamData)) {
      allMemberData.push(...teamData);
    }
  }

  return {
    props: { allMemberData },
  };
}

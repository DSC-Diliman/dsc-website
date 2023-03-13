import Em from "../em";
import extractPortraits from "../../lib/extractPortraits";
import { MemberInCMS } from "../../types/member-in-cms";

interface Props {
  allExecData: MemberInCMS[];
}

export default function ExecTeam({ allExecData }: Props) {
  return (
    <section id="executive">
      <h2 className="text-center">
        <Em emClassName="bg-blue-400/50 bottom-0">&nbsp;&nbsp;&nbsp;Exec</Em>
        <Em emClassName="bg-red-400/50 bottom-0">utiv</Em>
        <Em emClassName="bg-amber-400/50 bottom-0">e Boa</Em>
        <Em emClassName="bg-emerald-400/50 bottom-0">rd&nbsp;&nbsp;&nbsp;</Em>
      </h2>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-evenly gap-8 sm:mb-32">
        {extractPortraits(allExecData)}
      </div>
    </section>
  );
}

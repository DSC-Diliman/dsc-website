import Em from "./em";
import extractPortraits from "../lib/extractPortraits";
import { MemberInCMS } from "../types/member-in-cms";

interface Props {
  allWebDevData: MemberInCMS[];
}

export default function WebDevTeam({ allWebDevData }: Props) {
  return (
    <section id="web-dev">
      <div className="w-full px-4 pt-12 pb-8 text-center md:px-10 md:pt-24">
        <h1 className="text-center">
          <Em emClassName="bg-blue-400 bottom-0">&nbsp;&nbsp;&nbsp;Websit</Em>
          <Em emClassName="bg-red-400 bottom-0">e Deve</Em>
          <Em emClassName="bg-amber-400 bottom-0">lopmen</Em>
          <Em emClassName="bg-emerald-400 bottom-0">
            t Team&nbsp;&nbsp;&nbsp;
          </Em>
        </h1>
        <p className="mt-8 mb-0">
          This website was brought to you by the following hardworking and
          awesome people!
        </p>
      </div>
      <div className="space-y-14 overflow-x-hidden px-4 md:space-y-20 md:px-10">
        <section id="website">
          <div className="mx-auto mt-8 mb-28 flex max-w-3xl flex-wrap justify-evenly gap-4 md:gap-x-7 md:gap-y-14">
            {extractPortraits(allWebDevData)}
          </div>
        </section>
      </div>
    </section>
  );
}

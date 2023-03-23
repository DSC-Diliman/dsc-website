import Underline from "../utils/underline";
import extractPortraits from "../../lib/extract-portraits";
import { Member } from "../../types/member";

interface Props {
  allWebDevData: Member[];
}

export default function WebDevelopment({ allWebDevData }: Props) {
  return (
    <section id="web-development">
      <div className="w-full px-4 pt-12 pb-8 text-center md:px-10 md:pt-24">
        <h1 className="text-center">
          <Underline className="bottom-0 bg-blue-400/50">
            &nbsp;&nbsp;&nbsp;Websit
          </Underline>
          <Underline className="bottom-0 bg-red-400/50">e Deve</Underline>
          <Underline className="bottom-0 bg-amber-400/50">lopmen</Underline>
          <Underline className="bottom-0 bg-emerald-400/50">
            t Team&nbsp;&nbsp;&nbsp;
          </Underline>
        </h1>
        <p className="mx-auto mt-8 mb-0 max-w-sm text-center md:max-w-2xl">
          This website was brought to you by the following hardworking and
          awesome people!
        </p>
      </div>
      <div className="space-y-14 overflow-x-hidden px-10 md:space-y-20">
        <div className="mx-auto mt-8 mb-28 flex max-w-3xl flex-wrap justify-evenly gap-8 md:gap-x-7 md:gap-y-14">
          {extractPortraits(allWebDevData)}
        </div>
      </div>
    </section>
  );
}

import Underline from "../underline";
import extractPortraits from "../../lib/extractPortraits";
import { Member } from "../../types/member";

interface Props {
  allExecData: Member[];
}

export default function Executive({ allExecData }: Props) {
  return (
    <section id="executive">
      <h2 className="text-center">
        <Underline className="bottom-0 bg-blue-400/50">
          &nbsp;&nbsp;&nbsp;Exec
        </Underline>
        <Underline className="bottom-0 bg-red-400/50">utiv</Underline>
        <Underline className="bottom-0 bg-amber-400/50">e Boa</Underline>
        <Underline className="bottom-0 bg-emerald-400/50">
          rd&nbsp;&nbsp;&nbsp;
        </Underline>
      </h2>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-evenly gap-8 sm:mb-32">
        {extractPortraits(allExecData)}
      </div>
    </section>
  );
}

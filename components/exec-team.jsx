import Em from "./em";
import extractPortraits from "../lib/extractPortraits";

export default function ExecTeam({ allExecData }) {
  return (
    <section id="executive">
      <h2 className="text-center">
        <Em emClassName="bg-blue-400 bottom-0">&nbsp;&nbsp;&nbsp;Exec</Em>
        <Em emClassName="bg-red-400 bottom-0">utiv</Em>
        <Em emClassName="bg-yellow-400 bottom-0">e Boa</Em>
        <Em emClassName="bg-green-400 bottom-0">rd&nbsp;&nbsp;&nbsp;</Em>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto mt-8 mb-28">
        {extractPortraits(allExecData)}
      </div>
    </section>
  );
}

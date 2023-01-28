import Em from "./em";
import extractPortraits from "../lib/extractPortraits";

export default function WebDevTeam({ allWebDevData }) {
  return (
    <section id="web-dev">
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-8 w-full text-center">
        <h1 className="text-center">
          <Em emClassName="bg-blue-400 bottom-0">&nbsp;&nbsp;&nbsp;Websit</Em>
          <Em emClassName="bg-red-400 bottom-0">e Deve</Em>
          <Em emClassName="bg-yellow-400 bottom-0">lopmen</Em>
          <Em emClassName="bg-green-400 bottom-0">t Team&nbsp;&nbsp;&nbsp;</Em>
        </h1>
        <p className="mt-8 mb-0">
          This website was brought to you by the following hardworking and
          awesome people!
        </p>
      </div>
      <div className="space-y-14 md:space-y-20 px-4 md:px-10 overflow-x-hidden">
        <section id="website">
          <div className="flex flex-wrap justify-evenly gap-4 md:gap-x-7 md:gap-y-14 max-w-3xl mx-auto mt-8 mb-28">
            {extractPortraits(allWebDevData)}
          </div>
        </section>
      </div>
    </section>
  );
}

import AnimatedEm from "./animated-em"
import ParallaxObject from "./parallax-object"
import extractPortraits from "../lib/extractPortraits"

export default function CommsTeam({allCommsData}) {
	return <section id="communications" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
		<div className="md:order-2">
			<h2><AnimatedEm emClassName="bg-blue-400 bottom-0 left-4">Communications</AnimatedEm></h2>
			<p className="mt-4">
				The Communications Department is in charge of crafting promotional plans and publicity materials for the organization’s projects and initiatives, and managing all of the organization’s social media pages.
			</p>
		</div>
		<div className="relative w-full flex flex-wrap justify-evenly gap-4">
			<ParallaxObject className="absolute -left-2 w-10 h-10 bg-blue-400 rounded-full" y={[-100, 200]} end="bottom+=160 top" />
			{extractPortraits(allCommsData)}
		</div>
	</section>
}

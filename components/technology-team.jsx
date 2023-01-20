import AnimatedEm from "./animated-em"
import ParallaxObject from "./parallax-object"
import extractPortraits from "../lib/extractPortraits"

export default function TechnologyTeam({allTechData}) {
	return <section id="technology" className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8">
		<div className="md:order-2 pt-32">
			<h2><AnimatedEm emClassName="bg-green-500 bottom-0 left-4">Technology</AnimatedEm></h2>
			<p className="mt-4">
				The Technology Department handles most of the organizational functions that require specialized knowledge in programming and technology.
			</p>
		</div>
		<div className="relative w-full flex flex-wrap justify-evenly gap-4">
			<ParallaxObject className="absolute -left-24 w-20 h-20 bg-green-500 rounded-full" y={[0, 200]} end="bottom+=160 top" />
			<ParallaxObject className="absolute bottom-0 right-24 w-6 h-6 bg-green-500 rounded-full" y={[0, 50]} end="bottom+=200 top" />
			{extractPortraits(allTechData)}
		</div>
	</section>
}
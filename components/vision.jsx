import AnimatedText from "../components/animated-text"
import AnimatedObject from "../components/animated-object"
import AnimatedEm from "../components/animated-em"
import Image from "next/image"

export default function Vision() {
	return <section id="vision" className="px-4 py-10 md:p-10 bg-gray-200 overflow-hidden">
		<div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-4 md:gap-12">
			<div className="hidden sm:block">
				<AnimatedObject
					className="img-frame div-style1 ml-auto w-56 h-64 mb-16"
					fromVars={{
						x: -100,
						opacity: 0
					}}
					toVars={{
						x: 0,
						opacity: 1
					}}
					scrub={2}
				>
					<Image src="/images/vision-1.png" alt="Vision image 1" layout="fill"/>
				</AnimatedObject>
				<div className="div-style1 img-frame w-64 h-52" style={{ position: "relative" }}>
					<Image src="/images/vision-2.png" alt="Vision image 2" layout="fill"/>
				</div>
				<div className="mt-20 mr-20 ml-auto max-w-min text-5xl font-medium space-y-6">
					<AnimatedText className="text-red-400">Empower.</AnimatedText>
					<AnimatedText className="text-blue-400">Enlighten.</AnimatedText>
					<AnimatedText className="text-yellow-400">Create.</AnimatedText>
				</div>
			</div>
			<div>
				<h1 className="mb-4 sm:mt-28 text-2xl text-red-700 font-black">VISION</h1>
				<p className="text-3xl font-medium mb-6">Uplifting communities through <AnimatedEm emClassName="bg-yellow-300 bottom-0 left-4">technology</AnimatedEm></p>
				<p className="sm:mb-12">Our organization envisions itself as a community of tech enthusiasts who are passionate about uplifting communities through technology and innovation.</p>
				<AnimatedObject
					className="hidden sm:block img-frame div-style1 h-96 w-85"
					fromVars={{
						x: 100,
						opacity: 0
					}}
					toVars={{
						x: 0,
						opacity: 1
					}}
					scrub={2}
				>
					<Image src="/images/vision-3.png" alt="Vision image 3" layout="fill"/>
				</AnimatedObject>
			</div>
		</div>
	</section>
}
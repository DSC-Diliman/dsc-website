import Image from "next/image"

export default function Mission() {
	return <section id="mission" className="p-4 md:p-10 text-center">
		<h1 className="text-2xl text-red-700 font-black">MISSION</h1>
		<p className="mt-2 mb-6">We, as an organization, aim to</p>
		<div className="flex justify-center">
			{[
				{
					title: "Empower",
					desc: "people through technology and programming education",
					image: "/images/dot_empower.png"
				},
				{
					title: "Enlighten",
					desc: "members with the right tools to address local issues through data",
					image: "/images/dot_enlighten.png"
				},
				{
					title: "Create",
					desc: "meaningful technological solutions for the community",
					image: "/images/dot_create.png"
				},
			].map(e =>
				<div key={e.title} className="px-1 md:px-4 py-4 max-w-sm">
					<div 
						className="mx-auto img-frame rounded-full mb-10 w-20 h-20 sm:w-32 sm:h-32"
						style={{ position: "relative" }}
					>
						<Image src={e.image} alt="Mission image" height={480} width={480} />
					</div>
					<p className="text-lg md:text-2xl font-medium mb-2">{e.title}</p>
					<p className="text-xs sm:text-base">{e.desc}</p>
				</div>)}
		</div>
	</section>
}
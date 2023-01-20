import ParallaxObject from "../components/parallax-object"

export default function Socials() {
	return <section id="reach" className="relative px-10 py-10 bg-gray-200 overflow-hidden">
		<div className="mx-auto max-w-max grid grid-cols-2 sm:grid-cols-4 gap-8">
			<div className="col-span-2 sm:col-span-1 relative flex flex-col justify-center">
				<ParallaxObject className="absolute -left-6 w-20 h-20 bg-yellow-300 rounded-full" y={[-200, 200]} />
				<ParallaxObject className="absolute left-12 w-10 h-10 bg-blue-300 rounded-full" y={[-200, 450]} />
				<ParallaxObject className="absolute left-36 w-10 h-10 bg-red-300 rounded-full" y={[-100, 100]} />
				<h1 className="relative">Reach us</h1>
				<p className="relative text-sm">in our socials!</p>
			</div>
			{[
				{ name: "Facebook", icon: "/images/facebook-icon.svg", link: "https://www.facebook.com/GDSCupdiliman" },
				{ name: "LinkedIn", icon: "/images/linkedin-icon.svg", link: "https://www.linkedin.com/company/gdscupdiliman/mycompany/" },
			].map((e, index) => (
				e ?
					<a className="relative" key={index} href={e.link} target="_blank" >
						<button 
							className="w-full px-3 py-3 md:px-10 md:py-7 text-center transition-shadow hover:shadow-none div-style1"
						>
							<img
								src={e.icon}
								className="h-6 md:h-8 mx-auto mb-3"
							/>
							<p className="text-sm">{e.name}</p>
						</button>
					</a>
					:
					<div key={index} className="hidden sm:block" />
			))}
		</div>
	</section>
}

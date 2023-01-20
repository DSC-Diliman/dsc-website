import ParallaxImage from "./parallax-image"

export default function Description() {
	return <section className="flex flex-col min-h-screen px-4 md:px-10 py-12 md:py-24 text-center justify-center">
		<h1 className="my-4 text-2xl sm:text-3xl md:text-4xl">What is GDSC-UPD?</h1>
		<ParallaxImage src="images/about-hero.png" className="max-w-5xl w-full mx-auto h-52 sm:h-64 md:h-96 my-4 md:my-8 bg-cover"/>
		<p className="max-w-3xl text-base mx-auto">
			Ever since its fruition in India, the Developer Student Clubs has grown globally and 
			currently has over 1500 chapters spread across over 150 countries, with the Philippines 
			having 41 of those chapters. In other words, the GDSC UP Diliman Chapter is part of a <b>global community</b>.
		</p>
	</section>
}
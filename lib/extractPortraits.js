import Portrait from "../components/portrait";

export default function extractPortraits(allData) {
	return allData
		.filter((data) => data)
		.map(
			({
				thumbnail,
				name,
				position,
				quote,
				facebookURL,
				twitterURL,
				linkedinURL,
				githubURL,
			}) => (
				<Portrait
					src={thumbnail}
					key={name}
					name={name}
					position={position}
					desc={quote}
					socials={{
						facebook: facebookURL && facebookURL,
						twitter: twitterURL && twitterURL,
						linkedin: linkedinURL && linkedinURL,
						github: githubURL && githubURL,
					}}
				/>
			)
		);
}
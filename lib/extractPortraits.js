import Portrait from "../components/portrait";

export default function extractPortraits(allData) {
  return allData
    .filter((data) => data)
    .map(
      (
        {
          thumbnail,
          name,
          position,
          quote,
          facebookURL,
          twitterURL,
          linkedinURL,
          githubURL,
        },
        index
      ) => (
        <Portrait
          key={index}
          src={thumbnail}
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

import Portrait from "../components/portrait";
import { RecordInCMS } from "../types/event-in-cms";

export default function extractPortraits(data: RecordInCMS[]) {
  return data
    .filter((member) => member)
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

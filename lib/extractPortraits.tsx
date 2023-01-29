import Portrait from "../components/portrait";
import { MemberInCMS } from "../types/member-in-cms";

export default function extractPortraits(data: MemberInCMS[]) {
  return data
    .filter((member) => member)
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
          key={name}
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

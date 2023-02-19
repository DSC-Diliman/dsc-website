import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import Image from "next/image";

interface Socials {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

interface Props {
  className?: string;
  src: string;
  name: string;
  position: string;
  desc: string;
  socials: Socials;
}

export default function Portrait({
  className,
  src,
  name,
  position,
  desc,
  socials = {},
}: Props) {
  let hoverHeight: string;

  if (
    !(
      desc ||
      socials.facebook ||
      socials.github ||
      socials.linkedin ||
      socials.twitter
    )
  ) {
    hoverHeight = "";
  } else if (!desc) {
    hoverHeight = "group-hover:h-12";
  } else if (!(socials.facebook || socials.github || socials.linkedin || socials.twitter)) {
    hoverHeight = "group-hover:h-24";
  } else {
    hoverHeight = "group-hover:h-36";
	}

  return (
    <div
      className={`img-frame group relative flex h-44 w-36 flex-col justify-end overflow-hidden rounded-xl text-sm shadow-2xl md:h-60 md:w-48 md:rounded-3xl ${className}`}
    >
      <Image
        src={src}
        alt="Member image"
        className="absolute"
        height={176}
        width={144}
      />
      <div className="z-50 h-4 w-full bg-gradient-to-t from-black/20" />
      <div className="z-50 bg-gradient-to-t from-black/80 to-black/20 py-5 px-4 text-white">
        {name && <p className="font-medium md:text-base">{name}</p>}
        {position && <p className="text-xs">{position}</p>}
      </div>
      <div
        className={`z-50 flex h-0 flex-col gap-3 bg-black/80 px-4 pb-1 text-xs text-white transition-all ${hoverHeight} md:text-sm`}
      >
        {desc && (
          <div className="flex h-24 items-center">
            <p>{desc}</p>
          </div>
        )}
        <div className="text-2xl md:text-4xl">
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noreferrer">
              <TiSocialFacebookCircular />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noreferrer">
              <TiSocialTwitterCircular />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              <TiSocialLinkedinCircular />
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer">
              <TiSocialGithubCircular />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

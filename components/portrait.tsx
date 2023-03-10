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
  return (
    <div
      className={`img-frame group relative flex h-44 w-32 flex-col justify-end overflow-hidden rounded-3xl text-sm shadow-2xl sm:h-52 sm:w-40 md:h-60 md:w-48 ${className}`}
    >
      <Image
        src={src}
        alt="Member image"
        className="absolute"
        height={176}
        width={144}
      />
      <div className="z-40 h-4 w-full bg-gradient-to-t from-black/20 group-hover:hidden" />
      <div className="z-40 bg-gradient-to-t from-black/80 to-black/20 py-4 px-4 text-white group-hover:hidden md:py-5">
        {name && <p className="mb-1 font-medium md:text-base">{name}</p>}
        {position && <p className="text-xs">{position}</p>}
      </div>
      <div
        className={`absolute top-80 flex h-full w-full flex-col justify-center gap-2 bg-black/80 px-4 py-2 text-xs text-white transition-all group-hover:top-0 md:text-sm`}
      >
        <div>
          {name && (
            <p className="mb-1 text-sm font-medium md:text-base">{name}</p>
          )}
          {position && <p className="text-xs">{position}</p>}
        </div>
        {desc && (
          <div className="mt-2 text-xs md:mt-2 md:text-sm">
            <p>{desc}</p>
          </div>
        )}
        {(socials.facebook ||
          socials.twitter ||
          socials.github ||
          socials.linkedin) && (
          <div className="mt-2 flex text-2xl md:text-4xl">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noreferrer">
                <TiSocialFacebookCircular className="mt-auto block transition-all hover:scale-110" />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer">
                <TiSocialTwitterCircular className="mt-auto block transition-all hover:scale-110" />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer">
                <TiSocialLinkedinCircular className="mt-auto block transition-all hover:scale-110" />
              </a>
            )}
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noreferrer">
                <TiSocialGithubCircular className="mt-auto block transition-all hover:scale-110" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

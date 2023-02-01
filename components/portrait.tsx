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
      className={`img-frame group relative h-44 w-36 overflow-hidden rounded-xl text-sm shadow-2xl md:h-60 md:w-48 md:rounded-3xl ${className}`}
    >
      <Image
        src={src}
        alt="Member image"
        className="absolute"
        height={176}
        width={144}
      />
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-black" />
      <div className="relative mt-28 flex h-full flex-col p-2 text-white transition-all group-hover:mt-0 group-hover:bg-black group-hover:bg-opacity-70 md:mt-40 md:p-4">
        <p className="font-medium md:text-base">{name}</p>
        <p className="text-xs">{position}</p>
        <div className="flex flex-1 flex-col pt-3 text-xs md:text-sm">
          <p className="my-auto">{desc}</p>
        </div>
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

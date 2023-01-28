import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti'
import Image from 'next/image'

export default function Portrait({ className, src, name, position, desc, socials = {} }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl md:rounded-3xl w-36 h-44 md:w-48 md:h-60 shadow-2xl text-sm img-frame ${className}`}>
      <Image src={src} className="absolute" layout="fill"/>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black" />
      <div className="relative transition-all mt-28 md:mt-40 group-hover:mt-0 h-full p-2 md:p-4 flex flex-col group-hover:bg-black group-hover:bg-opacity-70 text-white">
        <p className="md:text-base font-medium">{name}</p>
        <p className="text-xs">{position}</p>
        <div className="text-xs pt-3 md:text-sm flex flex-col flex-1"><p className="my-auto">{desc}</p></div>
        <div className="text-2xl md:text-4xl">
          {socials.facebook && <a href={socials.facebook} target="_blank" rel="noreferrer"><TiSocialFacebookCircular /></a>}
          {socials.twitter && <a href={socials.twitter} target="_blank" rel="noreferrer"><TiSocialTwitterCircular /></a>}
          {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noreferrer"><TiSocialLinkedinCircular /></a>}
          {socials.github && <a href={socials.github} target="_blank" rel="noreferrer"><TiSocialGithubCircular /></a>}
        </div>
      </div>
    </div>
  )
}
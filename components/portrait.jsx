import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti'

export default function Portrait({ className, src, name, position, desc, socials = {} }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl md:rounded-3xl w-36 h-44 md:w-48 md:h-60 shadow-2xl text-sm img-frame ${className}`}>
      <img src={src} className="absolute" />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black" />
      <div className="relative transition-all mt-28 md:mt-40 group-hover:mt-0 h-full p-2 md:p-4 flex flex-col group-hover:bg-black group-hover:bg-opacity-70 text-white">
        <p className="md:text-base font-medium">{name}</p>
        <p className="text-xs">{position}</p>
        <div className="text-xs pt-3 md:text-sm flex flex-col flex-1"><p className="my-auto">{desc}</p></div>
        <div className="text-2xl md:text-4xl">
          {socials.facebook ? <a href={socials.facebook}><TiSocialFacebookCircular /></a> : null}
          {socials.twitter ? <a href={socials.twitter}><TiSocialTwitterCircular /></a> : null}
          {socials.linkedin ? <a href={socials.linkedin}><TiSocialLinkedinCircular /></a> : null}
          {socials.github ? <a href={socials.github}><TiSocialGithubCircular /></a> : null}
        </div>
      </div>
    </div>
  )
}
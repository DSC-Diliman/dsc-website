import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti'

export default function Portrait({ className, src, name, position, desc, socials = {} }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl w-48 h-60 shadow-2xl text-sm img-frame ${className}`}>
      <img src={src} className="absolute -z-10" />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black" />
      <div className="relative transition-all mt-40 group-hover:mt-0 h-full p-4 flex flex-col group-hover:bg-black group-hover:bg-opacity-70 text-white">
        <p className="text-base font-medium">{name}</p>
        <p>{position}</p>
        <div className="flex flex-col flex-1"><p className="my-auto">{desc}</p></div>
        <div className="text-4xl">
          {socials.facebook ? <a href={socials.facebook}><TiSocialFacebookCircular /></a> : null}
          {socials.twitter ? <a href={socials.twitter}><TiSocialTwitterCircular /></a> : null}
          {socials.linkedin ? <a href={socials.linkedin}><TiSocialLinkedinCircular /></a> : null}
          {socials.twitter ? <a href={socials.twitter}><TiSocialGithubCircular /></a> : null}
        </div>
      </div>
    </div>
  )
}
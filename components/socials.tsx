import Image from "next/image";
import ParallaxObject from "./parallax-object";

export default function Socials() {
  const socials = [
    {
      name: "Facebook",
      icon: "/images/facebook-icon.svg",
      link: "https://www.facebook.com/GDSCupdiliman",
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin-icon.svg",
      link: "https://www.linkedin.com/company/gdscupdiliman/mycompany/",
    },
  ];
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-max grid-cols-2 gap-y-3 gap-x-6 lg:grid-cols-3 lg:gap-8">
        <div className="relative col-span-2 flex flex-col justify-center">
          <ParallaxObject
            className="absolute -left-6 -z-10 h-20 w-20 rounded-full bg-amber-300/50"
            y={[0, 200]}
          />
          <ParallaxObject
            className="absolute left-12 -z-10 h-10 w-10 rounded-full bg-blue-300/50"
            y={[200, 400]}
          />
          <ParallaxObject
            className="absolute left-36 -z-10 h-10 w-10 rounded-full bg-red-300/50"
            y={[0, 100]}
          />
          <h1 className="relative text-3xl">Reach us</h1>
          <p className="relative text-base">in our socials!</p>
        </div>
        <div></div>
        <div></div>
        {socials.map((e, index) => (
          <a
            className="relative"
            key={index}
            href={e.link}
            target="_blank"
            rel="noreferrer"
          >
            <button className="div-style1 md:pb-4.5 w-full rounded-3xl px-6 pb-3 pt-4 text-center shadow-none drop-shadow-lg transition-all hover:scale-110 md:px-9 md:pt-6">
              <Image
                src={e.icon}
                alt="Event icon"
                height={60}
                width={60}
                className="mx-auto mb-4 h-6 md:h-8"
              />
              <p className="text-md">{e.name}</p>
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}

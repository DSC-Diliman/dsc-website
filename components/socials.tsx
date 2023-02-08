import Image from "next/image";
import ParallaxObject from "./parallax-object";

export default function Socials() {
  return (
    <section className="relative px-10 py-10">
      <div
        className="
				mx-auto grid max-w-max grid-cols-2 gap-8
				lg:grid-cols-3
			"
      >
        <div
          className="
					relative col-span-2 flex flex-col justify-center
				"
        >
          <ParallaxObject
            className="absolute -left-6 -z-10 h-20 w-20 rounded-full bg-amber-300"
            y={[0, 200]}
          />
          <ParallaxObject
            className="absolute left-12 -z-10 h-10 w-10 rounded-full bg-blue-300"
            y={[200, 400]}
          />
          <ParallaxObject
            className="absolute left-36 -z-10 h-10 w-10 rounded-full bg-red-300"
            y={[0, 100]}
          />
          <h1 className="relative">Reach us</h1>
          <p className="relative text-base">in our socials!</p>
        </div>
        <div></div>
        <div></div>
        {[
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
        ].map((e, index) => (
          <a
            className="relative"
            key={index}
            href={e.link}
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="
							div-style1 w-full p-7 pb-6 text-center transition-shadow
							hover:shadow-none
							md:px-10 md:py-7
						"
            >
              <Image
                src={e.icon}
                alt="Event icon"
                height={50}
                width={50}
                className="mx-auto mb-4 h-6 md:h-8"
              />
              <p className="text-sm">{e.name}</p>
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}

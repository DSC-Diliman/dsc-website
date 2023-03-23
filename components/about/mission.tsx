import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="pt-10 pb-12 text-center md:px-10 md:py-20">
      <h1 className="text-2xl font-black text-[#7c100f]">MISSION</h1>
      <p className="mt-2 mb-10 text-base md:text-lg">
        We, as an organization, aim to
      </p>
      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center xl:gap-20">
        {[
          {
            title: "Empower",
            desc: "people through technology and programming education",
            image: "/images/dot_empower.png",
          },
          {
            title: "Enlighten",
            desc: "members with the right tools to address local issues through data",
            image: "/images/dot_enlighten.png",
          },
          {
            title: "Create",
            desc: "meaningful technological solutions for the community",
            image: "/images/dot_create.png",
          },
        ].map((e) => (
          <div
            key={e.title}
            className="flex items-center gap-10 md:flex-col md:px-1 md:py-4 md:px-4"
          >
            <div
              className="img-frame mx-auto h-20 w-20 rounded-full sm:h-32 sm:w-32 md:mb-10"
              style={{ position: "relative" }}
            >
              <Image
                src={e.image}
                alt="Mission image"
                height={480}
                width={480}
              />
            </div>
            <div className="w-56 text-left md:text-center">
              <p className="mb-2 text-xl font-medium md:text-2xl">{e.title}</p>
              <p className="text-base">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

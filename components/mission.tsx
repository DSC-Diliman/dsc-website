import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="pt-10 pb-12 text-center md:px-10 md:py-20">
      <h1 className="text-2xl font-black text-[#7c100f]">MISSION</h1>
      <p className="text-base md:text-lg mt-2 mb-10">We, as an organization, aim to</p>
      <div className="flex flex-col gap-10 xl:gap-20 items-center md:justify-center md:flex-row">
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
          <div key={e.title} className="flex gap-10 items-center md:px-1 md:py-4 md:flex-col md:px-4">
            <div
              className="img-frame mx-auto md:mb-10 h-20 w-20 rounded-full sm:h-32 sm:w-32"
              style={{ position: "relative" }}
            >
              <Image
                src={e.image}
                alt="Mission image"
                height={480}
                width={480}
              />
            </div>
            <div className="text-left w-56 md:text-center">
              <p className="mb-2 text-xl font-medium md:text-2xl">{e.title}</p>
              <p className="text-base">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

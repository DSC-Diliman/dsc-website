import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="p-4 text-center md:p-10">
      <h1 className="text-2xl font-black text-[#7c100f]">MISSION</h1>
      <p className="mt-2 mb-6">We, as an organization, aim to</p>
      <div className="flex justify-center">
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
          <div key={e.title} className="max-w-sm px-1 py-4 md:px-4">
            <div
              className="img-frame mx-auto mb-10 h-20 w-20 rounded-full sm:h-32 sm:w-32"
              style={{ position: "relative" }}
            >
              <Image
                src={e.image}
                alt="Mission image"
                height={480}
                width={480}
              />
            </div>
            <p className="mb-2 text-lg font-medium md:text-2xl">{e.title}</p>
            <p className="text-xs sm:text-base">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

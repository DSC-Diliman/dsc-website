import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    {
      name: "Email",
      icon: "/images/gmail-icon.svg",
      link: "mailto:dscdiliman@gmail.com",
    },
  ];

  const socialsJSX = socials.map((e, index) => (
    <Link
      className="relative"
      key={index}
      href={e.link}
      target="_blank"
      rel="noreferrer"
    >
      <button className="div-style1 md:pb-4.5 w-full rounded-3xl px-6 pb-4 pt-5 text-center shadow-none drop-shadow-lg transition-all hover:scale-110 md:px-9 md:pt-6">
        <Image
          src={e.icon}
          alt="Event icon"
          height={60}
          width={60}
          className="mx-auto mb-4 h-6 md:h-8"
        />
        <p className="text-md">{e.name}</p>
      </button>
    </Link>
  ));

  return (
    <section className="relative mx-auto max-w-max">
      <motion.div
        className="absolute -left-10 top-0 -z-10 h-20 w-20 rounded-full bg-amber-300/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute left-14 top-60 -z-10 h-12 w-12 rounded-full bg-blue-300/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute left-36 top-20 -z-10 h-14 w-14 rounded-full bg-red-300/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <div className="grid grid-cols-2 gap-y-3 gap-x-6 lg:gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl">Reach us</h1>
          <p className="text-base">in our socials!</p>
        </div>
        {socialsJSX}
      </div>
    </section>
  );
}

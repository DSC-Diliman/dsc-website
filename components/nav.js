import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 mx-8 mt-6 h-14 px-8 flex rounded-2xl items-center frosted shadow-lg">
      <Link href="/">
        <Image
          src="/images/dsc-upd-logo.png"
          alt="Developer Student Clubs UP Diliman Logo"
          width={183}
          height={30}
          quality={100}
        />
      </Link>

      <div className="flex-grow" />

      <div className="flex w-80 flex-nowrap items-baseline justify-between">
        {[
          { page: "About", style: "btn-style1-blue" },
          { page: "Team", style: "btn-style1-red" },
          { page: "Events", style: "btn-style1-green" },
          { page: "Projects", style: "btn-style1-yellow" }].map(e => (
            <Link key={e.page.toLowerCase()} href={e.page.toLowerCase()}>
              <button className={"rounded-lg px-2 " + e.style}>{e.page}</button>
            </Link>
          ))}
      </div>
    </nav>
  )
}
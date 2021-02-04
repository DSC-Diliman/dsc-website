import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 mx-8 mt-6 h-14 px-8 flex rounded-2xl items-center frosted shadow-lg z-10">
      <Link href="/">
        <button>
          <img
            src="/images/dsc-upd-logo-small.png"
            alt="Developer Student Clubs Logo"
          />
        </button>
      </Link>

      <div className="flex-grow" />

      <div className="flex w-96 flex-nowrap items-baseline justify-between">
        {[
          { page: "About", style: "btn-style1-blue" },
          { page: "Team", style: "btn-style1-red" },
          { page: "Events", style: "btn-style1-green" },
          { page: "Projects", style: "btn-style1-yellow" }].map(({ page, style }) => (
            <Link key={page.toLowerCase()} href={'/' + page.toLowerCase()}>
              <button className={"rounded-lg px-3 py-0.5 " + style}>{page}</button>
            </Link>
          ))}
      </div>
    </nav>
  )
}
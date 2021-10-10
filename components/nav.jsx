import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Nav({ className }) {
  const router = useRouter();

  return (
    <nav className={`fixed inset-x-0 top-0 md:mx-10 md:mt-6 h-12 md:h-14 px-3 md:px-10 py-2 md:py-3 flex md:rounded-2xl items-stretch frosted shadow-lg ${className}`}>
      <Link href="/">
        <button className="flex-shrink-0 py-0.5">
          <img
            className="h-full hidden sm:block"
            src="/images/dsc-upd-logo-small.png"
            alt="Developer Student Clubs Logo"
          />
          <img
            className="h-full block sm:hidden"
            src="/images/dsc-logo-small.png"
            alt="Home"
          />
        </button>
      </Link>

      <div className="flex-grow" />

      <div className="flex items-stretch sm:w-96 justify-between">
        {[
          {
            page: "About",
            style: "btn-style1-blue",
            selected: "btn-style1-blue-selected"
          },
          {
            page: "Team",
            style: "btn-style1-red",
            selected: "btn-style1-red-selected"
          },
          {
            page: "Events",
            style: "btn-style1-green",
            selected: "btn-style1-green-selected"
          },
          {
            page: "Projects",
            style: "btn-style1-yellow",
            selected: "btn-style1-yellow-selected"
          }
        ].map(({ page, style, selected }) => {
          const href = '/' + page.toLowerCase()
          return (
            <Link
              key={page.toLowerCase()}
              href={href}
            >
              <button className={`rounded-lg mx-0.5 px-2 md:px-3 ${style} ${router.pathname == href ? selected : null}`}>{page}</button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
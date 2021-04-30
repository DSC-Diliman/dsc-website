import Link from "next/link"
import { useRouter } from "next/router"

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="fixed inset-x-0 top-0 mx-10 mt-6 h-14 px-8 flex rounded-2xl items-center frosted shadow-lg">
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
              <button className={`rounded-lg px-3 py-0.5 ${style} ${router.pathname == href ? selected : null}`}>{page}</button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
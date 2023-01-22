import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={`fixed inset-x-0 top-0 md:mx-10 md:mt-6 h-12 md:h-14 px-3 md:px-10 pt-2 md:py-3 flex md:rounded-2xl items-stretch frosted shadow-lg z-10`}>
      <Link href="/">
        <button className="flex-shrink-0">
					<Image
						src="/images/dsc-upd-logo.png"
						width={220}
						height={33.6}
					/>
        </button>
      </Link>

      <div className="flex-grow" />

      <div className="flex items-stretch sm:w-96 justify-between">
        {[
					{
						page: "Home",
						style: "btn-style1-yellow",
						selected: "btn-style1-yellow-selected"
					},
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
          const href = `/${page === "Home" ? '' : page.toLowerCase()}`
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
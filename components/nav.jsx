import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="
			fixed inset-x-0 top-0 h-12 px-3 pt-2 flex items-stretch frosted shadow-lg z-10
			md:h-14 md:mx-10 md:mt-6 md:px-10 md:py-3 md:rounded-2xl
		">
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

      <div className="flex items-stretch justify-between sm:w-96">
        {[
					{
						page: "Home",
						normalStyle: "btn-style1-yellow",
						selectedStyle: "btn-style1-yellow-selected"
					},
          {
            page: "About",
            normalStyle: "btn-style1-blue",
            selectedStyle: "btn-style1-blue-selected"
          },
          {
            page: "Team",
            normalStyle: "btn-style1-red",
            selectedStyle: "btn-style1-red-selected"
          },
          {
            page: "Events",
            normalStyle: "btn-style1-green",
            selectedStyle: "btn-style1-green-selected"
          },
          {
            page: "Projects",
            normalStyle: "btn-style1-yellow",
            selectedStyle: "btn-style1-yellow-selected"
          }
        ].map(({ page, normalStyle, selectedStyle }) => {
          const href = page === "Home" ? '/' : `/${page.toLowerCase()}`
          return (
            <Link
              key={page.toLowerCase()}
              href={href}
            >
              <button className={`
								rounded-lg mx-0.5 px-2 ${router.pathname === href ? selectedStyle : normalStyle}
								md:px-3
							`}>
								{page}
							</button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
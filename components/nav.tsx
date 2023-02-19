import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <nav
      className="
			frosted fixed inset-x-0 top-0 z-50 px-4 py-2 shadow-lg
			md:mx-10 md:mt-6 md:flex md:h-14 md:justify-center md:rounded-2xl md:px-10 md:py-3
			"
    >
      <div
        className="
				flex justify-center py-2
				md:mr-5 md:flex-none md:py-0
			"
      >
        <Link href="/">
          <button>
            <Image
              src="/images/dsc-upd-logo.png"
              alt="Organization logo"
              width={220}
              height={33.6}
            />
          </button>
        </Link>
      </div>

      <div
        className="
				mb-2 flex items-stretch justify-evenly
				md:ml-auto md:mb-0 md:w-96 md:items-center md:justify-between
				"
      >
        {[
          {
            page: "Home",
            normalStyle: "btn-style1-default",
            selectedStyle: "btn-style1-default-selected",
          },
          {
            page: "About",
            normalStyle: "btn-style1-blue",
            selectedStyle: "btn-style1-blue-selected",
          },
          {
            page: "Team",
            normalStyle: "btn-style1-red",
            selectedStyle: "btn-style1-red-selected",
          },
          {
            page: "Events",
            normalStyle: "btn-style1-green",
            selectedStyle: "btn-style1-green-selected",
          },
          {
            page: "Projects",
            normalStyle: "btn-style1-yellow",
            selectedStyle: "btn-style1-yellow-selected",
          },
        ].map(({ page, normalStyle, selectedStyle }) => {
          const href = page === "Home" ? "/" : `/${page.toLowerCase()}`;
          return (
            <Link key={page.toLowerCase()} href={href}>
              <button
                className={`
								mx-0.5 rounded-lg px-2 ${router.pathname === href ? selectedStyle : normalStyle}
								md:px-3 md:py-1
								`}
              >
                {page}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

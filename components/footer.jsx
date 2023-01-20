import Copyright from "./copyright"
import Socials from "./socials"
import Sitemap from "./sitemap"

export default function Footer({ children }) {
  return (
    <footer className="flex flex-col content-center space-y-2 py-6 md:py-10 text-center">
			<div className="flex justify-center gap-x-20">
				<Socials />
				<Sitemap />
			</div>
			<Copyright />
      {children}
    </footer>
  )
}

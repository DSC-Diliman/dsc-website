import Copyright from "./copyright"
import Sitemap from "./sitemap"

export default function Footer({ children }) {
  return (
    <footer className="flex flex-col content-center space-y-2 py-6 md:py-10 text-xs md:text-sm text-center">
			<Sitemap />
			<Copyright />
      {children}
    </footer>
  )
}

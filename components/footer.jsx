import Copyright from "./copyright";
import Socials from "./socials";
import Sitemap from "./sitemap";

export default function Footer() {
  return (
    <footer
      className="
			flex flex-col content-center space-y-2 py-8 text-center
			md:py-10
		"
    >
      <div
        className="
				md:flex md:justify-center md:gap-x-8
				lg:gap-x-20
			"
      >
        <Socials />
        <Sitemap />
      </div>
      <Copyright />
      <p className="text-xs italic">Oblation photo by Mila D. Aguilar.</p>
    </footer>
  );
}

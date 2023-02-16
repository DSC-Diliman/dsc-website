import Copyright from "./copyright";
import Socials from "./socials";
import Sitemap from "./sitemap";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col justify-center gap-y-3 py-12 text-center">
      <div className="md:flex md:justify-center md:gap-x-8 lg:gap-x-20">
        <Socials />
        <Sitemap />
      </div>
      <Copyright />
    </footer>
  );
}

import Copyright from "./copyright";
import Socials from "./socials";
import Sitemap from "./sitemap";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-3 py-12 text-center">
      <div className="flex flex-col justify-center gap-16 xl:flex-row xl:gap-28">
        <Socials />
        <Sitemap />
      </div>
      <Copyright />
    </footer>
  );
}

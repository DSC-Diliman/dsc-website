import Link from "next/link";
import Em from "./em";
import indexHeroStyle from "/components/IndexHero.module.scss";

export default function Landing() {
  return (
    <section className="relative flex min-h-screen flex-row items-center md:pt-10">
      <div className={indexHeroStyle["mobile-hero"]} />
      <div className="w-full bg-white/60 p-8 backdrop-blur-md backdrop-filter sm:w-1/2 sm:bg-transparent md:pl-20 md:pr-10 md:pt-24 md:pb-10 md:backdrop-filter-none">
        <div className="mx-auto max-w-xl">
          <h1 className="mb-2 text-2xl md:mb-10 md:text-3xl lg:text-4xl xl:text-5xl">
            <Em emClassName="bg-[#7b1113]/20 right-4 bottom-1 lg:bottom-2">
              Grow. Learn. Connect.
            </Em>
          </h1>
          <p className="mb-4 md:mb-10">
            The <b>GDSC UP Diliman Chapter</b> is part of a global community of
            over 1500 universities.
          </p>
          <Link href="/about">
            <button className="btn-style2-default">About Us</button>
          </Link>
        </div>
      </div>
      <div className={`hidden sm:block ${indexHeroStyle.hero}`}>
        <div>
          <div />
        </div>
        <div />
      </div>
    </section>
  );
}

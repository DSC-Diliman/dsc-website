import Image from "next/image";
import Link from "next/link";
import Underline from "../utils/underline";

export default function Landing() {
  return (
    <section className="relative flex min-h-screen flex-row items-center">
      <div className="absolute block h-full w-full sm:hidden">
        <Image
          className="h-full object-cover"
          src="/images/index-hero.png"
          alt="Oblation statue"
          width={600}
          height={600}
        />
      </div>
      <div className="w-full bg-white/60 p-8 backdrop-blur-md backdrop-filter sm:w-1/2 sm:bg-transparent md:pl-20 md:pr-10 md:pt-24 md:pb-10 md:backdrop-filter-none">
        <div className="mx-auto max-w-xl">
          <h1 className="mb-2 text-2xl md:mb-10 md:text-3xl lg:text-4xl xl:text-5xl">
            <Underline className="right-4 bottom-1 bg-[#7b1113]/20 lg:bottom-2">
              Grow. Learn. Connect.
            </Underline>
          </h1>
          <p className="my-4 text-base md:mb-10">
            The <b>GDSC UP Diliman Chapter</b> is part of a global community of
            over 1500 universities.
          </p>
          <Link href="/about">
            <button className="btn-style2-default">About Us</button>
          </Link>
        </div>
      </div>
      <div className="relative hidden sm:block sm:h-screen">
        <Image
          src="/images/index-hero.png"
          alt="Oblation statue with background"
          className="top-0 h-full w-full object-cover"
          style={{
            WebkitMaskImage: "url('/images/index-hero-mask.png')",
            WebkitMaskSize: "cover",
          }}
          height={600}
          width={600}
        />
        <Image
          src="/images/index-hero-main.png"
          alt="Oblation statue only"
          className="absolute top-0 h-full w-full object-cover"
          height={600}
          width={600}
        />
      </div>
    </section>
  );
}

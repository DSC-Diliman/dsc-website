import ParallaxImage from "./parallax-image";

export default function Description() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-10 py-12 text-center md:px-10 md:py-32">
      <h1 className="mt-20 text-2xl sm:text-3xl md:mt-0 md:text-4xl">
        What is GDSC-UPD?
      </h1>
      <ParallaxImage
        src="images/about-hero.png"
        className="mx-auto mt-4 mb-12 h-52 w-full max-w-5xl bg-cover sm:mt-4 sm:mb-12 sm:h-64 md:my-6 md:h-80 lg:h-96"
      />
      <p className="mb-8 max-w-2xl text-lg md:mb-4 md:max-w-4xl lg:max-w-4xl">
        Ever since its fruition in India, the Developer Student Clubs has grown
        globally and currently has over 1500 chapters spread across over 150
        countries, with the Philippines having 41 of those chapters.
      </p>
      <p className="max-w-2xl text-lg md:max-w-3xl lg:max-w-4xl">
        In other words, the GDSC UP Diliman Chapter is part of a{" "}
        <b>global community</b>.
      </p>
    </section>
  );
}

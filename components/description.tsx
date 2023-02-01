import ParallaxImage from "./parallax-image";

export default function Description() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-4 py-12 text-center md:px-10 md:py-24">
      <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl">
        What is GDSC-UPD?
      </h1>
      <ParallaxImage
        src="images/about-hero.png"
        className="mx-auto my-4 h-52 w-full max-w-5xl bg-cover sm:h-64 md:my-8 md:h-96"
      />
      <p className="mx-auto max-w-3xl text-base">
        Ever since its fruition in India, the Developer Student Clubs has grown
        globally and currently has over 1500 chapters spread across over 150
        countries, with the Philippines having 41 of those chapters. In other
        words, the GDSC UP Diliman Chapter is part of a <b>global community</b>.
      </p>
    </section>
  );
}

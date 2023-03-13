import LinkGroup from "./link-group";

export default function Sitemap() {
  const sections = [
    {
      head: {
        text: "About",
        href: "about",
        show: true,
      },
      links: [
        {
          text: "Vision",
          href: "vision",
        },
        {
          text: "Mission",
          href: "mission",
        },
      ],
    },
    {
      head: {
        text: "Events",
        href: "events",
        show: true,
      },
      links: [
        {
          text: "Featured",
          href: "featured",
        },
        {
          text: "All Events",
          href: "all-events",
        },
      ],
    },
    {
      head: {
        text: "Team",
        href: "team",
        show: true,
      },
      links: [
        {
          text: "Executive",
          href: "executive",
        },
        {
          text: "Technology",
          href: "technology",
        },
        {
          text: "Operations",
          href: "operations",
        },
        {
          text: "Communications",
          href: "communications",
        },
      ],
    },
    {
      head: {
        text: "",
        href: "team",
        show: false,
      },
      links: [
        {
          text: "Finance and Externals",
          href: "finance-and-externals",
        },
        {
          text: "Human Resources",
          href: "human-resources",
        },
        {
          text: "Web Development",
          href: "web-dev",
        },
      ],
    },
  ];
  const sitemapJSX = sections.map(({ head, links }, index) => (
    <LinkGroup key={index} head={head} links={links} />
  ));
  return (
    <section className="mb-11 grid grid-cols-2 justify-items-center gap-10 px-10 text-base md:mb-0 md:flex md:flex-wrap md:justify-center">
      {sitemapJSX}
    </section>
  );
}

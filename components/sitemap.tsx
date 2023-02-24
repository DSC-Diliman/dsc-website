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
        {
          text: "Finance and Externals",
          href: "finance-and-externals",
        },
        {
          text: "Web Development",
          href: "web-dev",
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
  ];
  const sitemapJSX = sections.map(({ head, links }, index) => (
    <LinkGroup key={index} head={head} links={links} />
  ));
  return (
    <section className="mb-11 flex justify-center gap-x-14 text-base md:mb-0">
      {sitemapJSX}
    </section>
  );
}

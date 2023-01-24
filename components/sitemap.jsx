import LinkGroup from "./link-group"

export default function Sitemap() {
	const sections = [
		{
			head: {
				text: "About",
				href: "about",
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
			]
		},
		{
			head: {
				text: "Team",
				href: "team",
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
			]
		},
	]
	const sitemapJSX = sections.map(({head, links}, index) => <LinkGroup key={index} head={head} links={links} />)
	return (
		<section className="
			flex justify-center gap-x-12 mt-7 mb-11 text-base
			md:gap-x-16
		">
			{sitemapJSX}
		</section>
	)
}

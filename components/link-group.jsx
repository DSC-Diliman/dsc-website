export default function LinkGroup({head, links}) {
	const linksJSX = links.map(({text, href}) => (
		<a className="block py-2.5" href={`${head.href}#${href}`}>{text}</a>
	))
	return (
		<div className="text-left">
			<a className="font-bold block py-2.5" href={`${head.href}`}>{head.text}</a>
			{linksJSX}
		</div>
	)
}
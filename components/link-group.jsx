import Link from "next/link"

export default function LinkGroup({head, links}) {
	const linksJSX = links.map(({text, href}) => (
		<Link href={`${head.href}#${href}`}>
			<a className="block py-2.5" href={`${head.href}#${href}`}>{text}</a>
		</Link>
	))
	return (
		<div className="text-left">
			<Link href={`${head.href}`}>
				<a className="font-bold block py-2.5" href={`${head.href}`}>{head.text}</a>
			</Link>
			{linksJSX}
		</div>
	)
}
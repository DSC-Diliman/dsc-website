import Link from "next/link"

export default function LinkGroup({head, links}) {
	const linksJSX = links.map(({text, href}) => (
		<Link href={`${head.href}#${href}`}>
			<p className="block py-2.5 cursor-pointer hover:underline" href={`${head.href}#${href}`}>{text}</p>
		</Link>
	))
	return (
		<div className="text-left">
			<Link href={`${head.href}`}>
				<p className="font-bold block py-2.5 cursor-pointer hover:underline" href={`${head.href}`}>{head.text}</p>
			</Link>
			{linksJSX}
		</div>
	)
}
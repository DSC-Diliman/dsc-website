import Link from "next/link";

interface SitemapElement {
  text: string;
  href: string;
}

interface Props {
  head: SitemapElement;
  links: SitemapElement[];
}

export default function LinkGroup({ head, links }: Props) {
  const linksJSX = links.map(({ text, href }, index) => (
    <Link key={index} href={`${head.href}#${href}`}>
      <p className="block cursor-pointer py-2 hover:underline md:py-2.5">
        {text}
      </p>
    </Link>
  ));
  return (
    <div className="w-32 text-left">
      {head.text ? (
        <Link href={`${head.href}`}>
          <p className="block cursor-pointer py-2.5 font-bold hover:underline">
            {head.text}
          </p>
        </Link>
      ) : (
        <p className="block cursor-default py-2.5 font-bold">&nbsp;</p>
      )}
      {linksJSX}
    </div>
  );
}

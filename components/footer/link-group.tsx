import Link from "next/link";
import { SitemapElement } from "../../types/sitemap-element";

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
    <div className="w-28 text-left">
      <Link href={`${head.href}`}>
        {head.text ? (
          <p className="block cursor-pointer py-2.5 font-bold hover:underline">
            {head.text}
          </p>
        ) : (
          <p className="block cursor-default py-2.5 font-bold">&nbsp;</p>
        )}
      </Link>
      {linksJSX}
    </div>
  );
}

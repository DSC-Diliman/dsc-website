import { unified } from "unified";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await unified().use(html).process(markdown);
  return result.toString();
}

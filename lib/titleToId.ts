export default function titleToId(title: string): string {
  return title.toLowerCase().replace(" ", "-");
}

export default function shorten(s: string): string {
  const tokens = s.split(" ");
  if (tokens.length <= 2) {
    return s;
  } else {
    return tokens.slice(0, 2).join(" ") + "...";
  }
}

import { parseISO, format } from "date-fns";

interface Props {
  dateTime: string;
  dateFormat?: string;
  func?: (s: string) => string;
}

export default function FormattedDate({
  dateTime,
  dateFormat = "MMMM d, yyyy",
  func = (s) => s,
}: Props) {
  return (
    <time dateTime={dateTime}>{format(parseISO(dateTime), dateFormat)}</time>
  );
}

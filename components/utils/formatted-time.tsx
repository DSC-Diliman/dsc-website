import { parseISO, format } from "date-fns";

interface Props {
  dateTime: string;
  timeFormat?: string;
}

export default function FormattedTime({
  dateTime,
  timeFormat = "h:mm aaaa",
}: Props) {
  return (
    <time dateTime={dateTime}>{format(parseISO(dateTime), timeFormat)}</time>
  );
}

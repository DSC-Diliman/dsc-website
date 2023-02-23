import { parseISO, format } from "date-fns";

interface Props {
  dateTime: string;
  dateFormat?: string;
}

export default function FormattedDate({
  dateTime,
  dateFormat = "MMMM d, yyyy",
}: Props) {
  return (
    <time dateTime={dateTime}>{format(parseISO(dateTime), dateFormat)}</time>
  );
}

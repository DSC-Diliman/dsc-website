import { format, parseISO } from "date-fns";

export default function sameDay(date1: string, date2: string): boolean {
  const dateFormat = "MMMM d, yyyy";
  return (
    format(parseISO(date1), dateFormat) === format(parseISO(date2), dateFormat)
  );
}

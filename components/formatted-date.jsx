import { parseISO, format } from 'date-fns'

export default function FormattedDate({ dateTime, dateFormat = "MMMM d, yyyy", func = string => string }) {
  return (
    <time dateTime={dateTime}>
      {func(format(parseISO(dateTime), dateFormat))}
    </time>
  )
}
import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateTime, dateFormat = "MMMM d, yyyy", func = string => string }) {
  return (
    <time dateTime={dateTime}>
      {func(format(parseISO(dateTime), dateFormat))}
    </time>
  )
}
import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateTime }) {
  return (
    <time dateTime={dateTime}>
      {format(parseISO(dateTime), "MMMM e, yyyy")}
    </time>
  )
}
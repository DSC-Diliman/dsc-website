import { parseISO, format } from 'date-fns'

export default function TimeFormatter({ dateTime }) {
  return (
    <time dateTime={dateTime}>
      {format(parseISO(dateTime), "h:mm a")}
    </time>
  )
}
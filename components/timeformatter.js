import { parseISO, format } from 'date-fns'

export default function TimeFormatter({ dateTime, timeFormat = "h:mm a" }) {
  return (
    <time dateTime={dateTime}>
      {format(parseISO(dateTime), timeFormat)}
    </time>
  )
}
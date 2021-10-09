export default function getEventColor(eventType) {
  switch (eventType) {
    case "Speaker Sessions":
      return "bg-red-600"
    case "Internal":
      return "bg-blue-500"
    case "Workshops":
      return "bg-green-500"
    case "Tech Solutions":
      return "bg-yellow-300"
    default:
      return "bg-gray-600"
  }
}
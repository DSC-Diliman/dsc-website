export default function getEventColor(eventType: string) {
  switch (eventType) {
    case "Speaker Sessions":
      return "bg-red-600";
    case "Internal":
      return "bg-blue-500";
    case "Workshops":
      return "bg-emerald-500";
    case "Tech Solutions":
      return "bg-amber-300";
    default:
      return "bg-gray-600";
  }
}

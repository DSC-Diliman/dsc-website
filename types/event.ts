export interface Event {
  id: string;
  title: string;
  date: string;
  dateEnd: string;
  eventType: "Speaker Sessions" | "Internal" | "Workshops" | "Tech Solutions";
  location: string;
  locationURL: string;
  images: string[];
  summary: string;
  body?: string;
}

export function isEvent(object: any): object is Event {
  return object.hasOwnProperty("date");
}

export function isArrayOfEvents(array: any[]): array is Event[] {
  return array.length > 0 && isEvent(array[0]);
}

export interface EventInCMS {
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

export function isEventInCMS(object: any): object is EventInCMS {
  return object.hasOwnProperty("date");
}

export function isArrayOfEventsInCMS(array: any[]): array is EventInCMS[] {
  return array.length > 0 && isEventInCMS(array[0]);
}

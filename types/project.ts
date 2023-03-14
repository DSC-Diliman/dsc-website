export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
  body?: string;
}

export function isProject(object: any): object is Project {
  return object.hasOwnProperty("title") && object.hasOwnProperty("thumbnail");
}

export function isArrayOfProjects(array: any[]): array is Project[] {
  return array.length > 0 && isProject(array[0]);
}

export interface ProjectInCMS {
  title: string;
  thumbnail: string;
  images: string[];
  body?: string;
}

export function isProjectInCMS(object: any): object is ProjectInCMS {
  return object.hasOwnProperty("title") && object.hasOwnProperty("thumbnail");
}

export function isArrayOfProjectsInCMS(array: any[]): array is ProjectInCMS[] {
  return array.length > 0 && isProjectInCMS(array[0]);
}

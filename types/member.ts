export interface Member {
  id: string;
  name: string;
  year: number;
  team:
    | "Executive"
    | "Technology"
    | "Operations"
    | "Communications"
    | "Finance and Externals"
    | "Web Development";
  position: string;
  thumbnail: string;
  quote: string;
  facebookURL?: string;
  twitterURL?: string;
  linkedinURL?: string;
  githubURL?: string;
  body?: string;
}

export function isMember(object: any): object is Member {
  return object.hasOwnProperty("name");
}

export function isArrayOfMembers(array: any[]): array is Member[] {
  return array.length > 0 && isMember(array[0]);
}

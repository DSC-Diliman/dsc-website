export interface MemberInCMS {
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

export function isMemberInCMS(object: any): object is MemberInCMS {
  return object.hasOwnProperty("name");
}

export function isArrayOfMembersInCMS(array: any[]): array is MemberInCMS[] {
  return array.length > 0 && isMemberInCMS(array[0]);
}

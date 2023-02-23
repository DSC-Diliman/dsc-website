import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseISO, isWithinInterval, compareDesc } from "date-fns";
import {
  EventInCMS,
  isArrayOfEventsInCMS,
  isEventInCMS,
} from "../types/event-in-cms";
import {
  isArrayOfMembersInCMS,
  isMemberInCMS,
  MemberInCMS,
} from "../types/member-in-cms";
import { isProjectInCMS, ProjectInCMS } from "../types/project-in-cms";

const postsDirectory = path.join(process.cwd(), "posts");

type Collection = "projects" | "events" | "members";

interface DateInterval {
  start: Date;
  end: Date;
}

// Given a `collection` in the CMS, returns a list of all filenames under that collection.

function getAllFilenames(collection: Collection): string[] {
  const collectionDirectory = path.join(postsDirectory, collection);
  if (!fs.existsSync(collectionDirectory)) {
    return [];
  }
  const filenames = fs.readdirSync(collectionDirectory);
  return filenames.map((filename) => filename.replace(/\.md$/, ""));
}

// Given a `collection` in the CMS and the `id` of a record in that collection,
// returns an object where property-value pairs match
// those originally indicated in the Markdown file's frontmatter.

function getRecordById(
  collection: Collection,
  id: string
): MemberInCMS | ProjectInCMS | EventInCMS | {} {
  const filepath = path.join(postsDirectory, collection, `${id}.md`);
  const fileContents = fs.readFileSync(filepath, "utf-8");

  const { data, content } = matter(fileContents);
  data.id = id;
  data.body = content;

  const result = JSON.parse(JSON.stringify(data));

  if (isMemberInCMS(result) || isProjectInCMS(result) || isEventInCMS(result)) {
    return result;
  } else {
    return {};
  }
}

// Given a `collection` in the CMS,
// returns a list of objects where each object's property-value pairs match
// those originally indicated in the Markdown file's frontmatter.

function getRecords(
  collection: Collection
): MemberInCMS[] | ProjectInCMS[] | EventInCMS[] | {}[] {
  return getAllFilenames(collection).map((filename) =>
    getRecordById(collection, filename)
  );
}

// CMS Project data getters

export function getProjectIds(): string[] {
  return getAllFilenames("projects");
}

export function getProjectById(id: string): ProjectInCMS | {} {
  const record = getRecordById("projects", id);
  if (isProjectInCMS(record)) {
    return record;
  } else {
    return {};
  }
}

export function getProjects(): ProjectInCMS[] | {}[] {
  return getRecords("projects");
}

// CMS Event data getters

export function getEventIds() {
  return getAllFilenames("events");
}

export function getEventById(id: string): EventInCMS | {} {
  return getRecordById("events", id);
}

export function getEvents(): EventInCMS[] | {}[] {
  const records = getRecords("events");
  if (isArrayOfEventsInCMS(records)) {
    return records.sort((a, b) =>
      compareDesc(parseISO(a.date), parseISO(b.date))
    );
  } else {
    return records;
  }
}

export function getEventsInInterval({
  start,
  end,
}: DateInterval): EventInCMS[] | {}[] {
  const events = getEvents();
  if (isArrayOfEventsInCMS(events)) {
    return events.filter(({ date }) =>
      isWithinInterval(parseISO(date), { start, end })
    );
  } else {
    return events;
  }
}

// CMS Member data getter

export function getTeam(wantedTeam: string): MemberInCMS[] | {}[] {
  const records = getRecords("members");
  if (isArrayOfMembersInCMS(records)) {
    return records.filter(({ team }) => team === wantedTeam);
  } else {
    return records;
  }
}

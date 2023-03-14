import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseISO, isWithinInterval, compareDesc } from "date-fns";
import { Event, isArrayOfEvents, isEvent } from "../types/event";
import { isArrayOfMembers, isMember, Member } from "../types/member";
import { isProject, Project } from "../types/project";

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
): Member | Project | Event | {} {
  const filepath = path.join(postsDirectory, collection, `${id}.md`);
  const fileContents = fs.readFileSync(filepath, "utf-8");

  const { data, content } = matter(fileContents);
  data.id = id;
  data.body = content;

  const result = JSON.parse(JSON.stringify(data));

  if (isMember(result) || isProject(result) || isEvent(result)) {
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
): Member[] | Project[] | Event[] | {}[] {
  return getAllFilenames(collection).map((filename) =>
    getRecordById(collection, filename)
  );
}

// CMS Project data getters

export function getProjectIds(): string[] {
  return getAllFilenames("projects");
}

export function getProjectById(id: string): Project | {} {
  const record = getRecordById("projects", id);
  if (isProject(record)) {
    return record;
  } else {
    return {};
  }
}

export function getProjects(): Project[] | {}[] {
  return getRecords("projects");
}

// CMS Event data getters

export function getEventIds() {
  return getAllFilenames("events");
}

export function getEventById(id: string): Event | {} {
  return getRecordById("events", id);
}

export function getEvents(): Event[] | {}[] {
  const records = getRecords("events");
  if (isArrayOfEvents(records)) {
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
}: DateInterval): Event[] | {}[] {
  const events = getEvents();
  if (isArrayOfEvents(events)) {
    return events.filter(({ date }) =>
      isWithinInterval(parseISO(date), { start, end })
    );
  } else {
    return events;
  }
}

// CMS Member data getter

export function getTeam(wantedTeam: string): Member[] | {}[] {
  const records = getRecords("members");
  if (isArrayOfMembers(records)) {
    return records.filter(({ team }) => team === wantedTeam);
  } else {
    return records;
  }
}

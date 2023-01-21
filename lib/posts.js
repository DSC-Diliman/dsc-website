import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { compareAsc, parseISO, isWithinInterval } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

// Given a `collection` in the CMS, returns a list of all filenames under that collection.

function getAllFilenames(collection) {
	const collectionDirectory = path.join(postsDirectory, collection)
	if (!fs.existsSync(collectionDirectory)) {
		return []
	}
	const filenames = fs.readdirSync(collectionDirectory)
	return filenames.map(filename => filename.replace(/\.md$/, ''))
}

// Given a `collection` in the CMS, the `id` of a record in that collection,
// and certain `fields` of that record, returns an object where property-value pairs match
// those originally indicated in the Markdown file's frontmatter.

function getRecordById(collection, id, fields) {
	const filepath = path.join(postsDirectory, collection, `${id}.md`)
	if (!fs.existsSync(filepath)) {
		return {}
	}
	const fileContents = fs.readFileSync(filepath, "utf-8")
	const { data } = matter(fileContents, {
		engines: {
			yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA })
		}
	})
	const recordObject = { id }
	fields.forEach(field => {
		if (data[field]) {
			recordObject[field] = data[field]
		}
	})
	return recordObject
}

// Given a `collection` in the CMS and certain `fields` of records in that collection,
// returns a list of objects where each object's property-value pairs match
// those originally indicated in the Markdown file's frontmatter.

function getRecords(collection, fields) {
	return getAllFilenames(collection)
		.map(filename => getRecordById(collection, filename, fields))
}

// CMS Project data getters

export function getProjectIds() {
	return getAllFilenames("projects")
}

export function getProjectById(id, fields) {
  return getRecordById("projects", id, fields)
}

export function getProjects(fields) {
  return getRecords("projects", fields)
}

// CMS Event data getters

export function getEventIds() {
	return getAllFilenames("events")
}

export function getEventById(id, fields) {
  return getRecordById("events", id, fields)
}

export function getEvents(fields) {
  return getRecords("events", fields)
    .sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)))
}

export function getEventsInInterval(fields, { start, end }) {
  return getEvents(fields).filter(({ date }) =>
    isWithinInterval(
      parseISO(date),
      { start, end }
    )
  )
}

// CMS Member data getter

export function getTeam(wantedTeam, fields) {
	return getRecords("members", fields)
		.filter(({ team }) => team === wantedTeam)
}
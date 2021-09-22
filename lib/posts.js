import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { compareAsc, parseISO, isWithinInterval } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

function getPostIds(category) {
  const categoryDirectory = path.join(postsDirectory, category)
  if (!fs.existsSync(categoryDirectory)) return []
  const fileNames = fs.readdirSync(categoryDirectory)
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '')
  })
}

function getPostById(category, id, fields) {
  const fullPath = path.join(postsDirectory, category, `${id}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents, {
    engines: {
      yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA })
    }
  })

  const postData = { id }

  if (fields == null) {
    Object.assign(postData, data, { content })

  } else {
    fields.forEach((field) => {
      if (field === "content") {
        postData[field] = content
      }

      if (data[field]) {
        postData[field] = data[field]
      }
    })
  }

  return postData
}

function getPosts(category, fields) {
  const ids = getPostIds(category)

  const posts = ids
    .map(id => getPostById(category, id, fields))

  return posts
}

// CMS Project data getters

export function getProjectById(id, fields) {
  return getPostById("projects", id, fields)
}

export function getProjectIds() {
  return getPostIds("projects")
}

export function getProjects(fields) {
  return getPosts("projects", fields)
}

// CMS Event data getters

export function getEventById(id, fields) {
  return getPostById("events", id, fields)
}

export function getEventIds() {
  return getPostIds("events")
}

export function getEvents(fields) {
  return getPosts("events", fields)
    .sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)))
}

export function getEventsInterval(fields, { start, end }) {
  return getEvents(fields).filter(({ date }) =>
    isWithinInterval(
      parseISO(date),
      { start, end }
    )
  )
}

// CMS Team data getters

export function getExecData(fields) {
  return getPosts("exec", fields)
}

export function getTechData(fields) {
  return getPosts("tech", fields)
}

export function getOpsData(fields) {
  return getPosts("ops", fields)
}

export function getCommsData(fields) {
  return getPosts("comms", fields)
}

export function getExteFinData(fields) {
  return getPosts("extefin", fields)
}
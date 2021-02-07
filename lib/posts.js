import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compareAsc, parseISO, isWithinInterval } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostIds(category) {
  const categoryDirectory = path.join(postsDirectory, category)
  const fileNames = fs.readdirSync(categoryDirectory)
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '')
  })
}

export function getPostById(category, id, fields) {
  const fullPath = path.join(postsDirectory, category, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

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

export function getPosts(category, fields) {
  const ids = getPostIds(category)

  const posts = ids
    .map(id => getPostById(category, id, fields))

  return posts
}

export function getProjects(fields) {
  return getPosts("projects", fields)
}

export function getEvents(fields) {
  return getPosts("events", fields)
    .sort((a, b) => compareAsc(parseISO(a.dateStartISO), parseISO(b.dateStartISO)))
}

export function getEventsInterval(fields, { start, end }) {
  return getEvents(fields).filter(({ dateStartISO }) =>
    isWithinInterval(
      parseISO(dateStartISO),
      { start, end }
    )
  )
}
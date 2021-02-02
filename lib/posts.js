import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
    fields.forEach((field) => {
      if (field === "content") {
        postData[field] = content
      }

      if (data[field]) {
        postData[field] = data[field]
      }
    })
  } else {
    Object.assign(postData, data, { content })
  }

  return postData
}

export function getPosts(category, fields) {
  const ids = getPostIds(category)

  const posts = ids
    .map(id => getPostById(category, id, fields))

  return posts
}

export function getSortedPosts(category, fields = []) {
  // Sort posts by date
  return getPosts(category, fields)
    .sort((a, b) => a.date < b.date ? 1 : -1)
}
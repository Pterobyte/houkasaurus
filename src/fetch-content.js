const fs = require('fs').promises
const path = require('path')
const fetch = require('node-fetch')
const { omit } = require('lodash')
const YAML = require('json2yaml')

const jsonToFrontmatter = (json = {}) => `${YAML.stringify(json)}\n---\n`

const addFrontmatterToPage = (item = {}) => {
  const meta = omit(item, ['content'])
  return {
    ...item,
    content: jsonToFrontmatter(meta) + item.content,
  }
}
const addFrontmatterToContent = (items = [{}]) => {
  const meta = items.map((item) => omit(item, ['content']))
  return items.map((item, i) => ({
    ...item,
    content: jsonToFrontmatter(meta[i]) + item.content,
  }))
}
const contentDir = path.join(__dirname, '../content')
const dirExists = async (dir = '') => !!(await fs.stat(dir).catch((_) => false))
const mkDirIfNotExists = async (dir = '') =>
  (await dirExists(dir)) || (await fs.mkdir(dir))
const safeFilename = (name = '') =>
  name.toLowerCase().replace(/[^a-z0-9]/gi, '_')
const titleToFilename = (title = '') => safeFilename(title) + '.md'

const writeFiles = async ({ content = [{}], folder = '' }) => {
  await mkDirIfNotExists(`${contentDir}/${folder}`)
  return Promise.all(
    content.map(async (item) => {
      return fs.writeFile(
        `${contentDir}/${folder}/${titleToFilename(item.title)}`,
        item.content
      )
    })
  )
}
const writeFile = async (item = {}, folder = '') => {
  await mkDirIfNotExists(`${contentDir}/${folder}`)
  return fs.writeFile(
    `${contentDir}${folder ? '/' : ''}${folder}/README.md`,
    item.content || ''
  )
}

const appendComponents = (item = {}, components = ['']) => {
  return {
    ...item,
    content: `${item.content}\n${components.join('\n')}`,
  }
}

/**
 *
 * @param {string} contentAPI - API to fetch content from (e.g. 'https://api.mysite.com')
 * @param {string} resource - resource name to fetch (e.g. 'articles')
 * @param {{ components?:[''], readme?:'', landing?:'landing', path?: '/' }} config - optional configurations
 */
const fetchContent = async (contentAPI, resource, config = {}) => {
  if (!contentAPI) {
    throw new Error('contentAPI is required')
  } else if (!resource) {
    throw new Error('resource is required')
  }
  const {
    components = [''],
    readme = '',
    landing = 'landing',
    path = '/',
  } = config
  const folder = resource === landing ? '' : resource
  const res = await fetch(`${contentAPI}${path}${resource}`)
  const body = await res.json()
  const content =
    body instanceof Array
      ? addFrontmatterToContent(body)
      : addFrontmatterToPage(body)
  const contentWithComponents =
    content instanceof Array
      ? content.map((item) => appendComponents(item, components))
      : appendComponents(content, components)
  const sortedContent =
    contentWithComponents instanceof Array
      ? contentWithComponents.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )
      : contentWithComponents
  const files =
    sortedContent instanceof Array
      ? await writeFiles({ content: sortedContent, folder })
      : await writeFile(sortedContent, folder)
  if (readme) {
    await writeFile({ content: readme }, folder)
  }
  console.log(
    `Successfully wrote ${files ? files.length : 'page:'} ${resource}!`
  )
  return contentWithComponents
}

module.exports = fetchContent

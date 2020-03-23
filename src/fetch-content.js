const fs = require('fs').promises
const path = require('path')
const dotenv = require('dotenv-defaults')
const fetch = require('node-fetch')
const AbortController = require('abort-controller')
const { omit } = require('lodash')

const controller = new AbortController()
const { signal, abort } = controller
const timeout = setTimeout(() => abort, 300)

dotenv.config()

const jsonToFrontmatter = json => `---\n${JSON.stringify(json, null, 2)}\n---\n`

const addFrontmatterToPage = item => {
  const meta = omit(item, ['content'])
  return {
    ...item,
    content: jsonToFrontmatter(meta) + item.content
  }
}
const addFrontmatterToContent = items => {
  const meta = items.map(item => omit(item, ['content']))
  return items.map((item, i) => ({
    ...item,
    content: jsonToFrontmatter(meta[i]) + item.content
  }))
}
const contentDir = path.join(__dirname, '../content')
const dirExists = async dir => !!(await fs.stat(dir).catch(e => false))
const mkDirIfNotExists = async dir => {
  const exists = await dirExists(dir)
  if (!exists) {
    await fs.mkdir(dir)
  }
}
const titleToFilename = title => title.toLowerCase().replace(/ /g, '_') + '.md'

const writeFiles = ({ content, folder }) =>
  Promise.all(
    content.map(async item => {
      await mkDirIfNotExists(`${contentDir}/${folder}`)
      return fs.writeFile(
        `${contentDir}/${folder}/${titleToFilename(item.title)}`,
        item.content
      )
    })
  )
const writeFile = async (item = {}, folder = '') => {
  await mkDirIfNotExists(`${contentDir}/${folder}`)
  return fs.writeFile(
    `${contentDir}${folder ? '/' : ''}${folder}/README.md`,
    item.content
  )
}
const handleError = (error, resource) => {
  console.error(`Error fetching ${resource}: ${error.message}`)
  if (process.env.DEBUG === 'true') {
    console.error(error.stack)
  }
}

const contentAPI = 'https://cms.houk.space'

const fetchContent = async (resource = '') => {
  try {
    const folder = resource === 'landing' ? '' : resource
    const res = await fetch(`${contentAPI}/${resource}`, { signal })
    const body = await res.json()
    const content =
      body instanceof Array
        ? addFrontmatterToContent(body)
        : addFrontmatterToPage(body)
    const files =
      content instanceof Array
        ? await writeFiles({ content, folder })
        : await writeFile(content, folder)
    console.log(
      `Successfully wrote ${files ? files.length : 'page'} ${resource}!`
    )
  } catch (error) {
    handleError(error, resource)
  } finally {
    clearTimeout(timeout)
  }
}

fetchContent('articles')
fetchContent('projects')
fetchContent('companies')
fetchContent('links')
fetchContent('about')
fetchContent('landing')

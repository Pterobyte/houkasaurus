const fs = require('fs').promises
const path = require('path')
const dotenv = require('dotenv-defaults')
const fetch = require('node-fetch')
const { omit } = require('lodash')
const YAML = require('json2yaml')

dotenv.config()

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
const mkDirIfNotExists = async (dir = '') => {
  const exists = await dirExists(dir)
  if (!exists) {
    await fs.mkdir(dir)
  }
}
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

const contentAPI = 'https://cms.houk.space'

const fetchContent = async ({
  resource = '',
  components = [''],
  readme = '',
}) => {
  const folder = resource === 'landing' ? '' : resource
  const res = await fetch(`${contentAPI}/${resource}`)
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

const components = {
  BuyMeACoffee: '<BuyMeACoffee />',
  Disqus:
    '<Disqus shortname="houk" :identifier="$page.key" :url="`https://jt.houk.space${$page.path}`" :language="$lang" :title="$page.title"/>',
  Newsletter: '<Newsletter />',
  Projects: '<Projects />',
}

const articleComponents = [components.Newsletter, components.Disqus]
const landingComponents = [components.Newsletter]

try {
  fetchContent({ resource: 'articles', components: articleComponents })
  fetchContent({
    resource: 'projects',
    readme: `---\nsidebar: false\n---\n${components.Projects}`,
  })
  fetchContent({ resource: 'companies' })
  fetchContent({ resource: 'links' })
  fetchContent({ resource: 'about' })
  fetchContent({ resource: 'landing', components: landingComponents })
} catch (error) {
  console.error(error)
  process.exit(1)
}

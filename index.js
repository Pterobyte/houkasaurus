require('dotenv-defaults').config()
const fs = require('fs').promises
const fetch = require('node-fetch')
const path = require('path')
const { fetchToMarkdown } = require('fetch-to-markdown')

const contentAPI = process.env.CMS_API
const contentDir = path.join(`${__dirname}/content`)

const components = {
  Comments: '<Comments />',
  Newsletter: '<Newsletter />',
  Cards: '<Cards />',
  Landing: '<Landing />',
}

const articleComponents = [components.Newsletter, components.Comments]
const landingComponents = [components.Landing]

const fetchGHReadme = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/HoukasaurusRex/HoukasaurusRex/master/README.md'
  )
  const md = await res.text()
  await fs.rmdir(`${contentDir}/about`, { recursive: true })
  await fs.mkdir(`${contentDir}/about`)
  await fs.writeFile(`${contentDir}/about/README.md`, md)
}

const fetchAllContent = () =>
  Promise.all([
    fetchToMarkdown(contentAPI, 'articles', {
      components: articleComponents,
      contentDir: `${contentDir}/articles`,
    }),
    fetchToMarkdown(contentAPI, 'projects', {
      readme: `---\nsidebar: false\n---\n${components.Cards}`,
      contentDir: `${contentDir}/projects`,
    }),
    fetchToMarkdown(contentAPI, 'companies', {
      contentDir: `${contentDir}/companies`,
    }),
    fetchToMarkdown(contentAPI, 'links', { contentDir: `${contentDir}/links` }),
    fetchToMarkdown(contentAPI, 'landing', {
      components: landingComponents,
      contentDir: `${contentDir}/`,
    }),
  ])

fetchGHReadme().catch((error) => {
  console.error(error)
  process.exit(1)
})
fetchAllContent().catch((error) => {
  console.error(error)
  process.exit(1)
})

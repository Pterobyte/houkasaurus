require('dotenv-defaults').config()
const path = require('path')
const { fetchToMarkdown } = require('fetch-to-markdown')

const contentAPI = process.env.CMS_API
const contentDir = path.join(`${__dirname}/content`)

const components = {
  Comments: '<Comments />',
  Newsletter: '<Newsletter />',
  Cards: '<Cards />',
  Landing: '<Landing><Newsletter /></Landing>',
}

const articleComponents = [components.Newsletter, components.Comments]
const landingComponents = [components.Landing]

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
    fetchToMarkdown(contentAPI, 'about', { contentDir: `${contentDir}/about` }),
    fetchToMarkdown(contentAPI, 'landing', {
      components: landingComponents,
      contentDir: `${contentDir}/`,
    }),
  ])

fetchAllContent().catch((error) => {
  console.error(error)
  process.exit(1)
})

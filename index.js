require('dotenv-defaults').config()
const { fetchToMarkdown } = require('fetch-to-markdown')

const contentAPI = process.env.CMS_API

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
    }),
    fetchToMarkdown(contentAPI, 'projects', {
      readme: `---\nsidebar: false\n---\n${components.Cards}`,
    }),
    fetchToMarkdown(contentAPI, 'companies'),
    fetchToMarkdown(contentAPI, 'links'),
    fetchToMarkdown(contentAPI, 'about'),
    fetchToMarkdown(contentAPI, 'landing', {
      components: landingComponents,
    }),
  ])

fetchAllContent().catch((error) => {
  console.error(error)
  process.exit(1)
})

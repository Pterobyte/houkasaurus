require('dotenv-defaults').config()
const fetchContent = require('./src/fetch-content')

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
    fetchContent(contentAPI, 'articles', { components: articleComponents }),
    fetchContent(contentAPI, 'projects', {
      readme: `---\nsidebar: false\n---\n${components.Cards}`,
    }),
    fetchContent(contentAPI, 'companies'),
    fetchContent(contentAPI, 'links'),
    fetchContent(contentAPI, 'about'),
    fetchContent(contentAPI, 'landing', {
      components: landingComponents,
    }),
  ])

fetchAllContent().catch((error) => {
  console.error(error)
  process.exit(1)
})

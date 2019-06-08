const dotenv = require('dotenv-defaults')
const paperCMS = require('dropbox-paper-cms')
const vueConfig = require('../content/.vuepress/config')

dotenv.config()

const options = {
  dropboxApiToken: process.env.DROPBOX_API_TOKEN,
  config: vueConfig,
  contentDir: 'content',
  tabsList: ['blog']
}
paperCMS(options)
  .then(docs => console.log(`Successfully wrote ${docs.length} docs!`))
  .catch(console.error)

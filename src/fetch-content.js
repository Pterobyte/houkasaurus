const dotenv = require('dotenv-defaults')
const paperCMS = require('dropbox-paper-cms')
const vueConfig = require('../content/.vuepress/config')

dotenv.config()

const options = {
  dropboxApiToken: process.env.DROPBOX_API_TOKEN,
  contentDir: 'content',
  tabsList: ['blog']
}
paperCMS
  .fetchPaperDocs(options)
  .then(docs => paperCMS.generateContent(docs, contentDir))
  .then(docs => paperCMS.generateConfig(docs, vueConfig))
  .catch(console.error)

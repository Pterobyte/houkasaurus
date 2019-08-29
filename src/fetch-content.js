const path = require('path')
const dotenv = require('dotenv-defaults')
const paperCMS = require('dropbox-paper-cms')
const vueConfig = require('../content/.vuepress/config')

dotenv.config()

const contentDir = path.join(__dirname, '../content')
const options = {
  dropboxApiToken: process.env.DROPBOX_API_TOKEN,
  contentDir,
  folders: ['blog', 'projects']
}

paperCMS
  .fetchPaperDocs(options)
  .then(docs => paperCMS.generateContent(docs, contentDir))
  .then(docs => paperCMS.generateConfig(docs, contentDir, vueConfig))
  // .then(docs => console.log(docs))
  .catch(console.error)

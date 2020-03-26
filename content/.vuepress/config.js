require('dotenv-defaults').config()
const getConfig = require('vuepress-bar')

const articles = getConfig(`${__dirname}/../articles`)
const projects = getConfig(`${__dirname}/../projects`)

module.exports = {
  title: 'JT Houk',
  description: 'Entrepreneur, Writer, and Fullstack Node.js Software Developer',
  serviceWorker: true,
  ga: process.env.GA_ID,
  evergreen: true,
  plugins: {
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.created_at && new Date($page.frontmatter.created_at),
      modifiedAt: $page => $page.updated_at && new Date($page.updated_at)
    },
    'vuepress-plugin-mailchimp': {
      endpoint: process.env.MC_API,
      title: 'Subscribe',
      content: 'Get my latest posts. No spam.',
      submitText: 'Subscribe',
      popupConfig: {
        enabled: popupEnabled = true,
        timeout: popupTimeout = 4000
      }
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'HoukasaurusRex',
    author: 'JT Houk',
    domain: 'jt.houk.space',
    smoothScroll: true,
    env: {
      CMS_API: process.env.CMS_API,
      DISQUS_API_KEY: process.env.DISQUS_API_KEY
    },
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
      {
        text: 'Articles',
        link: `/articles/${articles.sidebar[0]}`
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Contact',
        link: 'mailto:jt@houk.space?subject=Hello%20From%20Your%20Site&body='
      }
    ],
    sidebar: {
      '/articles/': articles.sidebar,
      '/projects/': projects.sidebar
    }
  }
}
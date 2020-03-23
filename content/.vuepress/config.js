module.exports = {
  "title": "JT Houk",
  "description": "Entrepreneur, Writer, and Senior Fullstack Node.js Software Developer",
  "serviceWorker": true,
  "ga": "UA-146443449-1",
  "evergreen": true,
  "plugins": {
    'seo': {
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
      modifiedAt: $page => $page.updated_at && new Date($page.updated_at),
    }
  },
  "head": [
    [
      "meta",
      {
        "property": "og:title",
        "content": "JT Houk"
      }
    ],
    [
      "meta",
      {
        "property": "og:description",
        "content": "Entrepreneur, Writer, and Senior Fullstack Node.js Software Developer"
      }
    ],
    [
      "meta",
      {
        "property": "og:image",
        "content": "https://jt.houk.space/itsme-round-200.png"
      }
    ],
    [
      "meta",
      {
        "property": "og:type",
        "content": "website"
      }
    ],
    [
      "meta",
      {
        "property": "og:author",
        "content": "JT Houk"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "themeConfig": {
    "repo": "HoukasaurusRex",
    "nav": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "Projects",
        "link": "/projects/"
      },
      {
        "text": "Blog",
        "link": "/blog/"
      },
      {
        "text": "About",
        "link": "/about/"
      },
      {
        "text": "Contact",
        "link": "mailto:jt@houk.space?subject=Hello%20From%20Your%20Site&body="
      }
    ],
    "sidebar": {
      "/blog/": [
        "a-weekly-commute-in-podcasts",
        "agile-cooking",
        "how-to-configure-ssl-on-aliyun-dns-for-an-aws-application-load-balancer-for-0"
      ],
      "/projects/": [
        "akkadu",
        "doomsday-clock",
        "dropbox-paper-cms",
        "furun-adventures",
        "proxy-worker",
        "site-shot",
        "vue-beijing"
      ]
    }
  }
}
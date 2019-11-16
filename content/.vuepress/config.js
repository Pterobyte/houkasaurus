module.exports = {
  "title": "JT Houk",
  "description": "Entrepreneur, Writer, and Senior Fullstack Node.js Software Developer",
  "serviceWorker": true,
  "ga": "UA-146443449-1",
  "evergreen": true,
  "head": [
    [
      "meta",
      {
        "property": "og:title",
        "description": "JT Houk"
      },
      "meta",
      {
        "property": "og:description",
        "description": "Entrepreneur, Writer, and Senior Fullstack Node.js Software Developer"
      },
      "meta",
      {
        "property": "og:image",
        "description": "/logo.png"
      },
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "themeConfig": {
    "repo": "pterobyte",
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
        "link": "mailto:jt.houk@outlook.com?subject=Hello&body="
      }
    ],
    "sidebar": {
      "/blog/": [
        "a-weekly-commute-in-podcasts",
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
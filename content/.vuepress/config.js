module.exports = {
  "title": "JT",
  "description": " ",
  "serviceWorker": true,
  "ga": "UA-146443449-1",
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
        "",
        "how-to-bypass-censorship-with-shadowsocks"
      ],
      "/projects/": [
        "",
        "akkadu",
        "doomsday-clock",
        "dropbox-paper-cms",
        "furun-adventures",
        "proxy-worker",
        "site-shot",
        "vue-beijing"
      ]
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "evergreen": true
}
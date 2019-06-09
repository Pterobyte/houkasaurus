module.exports = {
  "title": "JT Houk",
  "description": " ",
  "themeConfig": {
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
      }
    ],
    "sidebar": {
      "/projects/": [
        "",
        "akkadu",
        "dropbox-paper-cms"
      ],
      "/blog/": [
        "",
        "how-to-create-an-api-reference-for-your-node-app-with-swagger",
        "how-to-publish-a-half-decent-npm-module",
        "how-to-use-dropbox-paper-as-a-headless-cms"
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
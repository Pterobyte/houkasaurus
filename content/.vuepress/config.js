module.exports = {
  "title": "JT",
  "description": " ",
  "serviceWorker": true,
  "ga": "UA-146443449-1",
  "themeConfig": {
    repo: 'pterobyte',
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
        "link": "/blog/how-to-use-dropbox-paper-as-a-headless-cms"
      },
      {
        "text": "Contact",
        "link": "mailto:jt.houk@outlook.com?subject=Hello&body="
      }
    ],
    "sidebar": {
      "/blog/": [
        "how-to-use-dropbox-paper-as-a-headless-cms",
        "cook-like-a-programmer",
        "how-to-create-an-api-reference-for-your-node-app-with-swagger",
        "how-to-make-a-cli-tool-in-node",
        "how-to-publish-a-half-decent-npm-module",
        "several-ways-to-display-download-progress"
      ],
      "/projects/": [
        "akkadu",
        "dropbox-paper-cms",
        "furun-adventures",
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
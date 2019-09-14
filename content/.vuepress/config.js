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
        "text": "Contact",
        "link": "mailto:jt.houk@outlook.com?subject=Hello&body="
      }
    ],
    "sidebar": {
      "/blog/": [
        "bash-functions-to-make-development-more-fun",
        "cook-like-a-programmer",
        "customizing-your-mail-signatures",
        "express-app-design-principles-in-serverless-world",
        "how-to-create-an-api-reference-for-your-node-app-with-swagger",
        "how-to-make-a-cli-tool-in-node",
        "how-to-publish-a-half-decent-npm-module",
        "how-to-use-dropbox-paper-as-a-headless-cms",
        "making-an-http-proxy-using-cloudflare-workers",
        "several-ways-to-display-download-progress"
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
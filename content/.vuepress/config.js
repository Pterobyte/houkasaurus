module.exports = {
  title: 'VuePress Boilerplate',
  description: 'Custom boilerplate for quickly creating CMS sites with Vuepress',
  base: '/vuepress-boilerplate/', // sets baseDir
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'VuePress Docs', link: 'https://vuepress.vuejs.org/guide/' },
      ],
      sidebar: {
          '/guide/': [
              '',
              'getting-started',
              'deploying',
          ]
      }
  }
}
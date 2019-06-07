module.exports = {
  title: 'JT Houk',
  description: 'Fullstack Philosopher',
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Projects', link: '/projects/' },
        { text: 'Blog', link: '/blog/' },
      ],
      sidebar: {
          '/projects/': [
              '',
          ],
          '/blog/': [
              '',
          ]
      }
  }
}
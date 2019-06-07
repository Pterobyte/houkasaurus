module.exports = {
  title: 'JT Houk',
  description: 'Fullstack Philosopher',
  base: '/', // sets baseDir
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
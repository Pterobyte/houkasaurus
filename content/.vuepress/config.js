module.exports = {
  title: 'JT Houk',
  description: ' ',
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Projects', link: '/projects/' },
        { text: 'Blog', link: '/blog/' },
      ],
      sidebar: {
          '/projects/': [
              '',
              'akkadu',
              'dropbox-paper-cms'
          ],
          '/blog/': [
              '',
          ]
      }
  },
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  evergreen: true,
}
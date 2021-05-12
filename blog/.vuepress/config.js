module.exports = {
  description: 'Just playing around',
  // base: '/blog',
  title: 'Sin の website',
  head: [
    ['link', { rel: 'icon', href: './public/favicon.ico' }]
  ],
  host: '172.16.5.32',
  dest: 'docs',
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: '编程',
        link: '/'
      },
      {
        text: '算法',
        link: '/algorithm/'
      }
    ]
  },
  footer: {
    contact: [
      {
        type: 'github',
        link: 'https://github.com/x-fox'
      }
    ]
  }
}
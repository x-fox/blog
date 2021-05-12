module.exports = {
  description: 'Just playing around',
  base: '/blog/',
  title: 'Sin の website',
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
      },
      {
        text: '随笔',
        link: '/essay/'
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
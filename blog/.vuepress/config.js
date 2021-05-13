module.exports = {
  description: 'Just playing around',
  base: '/blog/',
  title: 'Sin の website',
  // host: '172.16.5.32',
  dest: 'docs',
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: '编程',
        link: '/'
      },
      {
        text: '标签',
        link: '/tag/'
      },
      {
        text: '随笔',
        link: '/writings/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/x-fox'
        },
        {
          type: 'mail',
          link: 'mailto:laoxindeyouxiang@163.com'
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        },
      ],
    },
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
        },
      },
      {
        id: 'writing', // Unique id for current classifier
        dirname: '_writings', // Matched directory name
        path: '/writings/', // Entry page for current classifier
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter:{ //Front matter for entry page.
          tag: 'vuepress'
        },
        // itemLayout: 'Writing', // Layout for matched pages.
        // itemPermalink: '/writings/:year/:month/:day/:slug', // Permalink for matched pages.
        // pagination: { // Pagination behavior
        //   lengthPerPage: 2,
        // },
      }
    ]
  },
}
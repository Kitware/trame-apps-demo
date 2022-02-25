module.exports = {
  siteConfig: {
    title: 'Trame applications'
  },
  theme: './theme',
  permalinks: {
    post: '/apps/:slug',
    page: '/:slug'
  },
  themeConfig: {
    nav: [
      {
        text: 'Applications',
        link: '/apps/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      },
    ]
  },
  plugins: [
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        paginationOptions: {
          perPage: 2
        }
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-search'
    }
  ]
}

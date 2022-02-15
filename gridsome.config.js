// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.130.211:1337',  // strapi url
        queryLimit: 1000, // Defaults to 100  // 查询数量限制
        contentTypes: ['post', 'tag'], // 需要查询的类型
        singleTypes: ['general']
      }
    }
  ],

  templates: {
    // 所需graphql数据
    StrapiPost: [
      {
        path: "/post/:id",
        component: "./src/templates/Post.vue"
      }
    ],

    // 标签模板
    StrapiTag: [
      {
        path: "/tag/:id",
        component: "./src/templates/Tag.vue"
      }
    ],
  }
}

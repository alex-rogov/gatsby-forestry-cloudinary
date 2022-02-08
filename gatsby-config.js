module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-cloudinary',
    'gatsby-transformer-remark',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: 'src/components',
          assets: 'src/assets',
          containers: 'src/containers',
          utils: 'src/utils',
          types: 'src/types',
        },
        extensions: ['ts', 'tsx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/src/content/products`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
  ],
};

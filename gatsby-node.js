const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    console.error(errors.message);
  }

  if (!data) {
    console.log('No markdown files were found.');
    return;
  }

  const templates = {
    blogPost: path.resolve('src/templates/blog-post.tsx'),
  };

  data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {

      createPage({
        path: slug,
        component: templates.blogPost,
        context: {
          slug,
        },
      });
    },
  );
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      allBlogPosts: {
        type: `[File!]!`,
        // args   : { limit: `Int`, skip: `Int` },
        async resolve(source, args, context, info) {
          const { entries } = await context.nodeModel.findAll({
            query: {
              // limit : args.limit,
              // skip  : args.skip,
              filter: {
                internal: { mediaType: { eq: 'text/markdown' } },
                sourceInstanceName: { eq: 'blog' },
              },
            },
            type: `File`,
          });
          return entries;
        },
      },
      allProducts: {
        type: `[File!]!`,
        // args   : { limit: `Int`, skip: `Int` },
        async resolve(source, args, context, info) {
          const { entries } = await context.nodeModel.findAll({
            query: {
              // limit : args.limit,
              // skip  : args.skip,
              filter: {
                internal: { mediaType: { eq: 'text/markdown' } },
                sourceInstanceName: { eq: 'products' },
              },
            },
            type: `File`
          });
          return entries;
        },
      },
      getFrontPage: {
        type: `File`,
        async resolve(source, args, context, info) {
          const node = await context.nodeModel.findOne({
            query: {
              filter: {
                internal: { mediaType: { eq: 'text/markdown' } },
                sourceInstanceName: { eq: 'pages' },
                childMarkdownRemark: { fields: { slug: { eq: '/frontpage/' } } },
              },
            },
            type: `File`,
          });
          return node;
        },
      },
    },
  });
};

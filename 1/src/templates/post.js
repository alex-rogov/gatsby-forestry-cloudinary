import React from 'react';
import { graphql, Link } from 'gatsby';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post">
      <h1>{frontmatter.title || 'default'}</h1>
      <Link to={frontmatter.related_posts.related_post}>Link</Link>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        related_posts {
          related_post
        }
      }
    }
  }
`;

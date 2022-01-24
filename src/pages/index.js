import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const IndexPage = () => {
  const { data } = useStaticQuery(graphql`
    query {
      allGlobalYaml {
        edges {
          node {
            categories {
              data
              machine_learning
              trust
            }
          }
        }
      }
    }
  `);

  return (
    <main>
      {console.log(data)}
      Sourcing markdown recipe (see page at{` `}
      <Link to="my-first-post">/my-first-post</Link>)
    </main>
  );
};

export default IndexPage;

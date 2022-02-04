import * as React from 'react';
import * as Sections from 'containers/home';
import oliuLogo from 'assets/images/logos/oliu.svg';
import proofLogo from 'assets/images/logos/proof.svg';
// TODO: make resizable
import openatbLogo from 'assets/images/logos/openatb.svg';
import { useStaticQuery, graphql } from 'gatsby';
import logoRoles from 'assets/images/general/home-roles.jpg';

// TODO: put into markdown
const products = [
  {
    title: 'Building the next generation of digital identity systems.',
    content:
      'A verifiable credential issuance and exchange platform that evolves to meet changing needs and improves digital interactions between companies and their customers.',
    image: {
      href: 'google.com',
      src: oliuLogo,
    },
  },
  {
    title: 'A digital wallet for your identity',
    content:
      'Using verifiable digital credentials, proof makes it possible to collect and share portable, borderless, and encrypted virtual identifiers.',
    image: {
      href: 'google.com',
      src: proofLogo,
    },
  },
  {
    title: 'Providing developers and problem solvers with resources to design, build, and innovate.',
    content:
      'Connecting global developers to the data catalogues they need to create connected, next-generation experiences for their customers.',
    image: {
      href: 'google.com',
      src: openatbLogo,
    },
  },
];

const Index: React.FC = () => {
  // TODO: resolve types
  const {
    markdownRemark: {
      frontmatter: {
        intro_title,
        intro_description,
        intro_action_label,
        intro_action_link,
        products_title,
        products_description,
        products_action_label,
        life_at_atb_title,
        life_at_atb_description,
        life_at_atb_action_label,
        life_at_atb_action_link,
      },
    },
  } = useStaticQuery(graphql`
    query getFrontPage {
      markdownRemark {
        frontmatter {
          hero_title
          hero_description
          intro_title
          intro_description
          intro_action_label
          intro_action_link
          products_title
          products_description
          products_action_label
          life_at_atb_title
          life_at_atb_description
          life_at_atb_action_label
          life_at_atb_action_link
          life_at_atb_logo
          blog_title
          blog_action_label
          blog_action_link
        }
      }
    }
  `);

  return (
    <div>
      <Sections.AboutUs
        {...{
          title: intro_title,
          description: intro_description,
          button: { url: intro_action_link, text: intro_action_label },
        }}
      />
      {
        <Sections.Products
          {...{
            title: products_title,
            description: products_description,
            button: { text: products_action_label },
            products,
          }}
        />
      }
      <Sections.Roles
        {...{
          title: life_at_atb_title,
          description: life_at_atb_description,
          button: { url: life_at_atb_action_link, text: life_at_atb_action_label },
          logo: logoRoles,
        }}
      />
    </div>
  );
};

export default Index;

import * as React from 'react';
import * as Sections from 'containers/home';
import { useStaticQuery, graphql } from 'gatsby';
import logoRoles from 'assets/images/general/home-roles.jpg';
import postPreview1 from 'assets/images/general/post-preview-1.jpg';
import postPreview2 from 'assets/images/general/post-preview-2.jpg';
import postPreview3 from 'assets/images/general/post-preview-3.jpg';
import { Seo } from 'components/meta';
import { Wrapper } from './index.style';

// TODO: put into markdown
const posts = [
  {
    title: 'What Is the Metaverse?',
    tag: 'Insights',
    minutesToRead: 4,
    content:
      "The metaverse is likely a concept you’ve heard about numerous times in the last few weeks, but my guess is that it isn’t one you confidently explain to your grandmother just yet, and that’s okay. In this blog we walk through where the metaverse concept came from, where it's going, and why it matters.",
    image: {
      href: 'google.com',
      src: postPreview1,
    },
  },
  {
    title: 'The Scenarios of 2030+: Scenario Archetypes Driven by Data',
    tag: 'Culture',
    minutesToRead: 4,
    content:
      'Building out scenarios that reflect how markets evolve helps us understand an increasingly competitive future. This whitepaper walks you through our methodology and four scenarios: baseline, growth, decay, and new equilibrium.',
    image: {
      href: 'google.com',
      src: postPreview2,
    },
  },
  {
    title: 'Introducing Human-Centered Foresight',
    tag: 'Culture',
    minutesToRead: 4,
    content:
      'Foresight is increasingly becoming a well-respected and valued methodology for strategic planning by organizations and business leaders globally. As a still developing field, where can the power of foresight take us? And how can we adapt it to be more human-centric',
    image: {
      href: 'google.com',
      src: postPreview3,
    },
  },
];

const Index: React.FC = () => {
  // TODO: resolve types
  const {
    getFrontPage: {
      childMarkdownRemark: {
        frontmatter: {
          hero_title,
          hero_description,
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
          blog_title,
          blog_action_label,
          blog_action_link,
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
      getFrontPage {
        childMarkdownRemark {
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
    }
  `);

  return (
    <Wrapper>
      <Seo
        title="ATB Ventures"
        description="A thesis-driven global innovation lab leading everyone safely into the digital future"
        keywords="technology, venture capital, fintech, identity, innovation, trust, engineering, Alberta"
      />
      <Sections.Hero
        {...{
          title: hero_title,
          description: hero_description,
        }}
      />
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
      <Sections.Posts
        {...{
          title: blog_title,
          button: { url: blog_action_link, text: blog_action_label },
          posts,
        }}
      />
    </Wrapper>
  );
};

export default Index;

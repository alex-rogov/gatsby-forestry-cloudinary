import * as React from 'react';
import Helmet from 'react-helmet';
import favicon from 'assets/images/favicon/favicon.ico';
import favicon192 from 'assets/images/favicon/favicon-192.png';

type Props = {
  title: string;
  description: string;
  keywords: string;
};

export const Seo: React.FC<Props> = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

const Meta: React.FC = () => (
  <Helmet>
    <html lang="en" />
    <link rel="icon" href={favicon} sizes="any" />
    {/* TODO exclude favicon svg from being processed by gatsby-plugin-react-svg */}
    {/* TODO add media query for color-scheme preference in svg */}
    {/* <link rel="icon" href={vShapeLogo} type="image/png" /> */}
    <link rel="apple-touch-icon" href={favicon192} />
  </Helmet>
);

export default Meta;

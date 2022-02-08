import * as React from 'react';
import ConditonalWrapping from 'components/conditional-wrapping';
import { IconButton, Image } from 'theme-ui';
import { Wrapper, WrapperLinks, WrapperImages, Title, LinkItem, NavDivider } from './index.style';

export interface NavLink {
  href: string;
  text?: string;
  src?: string | React.ElementType;
}

export type Props = {
  title?: string;
  noDivider?: boolean;
  topLinks?: NavLink[];
  bottomLinks?: NavLink[];
};

const renderLinkContent = ({ text, src }: Omit<NavLink, 'href'>) => {
  const isElement = typeof src === 'function';
  const isImage = typeof src === 'string';

  if (!isImage && !isElement) {
    return text;
  }

  if (isImage) {
    return <Image src={String(src)} />;
  }

  if (isElement) {
    const Element: React.ElementType = src as React.ElementType;

    return (
      <IconButton>
        <Element />
      </IconButton>
    );
  }

  return null;
};

const renderLinks = (links: NavLink[]) => {
  const itemsToRender: [NavLink[]] = [[]];

  for (let i = 0, j = 0; i < links.length; i += 1) {
    const isLastText = links[i]?.src && !links[i - 1]?.src;
    const isLastImage = !links[i]?.src && links[i - 1]?.src;

    if ((i > 0 && isLastText) || isLastImage) {
      j += 1;
      itemsToRender.push([]);
    }

    itemsToRender[j].push(links[i]);
  }

  const wrapper = (children: React.ReactNode) => <WrapperImages>{children}</WrapperImages>;

  return itemsToRender.map((items, itemsIndex) => {
    const areItemsImages = !!items.find(({ src }) => src);

    return (
      <ConditonalWrapping
        key={items[itemsIndex].href ?? `nav-links-${itemsIndex}`}
        condition={areItemsImages}
        wrapper={wrapper}
      >
        {items.map(({ href, text, src }, index) => (
          <LinkItem key={text ?? `nav-link-${index}`} href={href}>
            {renderLinkContent({ text, src })}
          </LinkItem>
        ))}
      </ConditonalWrapping>
    );
  });
};

const NavItem: React.FC<Props> = ({ title, noDivider, topLinks, bottomLinks }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    <WrapperLinks>
      {topLinks && renderLinks(topLinks)}
      <NavDivider noDivider={noDivider} />
      {bottomLinks && renderLinks(bottomLinks)}
    </WrapperLinks>
  </Wrapper>
);

export default NavItem;

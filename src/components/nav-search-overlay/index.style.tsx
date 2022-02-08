import styled from '@emotion/styled';
import { Card, css, Text, Link, Flex } from 'theme-ui';

export const Wrapper = styled(Card)(css({}));

Wrapper.defaultProps = {
  variant: 'postPreview',
};

export const Main = styled(Flex)(css({ height: '100%', flexDirection: 'column', mt: 'xxs' }));

export const Title = styled(Text)(
  css({
    fontWeight: 'bold',
    my: 'xxs',
    mb: 'xs',
  }),
);

Title.defaultProps = {
  variant: 'h3',
};

export const Content = styled(Text)(
  css({
    color: 'primary',
    letterSpacing: [null, 'mediumS'],
  }),
);

Content.defaultProps = {
  variant: 'body',
};

export const ImageContent = styled(Link)(
  css({
    mb: 'xxs',
  }),
);

export const InformationItem = styled(Text)(css({ flex: 1, fontWeight: 'bold' }));

InformationItem.defaultProps = { variant: 'h7' };

export const Information = styled(Flex)(
  css({
    my: 'xs',
    '& > :last-child': { textAlign: 'end' },
  }),
);

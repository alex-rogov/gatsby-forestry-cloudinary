import styled from '@emotion/styled';
import { css, Flex, Text } from 'theme-ui';
import heroGradient from 'assets/images/general/home-hero-gradient.jpg';

export const Wrapper = styled(Flex)(
  css({
    backgroundImage: `url(${heroGradient})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    py: 'xxl',
    px: 's',
    flexDirection: 'column',
    alignItems: 'center',
  }),
);

export const Main = styled(Flex)(
  css({
    flexDirection: 'column',
    textAlign: 'center',
  }),
);

export const Title = styled(Text)(
  css({
    mb: ['xs', 's'],
    color: 'white',
    fontWeight: 'light',
  }),
);

Title.defaultProps = {
  variant: 'hero',
};

export const Description = styled(Text)(
  css({
    color: 'btnHover',
  }),
);

Description.defaultProps = {
  variant: 'h4',
};

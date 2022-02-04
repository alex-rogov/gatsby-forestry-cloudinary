import styled from '@emotion/styled';
import { css, Flex, Image, Text, Input, Label } from 'theme-ui';
import Button from 'components/ui/button';

export const Wrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    maxWidth: 'emailForm',
    gap: 'xs',
  }),
);

Wrapper.defaultProps = {
  as: 'form',
};

export const Main = styled(Flex)(
  css({
    flexDirection: 'column',
    gap: 'xs',
  }),
);

export const Logo = styled(Image)(
  css({
    width: 202,
    height: 26,
    mb: 'xs',
  }),
);

export const Title = styled(Text)(
  css({
    color: '#111B22',
    letterSpacing: 'mediumS',
  }),
);

Title.defaultProps = {
  variant: 'h7',
};

export const TextField = styled(Input)(
  css({
    mb: 'xxs',
    p: 'xs',
  }),
);

export const WrapperSubmit = styled(Flex)(
  css({
    flexDirection: ['column', 'row'],
    gap: 's',
  }),
);

export const Agreement = styled(Label)(
  css({
    maxWidth: [220, 'none'],
    flex: 2,
  }),
);

export const AgreementText = styled(Text)(
  css({
    pl: 'xxs',
    pt: 4,
    color: 'black',
    letterSpacing: 'mediumS',
  }),
);

AgreementText.defaultProps = {
  variant: 'h8',
};

export const Submit = styled(Button)(
  css({
    flex: 1,
  }),
);

// TODO: resolve types in a button component props
Submit.defaultProps = {
  variant: 'emailSubmit',
};

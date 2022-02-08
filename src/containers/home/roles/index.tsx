import * as React from 'react';
import {
  Wrapper,
  Title,
  WrapperDescription,
  Description,
  StyledButton,
  Main,
  StyledImage,
} from './index.style';

type Props = {
  title: string;
  description: string;
  button: { url: string; text: string };
  logo: string;
};

export const Roles: React.FC<Props> = ({ title, description, button: { url, text }, logo }) => (
  <Wrapper>
    <StyledImage src={logo} />
    <Main>
      {title && <Title>{title}</Title>}
      {description && (
        <WrapperDescription>
          <Description>{description}</Description>
        </WrapperDescription>
      )}
      <StyledButton href={url} arrowSize="l">
        {text}
      </StyledButton>
    </Main>
  </Wrapper>
);

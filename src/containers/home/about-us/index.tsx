import * as React from 'react';
import { Wrapper, Title, WrapperDescription, Description, StyledButton, Main } from './index.style';

type Props = {
  title: string;
  description: string;
  button: { url: string; text: string };
};

export const AboutUs: React.FC<Props> = ({ title, description, button: { url, text } }) => (
  <Wrapper>
    <Main>
      {title && <Title>{title}</Title>}
      {description && (
        <WrapperDescription>
          <Description>{description}</Description>
        </WrapperDescription>
      )}
      <StyledButton href={url} arrowSize="s">
        {text}
      </StyledButton>
    </Main>
  </Wrapper>
);

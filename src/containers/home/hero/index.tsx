import * as React from 'react';
import { Wrapper, Title, Description, Main } from './index.style';

type Props = {
  title: string;
  description: string;
};

export const Hero: React.FC<Props> = ({ title, description }) => (
  <Wrapper>
    <Main>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Main>
  </Wrapper>
);

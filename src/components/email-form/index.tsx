import * as React from 'react';
import { Checkbox } from 'theme-ui';
import logo from 'assets/images/logos/ventures.png';
import {
  Wrapper,
  Logo,
  Title,
  TextField,
  Main,
  WrapperSubmit,
  Agreement,
  AgreementText,
  Submit,
} from './index.style';

const EmailForm: React.FC = () => (
  <Wrapper>
    <Main>
      <Logo src={logo} />
      <Title>Sign up for ATB Ventures Insights</Title>
      <TextField placeholder="Full name" />
      <TextField placeholder="Your email" />
    </Main>
    <WrapperSubmit>
      <Agreement>
        <Checkbox />
        <AgreementText>I agree to receiving newsletters and updates from ATB Ventures.</AgreementText>
      </Agreement>
      <Submit>Submit</Submit>
    </WrapperSubmit>
  </Wrapper>
);

export default EmailForm;

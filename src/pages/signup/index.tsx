import React from 'react';

import { Container, HeaderImage, CenterImage, FooterImage } from './styles';

import Button from '~/components/button';
import Header from '~/components/header';
import Input from '~/components/input';

const SignupPage: React.FC = () => (
  <Container>
    <Header back title='SIGNUP' />
    <HeaderImage />
    <CenterImage />
    <Input icon='person' placeholder='Email' />
    <Input icon='lock' placeholder='Password' password />
    <Input icon='lock' placeholder='Confirm password' password />
    <Button active title='signup' />
    <FooterImage />
  </Container>
);

export default SignupPage;

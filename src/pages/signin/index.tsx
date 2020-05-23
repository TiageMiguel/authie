import React from 'react';

import { Container, HeaderImage, CenterImage, FooterImage } from './styles';

import Button from '~/components/button';
import Header from '~/components/header';
import Input from '~/components/input';

const SigninPage: React.FC = () => (
  <Container>
    <Header title='Login' back />
    <HeaderImage />
    <CenterImage />
    <Input icon='person' placeholder='Email' />
    <Input icon='lock' placeholder='Password' password />
    <Button active title='LOGIN' />
    <FooterImage />
  </Container>
);

export default SigninPage;

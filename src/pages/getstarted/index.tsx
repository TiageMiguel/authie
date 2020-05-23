import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, ImageHeader, ImageFooter, ImageCenter } from './styles';

import Button from '~/components/button';
import Header from '~/components/header';
import { RoutesName } from '~/types';

const GetstartedPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title='Welcome to auth' />
      <ImageHeader />
      <ImageCenter />
      <Button
        active
        title='login'
        onPress={() => navigation.navigate(RoutesName.SIGNIN)}
      />
      <Button
        title='signup'
        onPress={() => navigation.navigate(RoutesName.SIGNUP)}
      />
      <ImageFooter />
    </Container>
  );
};

export default GetstartedPage;

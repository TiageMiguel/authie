import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { HeaderContainer, HeaderTitle, IconButton, Icon } from './styles';

interface HeaderProps {
  title: string;
  back?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, back }) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {back && (
        <IconButton onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </IconButton>
      )}
      <HeaderTitle icon={back}>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

import { MaterialIcons } from '@expo/vector-icons';
import constants from 'expo-constants';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${constants.statusBarHeight + 15}px;
  padding: 0 30px;
  z-index: 100;
`;

interface HeaderTitleProps {
  icon: boolean;
}

export const HeaderTitle = styled.Text<HeaderTitleProps>`
  flex: 1;
  text-align: center;
  margin-left: ${props => (props.icon ? -40 : 0)}px;
  font-size: 15px;
  text-transform: uppercase;
  color: black;
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  z-index: 111;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 20px;
  color: black;
`;

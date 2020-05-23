import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

export interface ButtonProps {
  active?: boolean;
  title: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ active, title, onPress }) => (
  <ButtonContainer active={active} onPress={onPress}>
    <ButtonText active={active}>{title}</ButtonText>
  </ButtonContainer>
);
export default Button;

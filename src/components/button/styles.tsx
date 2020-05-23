import styled from 'styled-components/native';

interface DefaultButtonProps {
  active: boolean;
}

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<DefaultButtonProps>`
  height: 51px;
  width: 80%;
  background: ${props => (props.active ? '#6f35a5' : '#F1E6FF')};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text<DefaultButtonProps>`
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => (props.active ? 'white' : 'black')};
`;

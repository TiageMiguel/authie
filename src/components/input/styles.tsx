import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#202020',
  autoCorrect: false,
})`
  flex: 1;
  padding: 10px 10px;
`;

export const InputContainer = styled.View`
  height: 51px;
  width: 80%;
  border-radius: 30px;
  padding: 10px 20px;
  background: #f1e6ff;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const InputIcon = styled(MaterialIcons).attrs({})`
  font-size: 18px;
  color: #6f35a5;
`;

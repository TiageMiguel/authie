import React, { useState } from 'react';

import { InputContainer, InputIcon, InputText } from './styles';

interface InputProps {
  placeholder: string;
  icon: string;
  password?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, icon, password }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <InputContainer>
      <InputIcon name={icon} />
      <InputText
        placeholder={placeholder}
        secureTextEntry={password && passwordVisible}
      />
      {password && (
        <InputIcon
          name={passwordVisible ? 'visibility' : 'visibility-off'}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      )}
    </InputContainer>
  );
};

export default Input;

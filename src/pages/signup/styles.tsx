import styled from 'styled-components/native';

import footerSource from '~/../assets/images/login_bottom.png';
import headerSource from '~/../assets/images/main_top.png';
import centerSource from '~/../assets/images/signup.png';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  background: white;
  flex: 1;
  align-items: center;
`;

export const HeaderImage = styled.Image.attrs({
  source: headerSource,
  resizeMode: 'contain',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 146px;
  height: 170px;
`;

export const CenterImage = styled.Image.attrs({
  source: centerSource,
  resizeMode: 'contain',
})`
  height: 350px;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const FooterImage = styled.Image.attrs({
  source: footerSource,
  resizeMode: 'contain',
})`
  bottom: 0;
  right: 0;
  position: absolute;
  width: 110px;
  height: 80px;
`;

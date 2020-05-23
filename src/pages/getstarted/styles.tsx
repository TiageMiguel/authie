import constants from 'expo-constants';
import styled from 'styled-components/native';

import centerSource from '~/../assets/images/chat.png';
import footerSource from '~/../assets/images/main_bottom.png';
import headerSource from '~/../assets/images/main_top.png';

export const Container = styled.View`
  flex: 1;
  background: white;
  align-items: center;
`;

export const ImageHeader = styled.Image.attrs({
  source: headerSource,
  resizeMode: 'contain',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 146px;
  height: 170px;
`;

export const ImageFooter = styled.Image.attrs({
  source: footerSource,
  resizeMode: 'contain',
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 120px;
`;

export const ImageCenter = styled.Image.attrs({
  source: centerSource,
  resizeMode: 'contain',
})`
  margin-top: 70px;
  margin-bottom: 50px;
  height: 350px;
`;

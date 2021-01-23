import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

import Icon from '../Icon';

const Container = styled.div`
  background-color: ${theme.palette.background.primary};
  height: 100%;
  width: 100%;
`;

const Desktop = () => (
  <Container>
    <Icon />
  </Container>
);

export default Desktop;

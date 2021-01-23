import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Container = styled.div`
  background-color: ${theme.palette.background.primary};
  height: 100%;
  width: 100%;
`;

const Desktop = () => (
  <Container>
    <p>Hello Desktop</p>
  </Container>
);

export default Desktop;

import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Container = styled.div`
  background-color: ${theme.palette.background.primary};
  height: 100%;
  width: 100%;

  &>div {
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-right: 100%;
    height: 100vh;
  }
`;

const Desktop = () => (
  <Container />
);

export default Desktop;

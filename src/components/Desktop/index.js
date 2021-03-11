import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

import Icon from '../Icon';

import org4channel from '../../assets/4channel-org-favicon.ico';
import orgHispachan from '../../assets/hispachan-org-favicon.ico';
import orgLainchan from '../../assets/lainchan-org-favicon.png';
import orgWired7 from '../../assets/wired-7-org-favicon.ico';

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
  <Container>
    <div>
    </div>
  </Container>
);

export default Desktop;

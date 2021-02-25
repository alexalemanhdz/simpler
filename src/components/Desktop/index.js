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
      <Icon icon={org4channel} name="/biz/" url="https://boards.4channel.org/biz/" />
      <Icon icon={org4channel} name="/fit/" url="https://boards.4channel.org/fit/" />
      <Icon icon={org4channel} name="/lit/" url="https://boards.4channel.org/lit/" />
      <Icon icon={org4channel} name="/jav/" url="https://boards.4channel.org/jp/jav" />
      <Icon icon={orgHispachan} name="/mx/" url="https://www.hispachan.org/mx/" />
      <Icon icon={orgHispachan} name="/i/" url="https://www.hispachan.org/i/" />
      <Icon icon={orgLainchan} name="/mega/" url="https://lainchan.org/mega/" />
      <Icon icon={orgWired7} name="/nexo/" url="https://wired-7.org/nexo.html" />
      <Icon name="/chan/" url="https://bandada.club/chan/" />
    </div>
  </Container>
);

export default Desktop;

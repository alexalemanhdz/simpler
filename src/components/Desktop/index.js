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
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const Desktop = () => (
  <Container>
    <Icon icon={org4channel} name="/biz/" url="https://boards.4channel.org/biz/" />
    <Icon icon={org4channel} name="/fit/" url="https://boards.4channel.org/fit/" />
    <Icon icon={org4channel} name="/lit/" url="https://boards.4channel.org/lit/" />
    <Icon icon={org4channel} name="/g/" url="https://boards.4channel.org/g/" />
    <Icon icon={org4channel} name="/x/" url="https://boards.4channel.org/x/" />
    <Icon icon={org4channel} name="/jav/" url="https://boards.4channel.org/jp/jav" />
    <Icon icon={orgHispachan} name="/mx/" url="https://www.hispachan.org/mx/" />
    <Icon icon={orgHispachan} name="/i/" url="https://www.hispachan.org/i/" />
    <Icon icon={orgHispachan} name="/t/" url="https://www.hispachan.org/t/" />
    <Icon icon={orgLainchan} name="/λ/" url="https://lainchan.org/λ/" />
    <Icon icon={orgLainchan} name="/Δ/" url="https://lainchan.org/Δ/" />
    <Icon icon={orgLainchan} name="/sec/" url="https://lainchan.org/sec/" />
    <Icon icon={orgLainchan} name="/Ω/" url="https://lainchan.org/Ω/" />
    <Icon icon={orgLainchan} name="/lit/" url="https://lainchan.org/lit/" />
    <Icon icon={orgLainchan} name="/drug/" url="https://lainchan.org/drug/" />
    <Icon icon={orgLainchan} name="/zzz/" url="https://lainchan.org/zzz/" />
    <Icon icon={orgWired7} name="/tech/" url="https://wired-7.org/tech/" />
    <Icon icon={orgWired7} name="/x/" url="https://wired-7.org/x/" />
    <Icon name="/chan/" url="https://bandada.club/chan/" />
  </Container>
);

export default Desktop;

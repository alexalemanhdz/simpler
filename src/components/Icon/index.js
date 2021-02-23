import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
  text-decoration: none;
  color: white;
  font-family: monospace;
  text-shadow: black 1px 1px 1px;
  width: 32px;
  margin: 5px;

  &>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32px;

    &>p {
      margin-top: 5px;
    }
  }
`;

const Icon = ({ icon, name, url }) => (
  <Container href={url}>
    <div>
      <img src={icon} alt="🌐" width={16} />
      <p>{name}</p>
    </div>
  </Container>
);

Icon.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;

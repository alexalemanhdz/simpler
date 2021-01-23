import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const Icon = ({ icon, name, url }) => (
  <Container>
    <p>Hola</p>
  </Container>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;

import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container } from './styles/style';

function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <React.Fragment {...restProps}>{children}</React.Fragment>
  );
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.bool,
};

Header.Container.propTypes = {
  children: PropTypes.node,
};

export default Header;
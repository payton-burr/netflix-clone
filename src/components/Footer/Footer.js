import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line prettier/prettier
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Button,
  Break,
} from './styles/style';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Button = function FooterButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.Row.propTypes = {
  children: PropTypes.node,
};

Footer.Column.propTypes = {
  children: PropTypes.node,
};

Footer.Link.propTypes = {
  children: PropTypes.node,
};

Footer.Title.propTypes = {
  children: PropTypes.node,
};

Footer.Button.propTypes = {
  children: PropTypes.node,
};

export default Footer;

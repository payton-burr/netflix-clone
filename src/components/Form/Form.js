import React from 'react';
import { Container } from './styles/style';

function Form(children, ...restProps) {
  return <Container {...restProps}>{children}</Container>;
}

export default Form;

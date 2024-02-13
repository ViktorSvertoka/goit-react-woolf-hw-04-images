import React from 'react';
import { ButtonLoad } from './Button.styled';
const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    </div>
  );
};

export default Button;

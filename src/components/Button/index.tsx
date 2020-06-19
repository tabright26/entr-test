import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin: 10px 0;
`;

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: #52a27e;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #ffffff;
  padding: 20px 20px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border: none;
  outline: none;
`;

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </ButtonWrapper>
  );
};

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default Button;

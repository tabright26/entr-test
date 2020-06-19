import React from "react";
import styled from "styled-components";

const LogoContainer = styled.img`
  width: 60px;
  height: 60px;
`;

const Logo = () => {
  return <LogoContainer src="logo.svg" alt="Planned" />;
};

export default Logo;

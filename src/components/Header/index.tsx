import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import CompanyTitle from "./CompanyTitle";

const AppBar = styled.div`
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <AppBar>
      <Logo />
      <CompanyTitle />
    </AppBar>
  );
};

export default Header;

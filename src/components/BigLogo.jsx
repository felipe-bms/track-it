import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const BigLogo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Track It Logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 38px;
`;

const LogoImage = styled.img`
  width: 180px;
  height: 180px;
`;

export default BigLogo;

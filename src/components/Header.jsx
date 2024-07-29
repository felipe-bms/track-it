import React from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import typo from "../assets/typo.png";

const Header = () => {
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <HeaderLogo src={typo} alt="Logo" />
      {user && user.image && <HeaderAvatar src={user.image} alt="Avatar" />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  height: 70px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.img`
  margin-left: 20px;
`;

const HeaderAvatar = styled.img`
  margin-right: 20px;
  width: 51px;
  height: 51px;
  border-radius: 999px;
`;

export default Header;

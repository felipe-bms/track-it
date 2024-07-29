import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import CalendarCheckIcon from "@mui/icons-material/EventAvailable";

const Footer = () => {
  const location = useLocation();

  return (
    <FooterContainer>
      <FooterButton to="/habitos" isActive={location.pathname === "/habitos"}>
        <CalendarIcon />
        <span>Hábitos</span>
      </FooterButton>
      <FooterButton to="/hoje" isActive={location.pathname === "/hoje"}>
        <CalendarCheckIcon />
        <span>Hoje</span>
      </FooterButton>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.unfocused};
`;

const FooterButton = styled(Link)`
  color: ${(props) => (props.isActive ? "white" : props.theme.colors.disabled)};
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.secondary : "transparent"};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 6px;
  transition: background-color 0.3s, color 0.3s;

  span {
    font-family: "Lexend Deca", sans-serif;
  }
`;

export default Footer;

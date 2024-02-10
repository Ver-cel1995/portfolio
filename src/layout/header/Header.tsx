import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />            
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #c3c3c3;
  display: flex;
  justify-content: space-between;
  /* font-family: 'Poppins', sans-serif;
  font-family: 'Josefin Sans', sans-serif; */
`;
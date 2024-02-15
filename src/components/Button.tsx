import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;
  margin: 0 auto;
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
      z-index: -1;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 10px;
    width: 50%;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`;

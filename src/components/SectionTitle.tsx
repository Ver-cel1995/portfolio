import styled from "styled-components";
import { theme } from "../styles/Theme";
import { fonts } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${fonts({
    family: "'Josefin Sans', sans-serif",
    weight: 600,
    Fmax: 36,
    Fmin: 30,
  })}

  text-align: center;
  letter-spacing: 5px;
  position: relative;
  margin-bottom: 90px;

  &::before {
    content: "";
    width: 55px;
    height: 2px;
    position: absolute;
    display: inline-block;
    background-color: ${theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;

    @media ${theme.media.mobile} {
        bottom: -24px;
    }
  }
`;

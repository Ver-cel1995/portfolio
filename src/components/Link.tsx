import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
font-weight: 400;
font-size: 14px;
letter-spacing: 1px;
text-transform: uppercase;
color: ${theme.colors.accent};
padding: 10px;
position: relative;
z-index: 0;
transition: all 0.3s ease-in;

&:hover {
color: ${theme.colors.font};

&::before {
    height: 10px;
}
}

&::before {
content: "";
display: inline-block;
background-color: ${theme.colors.accent};

position: absolute;
bottom: 5px;
left: 0;
right: 0;
z-index: -1;
}
`;

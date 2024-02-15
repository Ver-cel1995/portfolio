import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h3 {
        font-weight: 700;
        font-family: "Josefin Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 1px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
    }

    section {
        padding: 100px 0;
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.secondaryBg}
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.primagyBg}
    }
`

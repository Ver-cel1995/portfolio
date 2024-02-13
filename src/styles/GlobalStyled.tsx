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

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
    }

    a {
        text-decoration: none
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primagyBg}
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg}
    }
`

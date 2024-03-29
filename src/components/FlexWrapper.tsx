import  styled  from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-direction: ${props => props.direction || "row"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    height: 100%;
`


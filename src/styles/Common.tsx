import { theme } from "./Theme"

type FontPropsType = {
    family?: string,
    weight?: number,
    Fmax?: number
    Fmin?: number,
    LineHeight?: number,
    color?: string,
}

export const fonts = ({family, weight, Fmin, Fmax, color, LineHeight}: FontPropsType) => `
    font-family: ${family || "Popins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${LineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
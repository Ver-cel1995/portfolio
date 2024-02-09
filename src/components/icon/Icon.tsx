import icons from '../../assets/image/vectorImg/sptite.svg';

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "42px"} height={props.width || "32px"} viewBox={props.width || "0 0 42 32"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${icons}#${props.iconId}` } />
        </svg>
    )
}
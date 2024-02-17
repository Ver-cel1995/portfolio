import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { theme } from "../../../../styles/Theme"

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <IconWrapper>
                <Icon iconId={props.iconId} width="50px" height="50px"/>
            </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    text-align: center;
    padding: 62px 20px 40px;

    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillText = styled.p`
`
export const IconWrapper = styled.div`
    position: relative;


    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`
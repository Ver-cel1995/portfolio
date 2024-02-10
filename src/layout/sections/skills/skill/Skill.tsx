import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width="50px" height="50px"/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 33%;
`

const SkillTitle = styled.h3`
    
`
const SkillText = styled.p`
    
`
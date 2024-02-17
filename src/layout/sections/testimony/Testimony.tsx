import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <IconWrapper>
                        <Icon iconId="commit"/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;

    ${IconWrapper} {
        margin-bottom:72px;
    }

    ${SectionTitle} {
        margin-bottom: 123px;

        @media ${theme.media.mobile} {
            margin-bottom: 107px;
    }
    }

`
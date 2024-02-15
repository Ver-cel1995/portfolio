import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./TabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./works/Work";
import socialImg from "../../../assets/image/img/socialNetwork.webp"
import timerlImg from "../../../assets/image/img/timer.webp"
import { Container } from "../../../components/Container";

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align="flex-start">
                    <Work title={"Social Network"} 
                        src={socialImg}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        
                    <Work title={"Timer"}
                        src={timerlImg}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
};

const StyledWorks = styled.section`

`
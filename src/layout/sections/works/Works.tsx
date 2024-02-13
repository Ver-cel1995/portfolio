import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./works/Work";
import socialImg from "../../../assets/image/img/socialNetwork.webp"
import timerlImg from "../../../assets/image/img/timer.webp"

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} 
                    src={socialImg}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    
                <Work title={"Timer"}
                    src={timerlImg}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            </FlexWrapper>
        </StyledWorks>
    )
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #7474f8;
`
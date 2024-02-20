import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./TabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./works/Work";
import socialImg from "../../../assets/image/img/socialNetwork.webp";
import timerlImg from "../../../assets/image/img/timer.webp";
import { Container } from "../../../components/Container";
import { useState } from "react";

// const tabsItems = ['All', 'landing page', 'React', 'spa']

const tabsItems: Array<{ status: TabsStatusType, title: string; }> = [
  {
    title: "All",
    status: "all",
  },

  {
    title: "Landing page",
    status: "landing",
  },

  {
    title: "React",
    status: "react",
  },

  {
    title: "spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt   ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
  },

  {
    title: "Timer",
    src: timerlImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt   ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "react",
  },
];

export const Works = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
  console.log(currentFilterStatus) // смотря что кликнул пользователь
  let filterWorks = worksData

  if (currentFilterStatus === "landing") { // "landing" - это status в массиве tabsItems, если false, то 
                                            // значением будет ("all")
    filterWorks = worksData.filter(work => work.type === "landing")
  }

  if (currentFilterStatus === "react") {
    filterWorks = worksData.filter(work => work.type === "react")
  }

  if (currentFilterStatus === "spa") {
    filterWorks = worksData.filter(work => work.type === "spa")
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus} 
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify={"space-between"} align="flex-start" wrap="wrap">
          {filterWorks.map((work) => {
            return <Work title={work.title} src={work.src} text={work.text} />;
          })}
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`;

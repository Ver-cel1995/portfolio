import styled, { keyframes } from "styled-components";
import photo from "../../../assets/image/img/iam.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify="space-between">
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Aleksei Kornelius</span>
            </Name>
            <MainTitle>A Web Developer. </MainTitle>
          </div>
          <WrapPhoto>
            <Photo src={photo} alt="" />
          </WrapPhoto>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.primagyBg};
  display: flex;
`;

const Photo = styled.img`
  object-fit: cover;
  width: 350px;
  height: 430px;
`;

const Name = styled.h2`
  font-size: 50px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background: linear-gradient(to right, #21954e, #100e0f);

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;
const WrapPhoto = styled.div`
  position: relative;
  border-radius: 5px;
  z-index: 1;
  background-color: #1f1f20;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 10px;
    background: linear-gradient(245deg, #239655, #0b0b0b);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    top: -20px;
    right: -20px;
    height: 470px;
    left: 10px;
    z-index: -1;
  }

  /* &::after {
        content: "";
        background-image: linear-gradient(245deg, #239655, #0b0b0b);
        width: 340px;
        height: 470px;
        position: absolute;
        background: #1f1f20;
        top: -15px;
        left: 21px;
        z-index: -1;
    } */
`;

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`;
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

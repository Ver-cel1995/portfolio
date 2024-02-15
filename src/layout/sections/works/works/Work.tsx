import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { link } from "fs";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>

        <WrapImg>
          <Image src={props.src} alt="" />
          <Button>view project</Button>
        </WrapImg>
        <Description>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;
    bottom: -5px;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`

const WrapImg = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";

      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      backdrop-filter: blur(8px);
      background: rgba(0, 0, 0, 0.3) 
    }

    ${Button} {
      opacity: 1;
    }
  }
    ${Button} {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      
      &::before {
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    }
  
`;

const Title = styled.h3``;

const Text = styled.p`
    margin: 14px 0 10px;
`;

const Description = styled.div`
    padding: 25px 20px;
`;

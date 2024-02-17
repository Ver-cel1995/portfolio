import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { fonts } from "../../styles/Common";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <Name>Aleksei</Name>
          <SocialIconList>
            <SocialIconItem>
              <SocialIconLink>
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="instagram"
                />
              </SocialIconLink>
            </SocialIconItem>
            <SocialIconItem>
              <SocialIconLink>
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="telegram"
                />
              </SocialIconLink>
            </SocialIconItem>
            <SocialIconItem>
              <SocialIconLink>
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="vk"
                />
              </SocialIconLink>
            </SocialIconItem>
            <SocialIconItem>
              <SocialIconLink>
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="linkdein"
                />
              </SocialIconLink>
            </SocialIconItem>
          </SocialIconList>
          <Copyright>© 2023 Aleksei Kornelius, All Rights Reserved.</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primagyBg};
  padding: 40px 0;
`;
const SocialIconList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;
const SocialIconItem = styled.li``;
const SocialIconLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.font};
    transform: translateY(-4px);
    background-color: ${theme.colors.accent};
  }
`;
const Name = styled.span`
    ${fonts({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}

    letter-spacing: 0.14em;

`;
const Copyright = styled.small`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.5;
  text-align: center;
`;

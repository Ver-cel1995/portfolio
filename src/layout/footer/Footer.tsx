import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="center" align="center" direction="column">
                <Name>Aleksei</Name>
                <SocialIconList>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21 21" iconId="instagram"/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21 21" iconId="telegram"/> 
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21 21" iconId="vk"/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21 21" iconId="linkdein"/>
                        </SocialIconLink>
                    </SocialIconItem>
                </SocialIconList>    
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;
`
const SocialIconList = styled.ul`
    display: flex;
    gap: 20px;
`
const SocialIconItem = styled.li`
`
const SocialIconLink = styled.a`
`
const Name = styled.span`
`
const Copyright = styled.small`
`
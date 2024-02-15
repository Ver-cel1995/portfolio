import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder="Name" />
          <Field placeholder="Subject" />
          <Field placeholder="Message" as={"textarea"} />
          <Button type={"submit"}>Send Message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;
const Field = styled.input`
  width: 100%;
  border: 1px solid #4a4a4a;
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;
  font-size: 12px;
  letter-spacing: 0.05em;
  font-family: "Popins", sans-serif;
  font-weight: 400;

  color: ${theme.colors.font};

  &::placeholder {
    color: #ffffff56;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`;

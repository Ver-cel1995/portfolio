import styled from "styled-components";
import { Link } from "../../../../components/Link";

// type MenuPropsType = {       вместо этой конструкции в Menu()
//     menuIems: Array<string>  прописываем следующее. => такой способ используется,
// }                            когда типизируется одно значение

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  margin-bottom: 50px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.li``;

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
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;

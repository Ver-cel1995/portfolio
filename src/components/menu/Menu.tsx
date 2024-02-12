import styled from "styled-components" 

// type MenuPropsType = {       вместо этой конструкции в Menu()
//     menuIems: Array<string>  прописываем следующее. => такой способ используется, 
// }                            когда типизируется одно значение

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    )
                })}

            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
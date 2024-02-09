import styled from 'styled-components'
import photo from '../../../assets/image/img/iam.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align='center' justify='space-around'>
                <div>
                    <span>Hi There</span>
                    <h2>I am Aleksei Kornelius</h2>
                    <h1>A Web Developer. </h1>
                </div>
                <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #1F1F20;
`

const Photo = styled.img`
    object-fit: cover;
    width: 350px;
    height: 430px;
`
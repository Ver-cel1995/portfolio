import styled from 'styled-components'
import photo from '../../../assets/image/img/iam.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify='space-between'>
                <div>
                    <Hi>Hi There</Hi>
                    <Name>I am Aleksei Kornelius</Name>
                    <Prof>A Web Developer. </Prof>
                </div>
                <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
`

const Photo = styled.img`
    object-fit: cover;
    width: 350px;
    height: 430px;
`

const Hi = styled.span`
    
`
const Name = styled.h2`
    
`
const Prof = styled.h1`
    
`
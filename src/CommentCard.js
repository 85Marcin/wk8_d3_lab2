import styled from "styled-components";

const Section = styled.section`
    background-color: lightgray;
    border-radius: 5px;
    padding: 8px;
    margin: 7px;
    color: black;
    display: flex;
    align-content: center;
    width: 40%;
`
const H4 = styled.h4`
    color: purple;
`
const Text = styled.div`
    margin: 7px;
`

const CommentCard = ({imageUrl, userName, children}) => {

    return (
        <Section>
            <img src={imageUrl} alt="image"></img>
            <Text>
            <H4>{userName}</H4>
            <p>{children}</p>
            </Text>
        </Section>



    )
}

export default CommentCard
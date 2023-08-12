import styled from "styled-components"
import { GlobalStyle } from "../styledGlobal"
import fundo from "../assets/image1.png"

const ImgBackground = styled.div`
    background-image: url(${fundo});
    width: 100%;
    min-height: 100vh;
    background-size: cover;
`



export default function Login(){
    return (
    <>
    <GlobalStyle/>
    <ImgBackground>
        
    </ImgBackground>
    </>
    )
}
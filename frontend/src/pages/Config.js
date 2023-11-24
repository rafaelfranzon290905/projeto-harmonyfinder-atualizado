import styled from "styled-components"
import { Background } from "../styledGlobal";
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/HarmonyFinderLogo.png';
import seta from '../assets/SetaLegal.png'
import { GlobalStyle } from "../styledGlobal";
import { lightTheme, darkTheme } from "../components/Themes"
import { useState } from "react";
import amarelo from '../assets/amarelo.png'
import laranja from '../assets/orange.jpg'
import vermelho from '../assets/vermelho.png'
import roxo from '../assets/purple.png'
import azul from '../assets/azul.png'
import verde from '../assets/verde.png'
import { Link } from "react-router-dom";

export const Header = styled.header`
    width: 100%;
    height: 13vh;
    background: #004C94;
    padding: auto;
`

export const BlocoHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const HeaderImg = styled.img`
    width: 10vw;
    height: 12vh;
    
`

export const Caixa = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
`

export const Titulo = styled.div`
    display: flex;
`

export const Seta = styled.img`
    height: 30px;
    margin-top: 22px;
`

export const TituloTxt = styled.h1`
    font-size: 26px;
`

const CaixaGuia = styled.div`
    display: flex;
    background-color: pink;
    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 30px;
    margin-bottom: 2%;
`
const Esquerda = styled.div`
    width: 30%;
    margin-left: 10%;
    margin-right: 10%;
`

const Direita = styled.div`
    width: 30%;
    /* margin-left: 5%; */
`

const Corzona = styled.img`
    margin-left: 20%;
    margin-top: 6%; 
    width: 200px;
    height: 200px;
    border-radius: 200px;
    border: solid black 5px;
`
const TituloCor = styled.h1`
    margin-left: 30%;

`

const TextoCor = styled.p`
    font-weight: 700;
    text-align: justify;
`

const Retornar = styled.button`
    background-color: #D6D9B6;
    /* width: 100px; */
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 2%;
    :hover {
        cursor: pointer;
    }
`

export default function Config(){
    
    return (
    <>
    <GlobalStyle/>
    <Background>
        <Header>
            <BlocoHeader>
                <HeaderImg src={logo} class='logo' alt=""/>
                <HeaderImg src={profile} class='perfil' alt=""/>
            </BlocoHeader>
        </Header>

        <Caixa>
            <Titulo>
                <Seta src={seta}></Seta>
                <TituloTxt>Guia básico de cores</TituloTxt>
            </Titulo>
            <CaixaGuia>
                <Esquerda>
                    <Corzona src={amarelo}></Corzona>
                </Esquerda>
                <Direita>
                    <TituloCor>Amarelo</TituloCor>
                    <TextoCor>Amarelo é a cor mais atrelada à felicidade pura. Sentimentos de alegria, criatividade e liberdade atrelados à juventude. O amarelo também é associado a riquezas por ser da cor do ouro, mas por isso também demonstra ganância. Uma cor que demonstra prosperidade e a luz da vida.
                    </TextoCor>
                </Direita>
                
            </CaixaGuia>
            
            <CaixaGuia>
            <Esquerda>
                    <TituloCor>Laranja</TituloCor>
                    <TextoCor>Cor exótica do sabor. Cor associada a coragem, gentileza e sociabilidade, humor, entusiasmo, criatividade, amizade, energia, vibração, calor, equilíbrio, alegria, confiança, aventura. O laranja é uma cor intensa, mas menos intensa que o vermelho, por isso é mais agradável aos olhos. 
                    </TextoCor>
                    
            </Esquerda>
            <Direita>
                    <Corzona src={laranja}></Corzona>
            </Direita>
            </CaixaGuia>

            <CaixaGuia>
                <Esquerda>
                    <Corzona src={vermelho}></Corzona>
                </Esquerda>
                <Direita>
                    <TituloCor>Vermelho</TituloCor>
                    <TextoCor>O vermelho é uma cor quente que representa desde a paixão até o ódio. De fato, o vermelho é uma cor que representa muita intensidade. A cor do nosso sangue, sempre associada ao perigo pelo nosso instinto, porém, também associada à vida e ao fogo. Uma cor tentadora, relacionada ao proibido. O vermelho representa um estado de êxtase muito grande, seja ele positivo ou negativo. O vermelho é a cor mais presente e efetiva em publicidades.
                    </TextoCor>
                </Direita>
                
            </CaixaGuia>

            <CaixaGuia>
            <Esquerda>
                    <TituloCor>Roxo</TituloCor>
                    <TextoCor>Roxo é a cor do poder. Uma das cores mais raras de conseguir-se sua pigmentação naturalmente, era um grande símbolo de poder absoluto da realeza e muitas riquezas. Uma cor representativa da sexualidade, do mistério, do conhecimento, da homossexualidade, do feminismo e da magia.
                    </TextoCor>
                    
            </Esquerda>
            <Direita>
                    <Corzona src={roxo}></Corzona>
            </Direita>
            </CaixaGuia>

            <CaixaGuia>
                <Esquerda>
                    <Corzona src={azul}></Corzona>
                </Esquerda>
                <Direita>
                    <TituloCor>Azul</TituloCor>
                    <TextoCor>Cor fria associada a tranquilidade, simpatia, harmonia, calma, confiança e fidelidade. O azul é a cor favorita entre as cores, sendo a cor predileta da maioria da população. O azul, seja ele ciano até azul-marinho, é uma cor fácil de se conviver com, pois vai bem em todas as ocasiões por ser tão querida entre as pessoas, sendo utilizada em muitas coisas. O azul é uma cor com um efeito calmante, sendo atrelada também a sentimentos de tristeza e a depressão.
                    </TextoCor>
                </Direita>
            </CaixaGuia>

            <CaixaGuia>
            <Esquerda>
                    <TituloCor>Verde</TituloCor>
                    <TextoCor>O verde é a cor que representa a natureza. Por isso, o verde é muitas vezes atrelado a fertilidade, esperança, vida, saúde, orgulho, calma e fartura. Além disso, a cor também pode ser associada a conceitos negativos, como inveja, imaturidade e ciúme. O verde é uma cor relaxante pois representa tudo que é natural.

                    </TextoCor>
                    
            </Esquerda>
            <Direita>
                    <Corzona src={verde}></Corzona>
            </Direita>
            </CaixaGuia>
        <Link to='/home'><Retornar>Retornar</Retornar></Link>
        </Caixa>
    </Background>
    </>
    )
}
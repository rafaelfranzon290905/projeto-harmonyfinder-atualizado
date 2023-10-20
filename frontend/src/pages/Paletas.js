import { Header, BlocoHeader, HeaderImg } from "./Config"
import { Background } from "../styledGlobal"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import { Caixa, Titulo, Seta, TituloTxt } from "./Config";
import seta from '../assets/SetaLegal.png'
import styled from "styled-components";
import sorriso from '../assets/sorriso.png';
import triste from '../assets/triste.png';
import paixao from '../assets/paixão.png';
import raiva from '../assets/raiva.png';
import retorno from '../assets/return.png';
import refresh from '../assets/refresh.png';
import save from '../assets/save.png';
import ColorScheme from "color-scheme";

var scheme = new ColorScheme;
scheme         // Start the scheme 
    .scheme('tetrade')     // Use the 'tetrade' scheme, that is, colors
                            // selected from 4 points equidistant around
                            // the color wheel.
    .variation('default');   // Use the 'soft' color variation

var colors = scheme.colors();
let cor1 = "#" + colors[3]
let cor2 = "#" + colors[7]
let cor3 = "#" + colors[11]
let cor4 = "#" + colors[15]
/*
colors = [ "e69373", "805240", "e6d5cf", "bf5830" ,
            "77d36a", "488040", "d2e6cf", "43bf30" ,
            "557aaa", "405c80", "cfd9e6", "306ebf" ]
*/

console.log(colors)
console.log(cor1)

const Selecionado = styled.img`
    height: 40px;
    margin-top: 16px;
    margin-left: 10px;
`
const CaixaPaletas = styled.div`
    width: 90%;
    height: 60vh;
    margin-left: 5%;
    margin-right: 5%;
    display: inline-flex;
    justify-content: space-evenly;
`
const Cor1 = styled.div`
    background-color: ${cor1};
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor2 = styled.div`
    background-color: ${cor2};
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor3 = styled.div`
    background-color: ${cor3};
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor4 = styled.div`
    background-color: ${cor4};
    height: 100%;
    width: 20%;
    display: flex;
`
const CaixaBotao = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center;
`

const Retornar = styled.button`
    background-color: #D6D9B6;
    /* width: 100px; */
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    font-size: 20px;
`

const Refresh = styled.button`
    background-color: #FFB800;
    border-radius: 50px;
    border: none;
    width: 50px;
    height: 50px;
    

`

const Salvar = styled.button`
    background-color: #F665DF;
    width: 100px;
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    font-size: 20px;
`

 
   
export default function PaletasSalvas(){

    

    return (
    <>
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
                    <TituloTxt>Gerador de paleta</TituloTxt>
                    <Seta src={seta}></Seta>
                    <TituloTxt>Selecionado:</TituloTxt>
                    <Selecionado src={sorriso}></Selecionado>
                </Titulo>

                <CaixaPaletas>
                    <Cor1></Cor1>
                    <Cor2></Cor2>
                    <Cor3></Cor3>
                    <Cor4></Cor4>
                </CaixaPaletas>

                <CaixaBotao>
                    <Retornar><img src={retorno} alt="" height='20px'></img> Retornar</Retornar>
                    <Refresh><img src={refresh} alt="" height='30px'></img></Refresh>
                    <Salvar>Salvar <img src={save} alt="" height='20px'></img></Salvar>
                </CaixaBotao>
            </Caixa>
        </Background>
       
        
    </>
    )
}
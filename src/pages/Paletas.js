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
    background-color: #F3C755;
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor2 = styled.div`
    background-color: #64C654;
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor3 = styled.div`
    background-color: #E75555;
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor4 = styled.div`
    background-color: #C565E7;
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
                    <Retornar><img src={retorno} height='20px'></img> Retornar</Retornar>
                    <Refresh><img src={refresh} height='30px'></img></Refresh>
                    <Salvar>Salvar <img src={save} height='20px'></img></Salvar>
                </CaixaBotao>
            </Caixa>
        </Background>
       
        
    </>
    )
}
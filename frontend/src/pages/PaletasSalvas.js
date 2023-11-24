import { Header, BlocoHeader, HeaderImg } from "./Config"
import { Background } from "../styledGlobal"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/HarmonyFinderLogo.png';
import { Caixa, Titulo, Seta, TituloTxt } from "./Config";
import seta from '../assets/SetaLegal.png'
import save from '../assets/save.png';
import { api } from "../services/api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Save = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 1%;
    margin-top: 2.4%;
`


const MaeDiv = styled.div`

`

const DivElementos = styled.div`
    margin-left: 5%;
    margin-right: 5%;
`
const DivElementosText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 11%;
    font-weight: 650;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: 0.5s;
    }
`

const DivElementosCores = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
`

const DivCores = styled.div`
    width: 100px;
    height: 100px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 10%;
`

const Retornar = styled.button`
    background-color: #D6D9B6;
    /* width: 100px; */
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 2%;
    :hover {
        cursor: pointer;
    }
`

const PaletasSalvas = () => {
    const [paletas, setPaletas] = useState([]);

    const fetchData = async () => {
        const response = await api.get('/salvar/' + localStorage.getItem('id'));
        console.log(response.data.data);
        setPaletas(response.data.data);
    };

    useEffect(() => {
        fetchData()
    }, []);

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
                    <TituloTxt>Lista de paletas salvas</TituloTxt>
                    <Save src={save} alt="salvae"></Save>
                </Titulo>

                <MaeDiv className='thread__container'>
                        {paletas.map((paleta) => (
                            <DivElementos className='thread__item' key={paleta.id}>
                                <DivElementosText>
                                    {/* Exibindo as cores da paleta */}
                                    <p onClick={() => {navigator.clipboard.writeText(`${paleta.cor1}`)}}>Cor 1: {paleta.cor1}</p>
                                    <p onClick={() => {navigator.clipboard.writeText(`${paleta.cor2}`)}}>Cor 2: {paleta.cor2}</p>
                                    <p onClick={() => {navigator.clipboard.writeText(`${paleta.cor3}`)}}>Cor 3: {paleta.cor3}</p>
                                    <p onClick={() => {navigator.clipboard.writeText(`${paleta.cor4}`)}}>Cor 4: {paleta.cor4}</p>
                                </DivElementosText>
                                    <DivCores style={{background: paleta.cor1}}/>
                                    <DivCores style={{background: paleta.cor2}}/>
                                    <DivCores style={{background: paleta.cor3}}/>
                                    <DivCores style={{background: paleta.cor4}}/>
                                <DivElementosCores>

                                </DivElementosCores>
                                
                            </DivElementos>
                        ))}
                </MaeDiv>
            </Caixa>
            <Link to='/home'><Retornar>Retornar</Retornar></Link>
        </Background>
       
        
    </>
    )
}
export default PaletasSalvas
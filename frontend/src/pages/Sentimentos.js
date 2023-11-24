import { Background } from '../styledGlobal';
import styled from "styled-components"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/HarmonyFinderLogo.png';
import sorriso from '../assets/sorriso.png';
import triste from '../assets/triste.png';
import paixao from '../assets/paixão.png';
import raiva from '../assets/raiva.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'



export const Header = styled.header`
    width: 100%;
    height: 13vh;
    background-color: #004C94;
    padding: auto;
`

export const BlocoHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const HeaderImg = styled.img`
    width: 8vw;
    height: 12vh;
    
`
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`

const BlocoEscolha = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 18px;
`

const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 800;
    color: red;
`

const DivCaixaSentimento = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 3%;
`

const CaixaSentimento1 = styled.button`
    width: 120px;
    height: 120px;
    background-color: #FFB800;
`
const CaixaSentimento2 = styled.button`
    width: 120px;
    height: 120px;
    background-color: #4995CC;
`
const CaixaSentimento3 = styled.button`
    width: 120px;
    height: 120px;
    background-color: #F483D4;
`
const CaixaSentimento4 = styled.button`
    width: 120px;
    height: 120px;
    background-color: #EC2D2D;
`

const SentimentoEmoji = styled.img`
    width: 100px;
    align-items: center;
`

const SelecionarCorAmarelo = styled.button`
    width: 120px;
    height: 120px;
    background-color: #FFB800;
`
const SelecionarCorAzul = styled.button`
    width: 120px;
    height: 120px;
    background-color: #4995CC;
`
const SelecionarCorRosa = styled.button`
    width: 120px;
    height: 120px;
    background-color: #F483D4;
`
const SelecionarCorVermelho = styled.button`
    width: 120px;
    height: 120px;
    background-color: #EC2D2D;
`

const SelecionarCorVerde = styled.button`
    width: 120px;
    height: 120px;
    background-color: #22b100;
`
const SelecionarCorLaranja = styled.button`
    width: 120px;
    height: 120px;
    background-color: #ff7400;
`
const SelecionarCorRoxo = styled.button`
    width: 120px;
    height: 120px;
    background-color: #4a006b;
`
const SelecionarCorCiano = styled.button`
    width: 120px;
    height: 120px;
    background-color: #80d6ff;
`

const Retornar = styled.button`
    background-color: #D6D9B6;
    /* width: 100px; */
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    margin-left: 10%;
    margin-top: 5%;
    :hover {
        cursor: pointer;
    }
`

export default function Sentimentos() {

    let [emocao, setEmocao] = useState('')
    console.log(emocao)   

    const navigate = useNavigate()

    function executarUseState(emocaoSelecionada) {
        emocao = emocaoSelecionada;
        // setEmocao(emocaoSelecionada)
        console.log(emocao)
        navigate('/paletas/' + emocaoSelecionada)
    }
   

    return (
        <>
            <Background>
                <Header>
                    <BlocoHeader>
                        <HeaderImg src={logo} class='logo' alt="" />
                        <HeaderImg src={profile} class='perfil' alt="" />
                    </BlocoHeader>
                </Header>


                <BlocoEscolha>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <Titulo>
                                <AccordionButton>
                                    <Box as="h2" flex='1' textAlign='left'>
                                        Selecione o sentimento desejado:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Titulo>
                            <AccordionPanel pb={4}>
                                <DivCaixaSentimento>

                                    
                                    <CaixaSentimento1 id='feliz' onClick={() => executarUseState('feliz')}>
                                        <SentimentoEmoji alt='' src={sorriso}/>
                                    </CaixaSentimento1>
                                    
                                    
                                    {/* <CaixaSentimento1 id='feliz' onClick={() => setEmocao("feliz")}> */}

                                        {/* <LinkStyle to='/paletas'>
                                        <SentimentoEmoji alt='' src={sorriso} />
                                        </LinkStyle> */}
                                    {/* </CaixaSentimento1> */}


                                    <CaixaSentimento2 id='triste' onClick={() => executarUseState('triste')}><SentimentoEmoji alt='' src={triste} /></CaixaSentimento2>
                                    <CaixaSentimento3 id='paixao' onClick={() => executarUseState('paixao')}><SentimentoEmoji alt='' src={paixao} /></CaixaSentimento3>
                                    <CaixaSentimento4 id='raiva' onClick={() => executarUseState('raiva')}><SentimentoEmoji alt='' src={raiva} /></CaixaSentimento4>

                                </DivCaixaSentimento>

                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <Titulo>
                                <AccordionButton>
                                    <Box as="h2" flex='1' textAlign='left'>
                                        Selecione a cor desejada:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Titulo>
                            <AccordionPanel pb={4}>
                                <DivCaixaSentimento>

                                    <SelecionarCorAmarelo onClick={() => executarUseState('amarelo')}/>
                                    <SelecionarCorAzul onClick={() => executarUseState('azul')}/>
                                    <SelecionarCorRosa onClick={() => executarUseState('rosa')}/>
                                    <SelecionarCorVermelho onClick={() => executarUseState('vermelho')}/>
                                    

                                </DivCaixaSentimento>

                                <DivCaixaSentimento>
                                    <SelecionarCorVerde onClick={() => executarUseState('verde')}/>
                                    <SelecionarCorLaranja onClick={() => executarUseState('laranja')}/>
                                    <SelecionarCorRoxo onClick={() => executarUseState('roxo')}/>
                                    <SelecionarCorCiano onClick={() => executarUseState('ciano')}/>
                                </DivCaixaSentimento>

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </BlocoEscolha>
                <Link to='/home'><Retornar>Retornar</Retornar></Link>
            </Background>
        </>

    )
    console.log(emocao)
}
import { Background } from '../styledGlobal';
import styled from "styled-components"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
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
    width: 10vw;
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



export default function Sentimentos() {

    const [emocao, setEmocao] = useState()

    console.log(emocao)

    const navigate = useNavigate()


   

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

                                        <CaixaSentimento1 id='feliz' onClick={() => setEmocao("feliz")}>
                                    <div onClick={()=>{navigate('/paletas')}}>
                                            <SentimentoEmoji alt='' src={sorriso}/>
                                    </div>
                                        </CaixaSentimento1>
                                     
                                    
                                    {/* <CaixaSentimento1 id='feliz' onClick={() => setEmocao("feliz")}> */}

                                        {/* <LinkStyle to='/paletas'>
                                        <SentimentoEmoji alt='' src={sorriso} />
                                        </LinkStyle> */}
                                    {/* </CaixaSentimento1> */}


                                    <LinkStyle to='/paletas'></LinkStyle><CaixaSentimento2 id='triste' onClick={() => setEmocao("triste")}><SentimentoEmoji alt='' src={triste} /></CaixaSentimento2><LinkStyle />
                                    <LinkStyle to='/paletas'></LinkStyle><CaixaSentimento3 id='paixao' onClick={() => setEmocao("paixao")}><SentimentoEmoji alt='' src={paixao} /></CaixaSentimento3><LinkStyle />
                                    <LinkStyle to='/paletas'></LinkStyle><CaixaSentimento4 id='raiva' onClick={() => setEmocao("raiva")}><SentimentoEmoji alt='' src={raiva} /></CaixaSentimento4><LinkStyle />

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

                                    <LinkStyle to='/paletas'><SelecionarCorAmarelo /></LinkStyle>
                                    <LinkStyle to='/paletas'><SelecionarCorAzul /></LinkStyle>
                                    <LinkStyle to='/paletas'><SelecionarCorRosa /></LinkStyle>
                                    <LinkStyle to='/paletas'><SelecionarCorVermelho /></LinkStyle>

                                </DivCaixaSentimento>


                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </BlocoEscolha>
            </Background>
        </>

    )
    console.log(emocao)
}
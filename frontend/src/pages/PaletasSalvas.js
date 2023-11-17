import { Header, BlocoHeader, HeaderImg } from "./Config"
import { Background } from "../styledGlobal"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import { Caixa, Titulo, Seta, TituloTxt } from "./Config";
import seta from '../assets/SetaLegal.png'
import { api } from "../services/api";
import React, { useEffect, useState } from "react";

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
                </Titulo>

                <div className='thread__container'>
                        {paletas.map((paleta) => (
                            <div className='thread__item' key={paleta.id}>
                                {/* Exibindo as cores da paleta */}
                                <p>Cor 1: {paleta.cor1}</p>
                                <p>Cor 2: {paleta.cor2}</p>
                                <p>Cor 3: {paleta.cor3}</p>
                                <p>Cor 4: {paleta.cor4}</p>
                                ---------------
                            </div>
                        ))}
                    </div>
            </Caixa>
        </Background>
       
        
    </>
    )
}
export default PaletasSalvas
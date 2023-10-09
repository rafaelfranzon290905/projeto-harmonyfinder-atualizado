import styled from "styled-components"
import { Background } from "../styledGlobal";
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import seta from '../assets/SetaLegal.png'
import olho from '../assets/olho.png'
import botao from '../assets/botao.png'
import lua from '../assets/Lua.png'
import corpo from '../assets/Acessibilidade.png'
import ToggleSwitch from "../components/Toggle/ToggleSwitch";


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

const CaixaOpcao = styled.div`
    /* padding-top: 4%; */
    
`

const LinhaOpcao = styled.div`
    background-color: #FDC180;
    /* width: 100%; */
    height: 15vh;
    border-radius: 10px;
    border-style: solid;
    border-color: #F7941D;
    border-width: 4px;
    /* text-align:center; */
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    justify-content: space-between;
`

const ImagemOlho = styled.img`
    width: 100px;
    height: 70px;
    /* margin-top: 10px; */
    /* margin-left: 2%; */
`

const TextOlho = styled.h1`
    color: white;
    text-align: center;
    font-size: 20px;
    /* margin-top: 27px; */
    font-weight: 600;
    /* margin-left: 30%; */
    /* margin-right: 30%; */
    
`

const Botao = styled(ToggleSwitch)`
    margin-right: 250px;
`   





export default function Config(){
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
                <TituloTxt>Configurações e acessibilidade</TituloTxt>
            </Titulo>
            
            <CaixaOpcao>
                <LinhaOpcao>
                    <ImagemOlho src={olho} alt='Olho cedo' />
                    <TextOlho>Leitor de tela</TextOlho>
                    <Botao/>
                </LinhaOpcao>

                <LinhaOpcao>
                    <ImagemOlho src={corpo} alt='Olho cedo' />
                    <TextOlho>Tamanho da fonte</TextOlho>
                    <Botao src={botao} alt="botão"/>
                </LinhaOpcao>

                <LinhaOpcao>
                    <ImagemOlho src={lua} alt='Olho cedo' />
                    <TextOlho>Modo escuro</TextOlho>
                    <Botao src={botao} alt="botão"/>
                </LinhaOpcao>

                

            </CaixaOpcao>
        </Caixa>
    </Background>
    </>
    )
}
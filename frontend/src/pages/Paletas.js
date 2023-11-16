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
import empty from '../assets/Empty.png'
import retorno from '../assets/return.png';
import refresh from '../assets/refresh.png';
import save from '../assets/save.png';
import ColorScheme from "color-scheme";
import { Link, useParams } from 'react-router-dom';
import { api} from "../services/api";


    function refreshPagina(){
        window.location.reload();
    } 

    let emoji

      



// -----------------------------------------------------

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
    
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor2 = styled.div`
    
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor3 = styled.div`
    
    height: 100%;
    width: 20%;
    display: flex;
`
const Cor4 = styled.div`
    
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
    :hover {
        cursor: pointer;
    }
`

const Refresh = styled.button`
    background-color: #FFB800;
    border-radius: 50px;
    border: none;
    width: 50px;
    height: 50px;
    :hover {
        cursor: pointer;
    }

`

const Salvar = styled.button`
    background-color: #F665DF;
    width: 100px;
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    :hover {
        cursor: pointer;
    }
`

 
   
export default function PaletasSalvas(){

    let variation
    let schemeTipo
    let hue
    var colors 
    let cor1
    let cor2
    let cor3
    let cor4
    let distance = 0.5
    const { emocao } = useParams();
    
    
    switch (emocao){
        case "feliz":
            emoji = sorriso
            console.log(emocao)
            variation = 'default'
            schemeTipo = 'tetrade'
            hue = hueAleatoria(1, 360)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "triste":
            emoji = triste
            console.log(emocao)
            variation = 'default'
            schemeTipo = 'tetrade'
            hue = hueAleatoria(1, 360)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "paixao":
            emoji = paixao
            console.log(emocao)
            variation = 'hard'
            schemeTipo = 'tetrade'
            hue = hueAleatoria(1, 360)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "raiva": 
            emoji = raiva
            console.log(emocao)
            variation = 'hard'
            schemeTipo = 'tetrade'
            hue = hueAleatoria(300, 360)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "amarelo":
            emoji = empty
            console.log(emocao)
            variation = 'default'
            schemeTipo = 'mono'
            hue = hueAleatoria(45, 110)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "azul":
            emoji = empty
            console.log(emocao)
            variation = 'default'
            schemeTipo = 'mono'
            hue = hueAleatoria(210, 270)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "rosa":
            emoji = empty
            console.log(emocao)
            variation = 'default'
            schemeTipo = 'mono'
            hue = hueAleatoria(330, 350)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        case "vermelho":
            emoji = empty
            console.log(emocao)
            variation = 'default'
            schemeTipo = 'mono'
            hue = hueAleatoria(345, 360)
            console.log(`A hue aleatória foi ${hue}`)
            break;
        default:
            console.log("Emoção não selecionada")
            
    
    }

    

    function hueAleatoria(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    var scheme = new ColorScheme;
    scheme.from_hue(hue)   // Start the scheme 
        .scheme(schemeTipo)     // Use the 'tetrade' scheme, that is, colors
        .distance(distance)                    // selected from 4 points equidistant around

                                // the color wheel.
        .variation(variation);   // Use the 'soft' color variation

        colors = scheme.colors();
        cor1 = "#" + colors[0]
        cor2 = "#" + colors[4]
        cor3 = "#" + colors[8]
        cor4 = "#" + colors[12]
        /*
        colors = [ "e69373", "805240", "e6d5cf", "bf5830" ,
                    "77d36a", "488040", "d2e6cf", "43bf30" ,
                    "557aaa", "405c80", "cfd9e6", "306ebf" ]
        */
    
        console.log(colors)
        console.log(cor1)

        switch (emocao){
            case "amarelo":
                cor1 = "#" + colors[0]
                cor2 = "#" + colors[1]
                cor3 = "#" + colors[3]
                cor4 = "#" + colors[2]
                break;
            case "triste":
                variation = 'default'
                cor1 = "#" + colors[1]
                cor2 = "#" + colors[5]
                cor3 = "#" + colors[9]
                cor4 = "#" + colors[13]
                    break;
            case "paixao":
                cor1 = "#" + colors[3]
                cor2 = "#" + colors[7]
                cor3 = "#" + colors[11]
                cor4 = "#" + colors[15]
                break;
            case "raiva": 
                cor1 = "#" + colors[0]
                cor2 = "#" + colors[1]
                cor3 = "#" + colors[12]
                cor4 = "#" + colors[13]
                break;
            case "azul":
                cor1 = "#" + colors[0]
                cor2 = "#" + colors[1]
                cor3 = "#" + colors[3]
                cor4 = "#" + colors[2]
                break;
            case "rosa": 
                cor1 = "#" + colors[0]
                cor2 = "#" + colors[1]
                cor3 = "#" + colors[3]
                cor4 = "#" + colors[2]
                break;
            case "vermelho": 
                cor1 = "#" + colors[0]
                cor2 = "#" + colors[1]
                cor3 = "#" + colors[3]
                cor4 = "#" + colors[2]
                break;
            default:
                console.log("Emoção não selecionada")
                
        
        }
    


    let styleColor1 = {background: cor1}
    let styleColor2 = {background: cor2}
    let styleColor3 = {background: cor3}
    let styleColor4 = {background: cor4}

    const handleSave = async () => {
        const data = {
            cor1,
            cor2,
            cor3,
            cor4,
            idUsuario: localStorage.getItem('id')
        };
        const response = api.post('/salvar/paleta', data);
        await response;
        if (response.data.success) {
            alert('salvou');
        } else {
            alert('Nao salvou');
        }
    };

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
                    <Selecionado src={emoji}></Selecionado>
                </Titulo>

                <CaixaPaletas>
                    <Cor1 style={styleColor1}></Cor1>
                    <Cor2 style={styleColor2}></Cor2>
                    <Cor3 style={styleColor3}></Cor3>
                    <Cor4 style={styleColor4}></Cor4>
                </CaixaPaletas>

                <CaixaBotao>
                    <Link to='/sentimentos'><Retornar><img src={retorno} alt="" height='20px'/>Retornar</Retornar></Link>
                    <Refresh onClick={() => refreshPagina()}><img src={refresh} alt="" height='30px'></img></Refresh>
                    <Salvar onClick={handleSave}>Salvar<img src={save} alt="" height='20px'></img></Salvar>
                </CaixaBotao>
            </Caixa>
        </Background>
       
        
    </>
    )
}
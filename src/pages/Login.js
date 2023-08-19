import styled from "styled-components"
// import { Background } from "../styledGlobal";
import { Header, BlocoHeader, HeaderImg } from "./Config"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import fotoFundo from "../assets/background.PNG"

export const FormLogin = styled.div`
    background-color: #004A8D;
    width: 30%;
    margin-top: 1%;
    margin-left: 10%;
    padding: 5px;
    border-radius: 30px;
    text-align: center;
`

export const CardTitle = styled.h2`
    color: black;
    text-align: center;
`

export const FormInput = styled.input`
    width: 80%;
    height: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    border: none;
    padding: 15px;
`

export const FormSubmit = styled.button`
    display: block;
    width: 50%;
    height: 30px;
    font-size: 18px;
    font-weight: 900;
    background-color: #ECE200;
    border-radius: 20px;
    border-style: none;
    margin-left: 25%;
    margin-right: 25%;
    &:hover {
      background-color: #FFB800;
      transform: scale(1.05, 1.05);
      transition: 1s;

    }
`

const Fundo = styled.div`
    background-image: url(${fotoFundo});
    background-size: cover;
    width: 100%;
    min-height: 100vh;
`
    

function App() {
  return (
    <>
    <Fundo>
        <Header>
            <BlocoHeader>
                <HeaderImg src={logo} class='logo' alt=""/>
                <HeaderImg src={profile} class='perfil' alt=""/>
            </BlocoHeader>
        </Header>

    <FormLogin>

      <CardTitle>Username</CardTitle>
      <FormInput></FormInput>
      <CardTitle>Email</CardTitle>
      <FormInput></FormInput>
      <CardTitle>Senha</CardTitle>
      <FormInput></FormInput>
      <FormSubmit type='submit'>Enviar</FormSubmit>
    </FormLogin>
    
    </Fundo>
    
    </>
  );
}

export default App;
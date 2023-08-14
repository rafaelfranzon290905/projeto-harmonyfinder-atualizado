import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import fundo from './assets/loginFundo.png'


const Background = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`

export const Titulo = styled.h1`
    color: #FF79C6;
    text-align: center;
`

export const FormLogin = styled.div`
    background-color: #00A3FF;
    width: 30%;
    margin-top: 5%;
    margin-left: 10%;
    padding: 20px;
    border-radius: 30px;
    border-style: solid;
    border-color: #00A3FF;
    border-width: 4px;
    text-align: center;
`

export const CardTitle = styled.h2`
    color: black;
    text-align: center;
`

export const FormInput = styled.input`
    width: 80%;
    height: 40px;
    border-radius: 20px;
    margin-bottom: 40px;
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
    margin-bottom: 20px;
    border-style: none;
    margin-left: 25%;
    margin-right: 25%;
    &:hover {
      background-color: #FFB800;
      transform: scale(1.05, 1.05);
      transition: 1s;

    }
`


function App() {
  return (
    <>
    <GlobalStyle/>
    <Background>
    <Titulo>Ojisdji</Titulo>
    <FormLogin>

      <CardTitle>Username</CardTitle>
      <FormInput></FormInput>
      <CardTitle>Email</CardTitle>
      <FormInput></FormInput>
      <CardTitle>Senha</CardTitle>
      <FormInput></FormInput>
      <FormSubmit type='submit'>Enviar</FormSubmit>
    </FormLogin>
    
    </Background>
    
    </>
  );
}

export default App;

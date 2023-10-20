import styled from "styled-components"
// import { Background } from "../styledGlobal";
import { Header, BlocoHeader, HeaderImg } from "./Config"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import fotoFundo from "../assets/background.PNG";
import { useState } from "react";
import { LayoutComponents } from "../components/LayoutComponents";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

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
// ---------------------------------------------------------------------------

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      senha
    };
    console.log(data);
    const response = await api.post("/auth/login", data);
      console.log(response.data);
      console.log(response.data.data[0]);

      if (response.data.success === true) { 

        setUser(response.data.data[0]);

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data[0].tokenApi}`;

        localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].name));
        localStorage.setItem("@Auth:token", response.data.data[0].token);

        navigate("/home");
        
      }
  };  
  
    return (
      <>
      <Fundo>
          <Header>
              <BlocoHeader>
                  <HeaderImg src={logo} class='logo' alt=""/>
                  <HeaderImg src={profile} class='perfil' alt=""/>
              </BlocoHeader>
          </Header>
  
      {/* <FormLogin onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit} className="login-form">
        <CardTitle>Username</CardTitle>
        <FormInput
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></FormInput>

        <CardTitle>Email</CardTitle>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></FormInput>

        <CardTitle>Senha</CardTitle>
        <FormInput
          type="password"
          value={senha}
          onChange={(e) => setPassword(e.target.value)}
        ></FormInput>
        {/* <FormSubmit type='submit'>Enviar</FormSubmit> */}
        <button type="submit">Enviar</button>
      </form>
      {/* </FormLogin> */}
      
      </Fundo>
      
      </>
    );
};


import { Background} from '../styledGlobal';
import { Header, BlocoHeader, HeaderImg } from "./Config"
import styled from "styled-components"
import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

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


export default function Cadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
        name,
        email,
        password,
        };
        await api.post("/user/create", data);
        alert("Usuário criado com sucesso!");

        navigate("/home");
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
        </Background>
        <form onSubmit={handleSubmit}>
            <CardTitle>Username</CardTitle>
            <FormInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></FormInput>

            <button type="submit">Enviar</button>
        </form>
        
        </>  
    )
}
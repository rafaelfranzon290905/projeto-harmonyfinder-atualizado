import React from 'react';

import Home from './pages/Home';
import Sentimentos from './pages/Sentimentos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
// import { ChakraProvider } from '@chakra-ui/react'
import {GlobalStyle } from "./styledGlobal"
import Paletas from './pages/Paletas';
import PaletasSalvas from './pages/PaletasSalvas';
import Config from './pages/Config';
import Cadastro from './pages/Cadastro';


export default function App() {
  return (
<>
{/* <ChakraProvider> */}

    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/sentimentos" element={<Sentimentos/>}/>
          <Route path="/paletas/:emocao" element={<Paletas/>}/>
          <Route path="/saved" element={<PaletasSalvas/>}/>
          <Route path="/config" element={<Config/>}/>
          <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
{/* </ChakraProvider> */}

</>
  
   
   
  );
}


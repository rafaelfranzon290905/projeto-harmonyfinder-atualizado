import logo from '../assets/senac_logo_branco.png';
import profile from '../assets/image-removebg-preview (3).png';
import gif from '../assets/synthwave high definition.gif'
import comeco from '../assets/play.png'
import status from '../assets/status.png'
import configuracao from '../assets/config.png'
import { Header, BlocoHeader, HeaderImg } from './Sentimentos';
// import './App.css';
import '../style.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background} from '../styledGlobal';


const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`


function Home() {
  return (
    <Background>
      <Header>
        <BlocoHeader>
          <HeaderImg src={logo} class='logo' alt=""/>
          <HeaderImg src={profile} class='perfil' alt=""/>
        </BlocoHeader>
      </Header>

      <main>
        <div class='gifFundo'>
          <img src={gif} class='gifFundo' alt=""></img>
          <h1 class='fonte'>HarmonyFinder</h1>
          <h2 class='fonte2'>Estúdio de estéticas nas sensações</h2>

        </div>
          <div class="container">
          <div class='cards'>
            <LinkStyle to='/sentimentos'>
            <div class='containerImagem'>
              <p>Começar</p>
              
              <img src={comeco} alt="" width="40%"/>
            </div>
            </LinkStyle>

            <LinkStyle to='/saved'>
            <div class='containerImagem'>
              <p>Salvos</p>
              
              <img src={status} alt="" width="40%"/>
             
            </div>
            </LinkStyle>

            <LinkStyle to='/config'>
            <div class='containerImagem'>
              <p>Configurações</p>
              <img src={configuracao} alt='' width="40%"/>
            </div>
            </LinkStyle>

          </div>
        </div>
      </main>

      <footer>
        <LinkStyle to='/login'>Fazer login</LinkStyle>
        <LinkStyle to='/cadastro'>Fazer cadastro</LinkStyle>
      </footer>
   

    </Background>
    
  );
}

export default Home;

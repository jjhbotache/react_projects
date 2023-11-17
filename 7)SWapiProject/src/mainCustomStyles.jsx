import { createGlobalStyle, keyframes } from 'styled-components';
import SWFont from './assets/fonts/Starjedi.ttf';
import starsBG from './assets/imgs/starsBG.jpg';

const bg_moving = keyframes`
  0%,100% {
    background-position: 0% 0%;
  }
  50%{
    background-position: 100% 0%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SWFont';
    src: local('SWFont'), url(${SWFont});
  }
  body{
    background: url(${starsBG});
    background-size: auto 115vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    animation: ${bg_moving} 30s linear infinite;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2rem;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: "SWFont";
    text-transform: lowercase;
  }
  
`;
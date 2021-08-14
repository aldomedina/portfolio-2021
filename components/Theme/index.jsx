import { ThemeProvider, createGlobalStyle } from 'styled-components';
import themeConfig from './themeConfig';

const GlobalStyles = createGlobalStyle`
* {
    scroll-behavior: smooth;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
    scrollbar-color: black #c3c0c0;
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #c3c0c0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
 html, body, #__next {
    height: 100%;
    background-color: #FBFBFB;
 }
 h1, h2, h3, h4{    
    font-family: "Lexend Deca";
    font-weight: normal;
    text-transform: uppercase;
 }
 h1, h2, h3, h4, p, ul, li, button {
    margin: 0;
    padding: 0;
 }
 p {
    line-height: 1.5;
    font-family: "Space Grotesk";
  }
  button {
    border: none;
    background-color: transparent;    
    cursor: pointer;
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
`;

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

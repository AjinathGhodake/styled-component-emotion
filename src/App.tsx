import { FancyButton, StyledButton } from "./components/Button";
import './App.css';
import logo from './logo.svg';
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";
import { Theme, ThemeProvider,Global, css } from "@emotion/react";

export type TCustomTheme = Theme & {
    dark:{
        primary:'#000',
        text:'#fff'
    },
    white:{
        primary:'#fff',
        text:'#000'
    }
    
}
const globalStyles = css`
  body {
    font-family: 'Roboto';
    background-color: #f0f0f0;
  }
`;

function App() {
    const theme: TCustomTheme  = {
        dark:{
            primary:'#000',
            text:'#fff'
        },
        white:{
            primary:'#fff',
            text:'#000'
        }
        
    }
  return (
    <ThemeProvider theme={theme}>
         <Global styles={globalStyles} />
      <AnimatedLogo src={logo} alt="logo"></AnimatedLogo>
    <StyledButton>Styled Button</StyledButton>
    <div>
        <br />
    </div>
    <StyledButton variant={'outlined'}>Styled Button</StyledButton>     
    <div>
        <br />
    </div>
    <FancyButton>Fancy Button</FancyButton>     
    <div>
        <br />
    </div>
    <DarkButton>Dark Theme</DarkButton>
    </ThemeProvider>
  );
}

export default App;

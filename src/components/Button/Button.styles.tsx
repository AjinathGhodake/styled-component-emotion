import { keyframes } from "@emotion/react";
import styled  from "@emotion/styled";
import { TCustomTheme } from "../../App";


type TButtonProps = {
    variant?:'primary' | 'outlined';
    theme?:TCustomTheme;
    children: React.ReactNode;
}
export const StyledButton = styled.button<TButtonProps>`
    border: .125rem solid #4caf50;
    background-color: ${(props)=>props.variant === 'outlined'?'#fff':'#4caf50'};
    color: ${(props:any)=>props.variant === 'outlined'?'#4caf50':'#fff'};
    padding: .9375rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
    transition:0.5s all ease-in-out;
    &:hover{
        background-color: ${(props)=>props.variant !== 'outlined'?'#fff':'#4caf50'};
        color: ${(props:any)=>props.variant !== 'outlined'?'#4caf50':'#fff'}; 
    }
`;

export const FancyButton = styled(StyledButton)<TButtonProps>`
background-image: linear-gradient(to right, #f6d365 0%,#fda085 100%);
border:none;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
export const AnimatedLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 20s linear;
`

export const DarkButton = styled(StyledButton)<TButtonProps>`
    border: 2px solid ${(props)=>props.theme.dark.primary};
    background-color: ${(props)=>props.theme.dark.primary};
    color: ${(props)=>props.theme.dark.text};
`
import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: var(--Font-Primary);   
    }

    body{
        width: 100%;
        min-height: 100vh;
        background-color: var(--Color-Grey-4);
    }

    #root{
        width: 100%;
        min-height: 100vh;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    a{
        text-decoration: none;
    }

    ul, ol{
        list-style: none;
    }

    input{
        background-color: transparent;
        border: 0;
    }
`
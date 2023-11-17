import styled from "styled-components";

export const SearchContainer = styled.div`
    position: sticky;
    top: 0;
    
    ${
        (props)=>(props.above=="true"
        ?(`
        background: rgba(0, 1, 27, 0.8);
        border-bottom: 1px solid #ffff00;
        box-shadow: 0px -2px 10px #ffff00;
        `)
        :(`
        background: none;
        `)
        )
    }
    padding-bottom: 1rem;

    z-index: 1;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in;

    & h1{
        font-size: 3rem;
        color: #ffff00;
        text-shadow: 0px 0px 5px #ffff00;
    }

    & input{
        width: 100%;
        height: 2rem;
        border-radius: 5px;
        border: 1px solid black;
        padding-left: 0.5rem;
        font-size: 1.5rem;
        background: #222;
        color: #ffff00;
        text-shadow: 0px 0px 5px #ffff00;
    } 

    & input:focus{
        outline: none;
        box-shadow: 0px 0px 10px #ffa600;
    }
`;

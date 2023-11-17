import styled from "styled-components";

export const CharacterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 2rem;


    & p{
        margin-bottom: .2rem;
    }
    & h1{
        text-align: center;
    }
`;
export const CharacterImg = styled.img`
    border: .3rem solid #ffff00;
    border-radius: 1rem;
    height: 50vh;
    width: 50vh;
    max-width: 95vw;
    transition: all ease-out .3s;

    ${({ imgsrc }) => (imgsrc!="" ? `
        background-image: url(${imgsrc});
        background-position: center;
        background-size: cover;
    `:`
        background-color: #0a003589;
    `
    )}

    &:hover{
        filter: drop-shadow(0px 0px 1rem #ffff00);
        transform: scale(1.05);
    }
`;

export const LinksContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    gap: 1rem;
    list-style: none;
    overflow-x: scroll;
`;

export const SpecialLink = styled.a`
    color: #ffff00;
    width: 20%;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all ease-out .2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        transform: scale(1.04);
        color: #fff000;
        filter: drop-shadow(0px 0px 0.2rem #fff000);
        /* text-shadow: #fff000 0px 0px 10px 0px; */
    }
    & > i{
        font-size: 1.2rem;
        height: auto;
    }
`;  
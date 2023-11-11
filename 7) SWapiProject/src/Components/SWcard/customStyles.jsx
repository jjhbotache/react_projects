import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledArticle = styled.article`
    min-width: 290px;
    width: 30%;
    transition: all 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.6);
    padding: .5rem 1rem;
    border-radius: 10%;
    &:hover {
        transform: scale(1.03);
    }
`;

export const StyledInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    margin: 0.2rem;

    & > p { margin:0 !important; }
`;
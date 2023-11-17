import styled from "styled-components"


const maleColor = "#0000ff";
const femaleColor = "#ff00d0";
const otherColor = "#fff";
export const StyledBox = styled.div`
background: #000;
display: grid;
place-items: center;
overflow: hidden;
height: 3rem;
width: 3rem;
min-width: 3rem;
border-radius: 5%;
margin-right: 1rem ;
${(props)=>{
    return props.gender==="male" ? `   
    border: 0.1rem solid ${maleColor};
    box-shadow: 0 0 0.5rem ${maleColor};
    `:
    props.gender === "female" ? `
    border: 0.1rem solid ${femaleColor};
    box-shadow: 0 0 0.5rem ${femaleColor};
    `:
    `
    border: 0.1rem solid ${otherColor};
    box-shadow: 0 0 0.5rem ${otherColor};
    `
}}
`

const minHegiht = 135;
const maxHeight = 230;
const avgHeight = 165;

export const StyledPerson = styled.i`
position: relative;
&::before{
    position: absolute;
    top: 50%;
    left: 50%;
    /* according to the height, shos the person taller or shorter */
    transform: translate(-45%, ${ props => props.height_cm 
        ?`${  (avgHeight-(props.height_cm>minHegiht
                        ?props.height_cm<maxHeight?props.height_cm
                        :maxHeight
                    :minHegiht
                    ))
            }%`
        : '-0%'
    });

    font-size: 3rem;
    color: ${props=>props.skinColor || "#fff"};
}
`;
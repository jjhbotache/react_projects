import { StyledBox,StyledPerson } from "./customStyles"


export default function Person({character}) {
    const {height:height_cm,gender} = character;
    let {skin_color:skinColor} = character;
    if (skinColor.includes(",")){
        skinColor = skinColor.split(",");
        skinColor = skinColor[skinColor.length - 1].trim();
    }
    return(
        <StyledBox gender={gender}>
            <StyledPerson skinColor={skinColor} height_cm={height_cm} className="fi fi-ss-person-simple"></StyledPerson>
        </StyledBox>
    )
       
};

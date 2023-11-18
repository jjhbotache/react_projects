import { StyledBox,StyledPerson } from "./customStyles"


export default function Person({character}) {
    const {height:height_cm,gender} = character;
    let {skin_color:skincolor} = character;
    if (skincolor.includes(",")){
        skincolor = skincolor.split(",");
        skincolor = skincolor[skincolor.length - 1].trim();
    }
    return(
        <StyledBox $gender={gender}>
            <StyledPerson $skincolor={skincolor} $height_cm={height_cm} className="fi fi-ss-person-simple"></StyledPerson>
        </StyledBox>
    )
       
};

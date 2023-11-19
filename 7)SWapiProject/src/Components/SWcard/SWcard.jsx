import { Link } from "react-router-dom";
import Person from "../../Components/Person/Person.jsx";
import { StyledArticle, StyledInfo } from "./customStyles.jsx";
// navigate
import { useNavigate } from "react-router-dom";
import { getIdFromLink } from "../../functions/stringEditors.jsx";

export default function SWcard({character:c}) {
    const navigate = useNavigate();

    function onSeeDetails(character) {
        navigate("/character/"+getIdFromLink(character.url));
    }

    return(
        <StyledArticle onClick={e=>(onSeeDetails(c))}>
            <h6>{c.name}</h6>
            <StyledInfo>
                <Person character={c}/>
                <p>
                    <span>Height:</span> {c.height}cm <br/>
                    <span>Skin color:</span> {c.skin_color} <br/>
                    <span>Gender:</span> {
                    c.gender === "male"?"🚹"
                    :c.gender === "female"?"🚺"
                    :"🚻"
                    }
                </p>
            </StyledInfo>
        </StyledArticle>
    )
};

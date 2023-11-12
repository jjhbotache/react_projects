import { useEffect, useState } from "react";
import { getIdFromLink, getImg } from "../../functions/functions";
import { CharacterContainer, CharacterImg, LinksContainer, SpecialLink } from "./customStyles.jsx";

export default function Character() {
    const [characterInfo, setCharacterInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    function getNewImg(){
      getImg(characterInfo?.name).then((url) => setImgUrl(url)).catch(e => setImgUrl(""));
    }
    useEffect(()=>{
        if(localStorage.getItem("characterInfo")){
            setCharacterInfo(JSON.parse(localStorage.getItem("characterInfo")))
        }else{
          window.location.href = "/"
        }
        
    },[])

    useEffect(()=>{
      characterInfo && getNewImg()
      console.log(characterInfo);
    },[characterInfo])

    return(
      <CharacterContainer>
        <div onClick={getNewImg}>
          <CharacterImg imgsrc={imgUrl} />
          <h1>{characterInfo?.name || "no name"}</h1>
        </div>
        {characterInfo && (
        <div>
          <h3>Datails:</h3>
          <p><strong>Height:</strong> {characterInfo.height}</p>
          <p><strong>Mass:</strong> {characterInfo.mass}</p>
          <p><strong>Hair Color:</strong> {characterInfo.hair_color}</p>
          <p><strong>Skin Color:</strong> {characterInfo.skin_color}</p>
          <p><strong>Eye Color:</strong> {characterInfo.eye_color}</p>
          <p><strong>Birth Year:</strong> {characterInfo.birth_year}</p>
          <p><strong>Gender:</strong> {characterInfo.gender}</p>

          <h3>Homeworld:</h3>
          <LinksContainer>
            <li>
          <SpecialLink href={characterInfo.homeworld}>
            <i className="fi fi-ss-world"></i>
          </SpecialLink>
          </li>
          </LinksContainer>
          <h3>Films:</h3>
          <LinksContainer>
            {characterInfo.films.map((film, index) => (
              <li key={index}>
                <SpecialLink href={film}>
                  <i className="fi fi-sr-clapperboard-play"></i>
                  <p>{getIdFromLink(film)}</p>
                </SpecialLink>
              </li>
            ))}
          </LinksContainer>
          <h3>Vehicles:</h3>
          <LinksContainer>
            {characterInfo.vehicles.map((vehicle, index) => (
                    <li key={index}>
                      <SpecialLink href={vehicle}>
                        <i className="fi fi-sr-car-alt"></i>
                        <p>{getIdFromLink(vehicle)}</p>
                      </SpecialLink>
                    </li>
                ))}
            </LinksContainer>
            <h3>Starships:</h3>
            <LinksContainer>
                {characterInfo.starships.map((starship, index) => (
                    <li key={index}>
                      <SpecialLink href={starship}>
                        <i className="fi fi-sr-rocket"></i>
                        <p>{getIdFromLink(starship)}</p>
                      </SpecialLink>
                    </li>
            ))}
          </LinksContainer>
        </div>
        )}
      </CharacterContainer>
    )

};

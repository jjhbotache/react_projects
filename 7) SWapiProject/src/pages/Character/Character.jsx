import { useEffect, useState } from "react";
import { getImg } from "../../functions/functions";

export default function Character() {
    const [characterInfo, setCharacterInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("characterInfo")){
            setCharacterInfo(JSON.parse(localStorage.getItem("characterInfo")))
        }else{
            setLoading(true);
            // get the parameter from the url with searchParams
            const url = new URLSearchParams(window.location.search).get("url");
            fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                setCharacterInfo(data);
                localStorage.setItem("characterInfo", JSON.stringify(data));
            })
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false));
        }
    },[])

    useEffect(()=>{
      characterInfo && getImg(characterInfo.name).then((url)=>setImgUrl(url))
    },[characterInfo])

    return(
        loading? <div>Loading...</div>:(
        <>
        <h1>Character</h1>
        {imgUrl && (
          <img src={imgUrl} style={{maxWidth:"100vw"}} />
        )}
        {characterInfo && (
        <div>
          <h2>{characterInfo.name}</h2>
          <p>Height: {characterInfo.height}</p>
          <p>Mass: {characterInfo.mass}</p>
          <p>Hair Color: {characterInfo.hair_color}</p>
          <p>Skin Color: {characterInfo.skin_color}</p>
          <p>Eye Color: {characterInfo.eye_color}</p>
          <p>Birth Year: {characterInfo.birth_year}</p>
          <p>Gender: {characterInfo.gender}</p>
          <p>Homeworld: <a href={characterInfo.homeworld}>{characterInfo.homeworld}</a></p>
          <h3>Films:</h3>
          <ul>
            {characterInfo.films.map((film, index) => (
              <li key={index}><a href={film}>{film}</a></li>
            ))}
          </ul>
          <h3>Vehicles:</h3>
          <ul>
            {characterInfo.vehicles.map((vehicle, index) => (
                    <li key={index}><a href={vehicle}>{vehicle}</a></li>
                ))}
            </ul>
            <h3>Starships:</h3>
            <ul>
                {characterInfo.starships.map((starship, index) => (
                    <li key={index}><a href={starship}>{starship}</a></li>
            ))}
          </ul>
        </div>
      )}
        </>
        )
    )
};

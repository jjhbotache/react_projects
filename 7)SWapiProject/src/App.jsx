import { useEffect, useState } from "react";
import SWcard from "./Components/SWcard/SWcard";
import { StyledSection } from "./customStyles";
import Search from "./Components/Search/Search";
import InfinySpinner from "./Components/InfinySpinner/InfinySpinner";
import { useNavigate } from "react-router-dom";
import useSWCharacters from "./Hooks/useSWCharacters";
import useSearch from "./Hooks/useSearch";

  
export default function App() {
  const [cToRender, setCToRender] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [above, setAbove] = useState((document.documentElement.scrollTop > 15).toString() || "false");
  const { loading:searchLoading, searchText, setSearchText, results, search } = useSearch();
  
  const navigate = useNavigate();

  const { loading, characters, loadCharacters } = useSWCharacters();

  console.log("loading: "+loading);
  

  useEffect(() => {
    loadCharacters();

    
    
    let interval;
    if(JSON.parse(localStorage.getItem("charactersName")).charactersNames.length <= 82 ){
    setSuggestions(JSON.parse(localStorage.getItem("charactersName")).charactersNames);
    interval = setInterval(() => {
      setSuggestions(JSON.parse(localStorage.getItem("charactersName")).charactersNames);
    }, 10000);
    }

    return () => {clearInterval(interval)}
  }, []);


  function onSeeDatils(event,character) {
    event.preventDefault();
    localStorage.setItem("characterInfo", JSON.stringify(character));
    // window.location.assign("/character");
    navigate("/character");
  }


  useEffect(() => {
    setCToRender(searchText
      ?results
      :characters
    );
  }, [characters, results]);

  useEffect(() => {
    function handleScroll() {
      setAbove((document.documentElement.scrollTop > 15).toString());
      if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 300 &&
        (!loading && !searchLoading)
      ){
        searchText
        ?search(true)
        :loadCharacters();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, searchLoading, searchText]);

  
  
  return (
    <>
      <Search value={searchText} onChange={(e) => setSearchText(e.target.value)} suggestions={suggestions} above={above}/>
      <div>
        <StyledSection>
          {cToRender?.map((c) => <SWcard key={c.url} character={c} onSeeDatils={onSeeDatils}/>)}
        </StyledSection>
        {(loading || searchLoading) && <InfinySpinner/>}
      </div>
    </>
  );
  
  
}
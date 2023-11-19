import { useEffect, useState } from "react";
import SWcard from "./Components/SWcard/SWcard";
import { StyledSection } from "./customStyles";
import Search from "./Components/Search/Search";
import InfinySpinner from "./Components/InfinySpinner/InfinySpinner";
import { useNavigate } from "react-router-dom";
import useSWCharacters from "./Hooks/useSWCharacters";
import useSearch from "./Hooks/useSearch";
import useAbove from "./Hooks/useAbove";
import useSuggestions from "./Hooks/useSuggestions";

  
export default function App() {
  const [cToRender, setCToRender] = useState([]);
  const { isAbove, checkAbove } = useAbove();
  const { loading:searchLoading, searchText, setSearchText, results, search } = useSearch();
  const { loading, characters, loadCharacters } = useSWCharacters();
  const  { suggestions } = useSuggestions();
  
  const navigate = useNavigate();

  

  

  useEffect(() => {
    loadCharacters();
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

  function handleScroll() {
    checkAbove();

    const userViewLocationPx = window.innerHeight + document.documentElement.scrollTop;
    const contentHeight = document.documentElement.offsetHeight;
    const anyLoading = [loading,searchLoading].some((l) => l);

    userViewLocationPx >= contentHeight - 300 && !anyLoading
    &&( searchText ? search(true) : loadCharacters() )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, searchLoading, searchText]);

  
  
  return (
    <>
      <Search value={searchText} onChange={(e) => setSearchText(e.target.value)} suggestions={suggestions} above={isAbove}/>
      <div>
        <StyledSection>
          {cToRender?.map((c) => <SWcard key={c.url} character={c}/>)}
        </StyledSection>
        {(loading || searchLoading) && <InfinySpinner/>}
      </div>
    </>
  );
  
  
}
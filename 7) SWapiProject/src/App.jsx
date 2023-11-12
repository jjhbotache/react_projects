import { useEffect, useState } from "react";
import SWcard from "./Components/SWcard/SWcard";
import { StyledSection } from "./customStyles";
import Search from "./Components/Search/Search";
import InfinySpinner from "./Components/InfinySpinner/InfinySpinner";
  
export default function App() {
  const [nextUrl, setNextUrl] = useState("");
  const [cToRender, setCToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchBar, setSearchBar] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [above, setAbove] = useState((document.documentElement.scrollTop > 15).toString() || "false");

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((e) => e.json())
      .then((res) => {
        setNextUrl(res.next);
        setCToRender(res.results);
      })
      .catch((error) => console.error("Error fetching initial data:", error))
      .finally(() => setIsLoading(false));
    let interval;
    if(JSON.parse(localStorage.getItem("charactersName")).charactersNames.length <= 82 ){
    setSuggestions(JSON.parse(localStorage.getItem("charactersName")).charactersNames);
    interval = setInterval(() => {
      setSuggestions(JSON.parse(localStorage.getItem("charactersName")).charactersNames);
    }, 10000);
    }
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(cToRender);
    function newFetch() {
      setIsLoading(true);
      fetch(nextUrl)
        .then((e) => e.json())
        .then((res) => {
          setNextUrl(res.next);
          setCToRender([...cToRender, ...res.results]);
        })
        .catch((error) => console.error("Error fetching additional data:", error))
        .finally(() => setIsLoading(false));
    }

    function handleScroll(e) {
      // console.log(document.documentElement.scrollTop);
      setAbove((document.documentElement.scrollTop > 15).toString());
      if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 150 && !isLoading)
      {
        newFetch();
        console.log("fetching new data");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll);};
  }, [cToRender,isLoading,nextUrl]);

  function onSeeDatils(event,character) {
    event.preventDefault();
    localStorage.setItem("characterInfo", JSON.stringify(character));
    window.location.assign("/character");
  }

  useEffect(()=>{
    function search(){
      if(isLoading) return;
      console.log("searching");
      setIsLoading(true);
      fetch(`https://swapi.dev/api/people${searchBar?`/?search=${searchBar}`:""}`)
      .then((e) => e.json())
      .then((res) => {
        setNextUrl(res.next);
        setCToRender(res.results);
      })
      .finally(() => setIsLoading(false));
    }

    const debounce = setTimeout(search, 500);

    return () => clearTimeout(debounce);
  },[searchBar])  

  
  

  return (
    <>
      <Search value={searchBar} onChange={(e) => setSearchBar(e.target.value)} suggestions={suggestions} above={above}/>
      <div>
        <StyledSection>
          {cToRender.map((c) => <SWcard key={c.url} character={c} onSeeDatils={onSeeDatils}/>)}
        </StyledSection>
        {isLoading && <InfinySpinner/>}
      </div>
    </>
  );
  
  
}
import { useEffect, useState } from "react";

export default function App() {
  const [nextUrl, setNextUrl] = useState("");
  const [cToRender, setCToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((e) => e.json())
      .then((res) => {
        setNextUrl(res.next);
        setCToRender(res.results);
      })
      .catch((error) => console.error("Error fetching initial data:", error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
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
      if(window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 150 && !isLoading)
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
      setIsLoading(true);
      fetch(`https://swapi.dev/api/people${searchBar?`/?search=${searchBar}`:""}`)
      .then((e) => e.json())
      .then((res) => {
        setNextUrl(res.next);
        setCToRender(res.results);
      })
      .catch((error) => console.error("Error fetching additional data:", error))
      .finally(() => setIsLoading(false));
    }

    const debounce = setTimeout(search, 500);

    return () => clearTimeout(debounce);
  },[searchBar])



  return (
    <div className="App">
      <h1>React App</h1>
      <input
        type="text"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <div>
        {cToRender.map((c) => (
          <div style={{ height: "10vh" }} key={c.url}>
            <a onClick={e=>(onSeeDatils(e,c))}>{c.name}</a>
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

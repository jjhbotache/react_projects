import { useEffect, useState } from "react";
import baseApiUrl from "../constants/apiConsts";

export default function useSWCharacters() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    // Juan2005.
    function loadCharacters() {
        if(loading) return;
        console.log("loading page "+page);
        setLoading(true);
        fetch(baseApiUrl+"/people/?page="+page)
        .then((e) => e.json())
        .then((res) => {
            setPage(page+1);    
            setCharacters([...characters, ...res.results]);
        })
        .catch((error) => console.error("Error fetching initial data:", error))
        .finally(() => setLoading(false));
    }

    return { loading , characters, loadCharacters };
};

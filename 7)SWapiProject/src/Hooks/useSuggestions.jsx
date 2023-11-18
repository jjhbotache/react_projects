import { useEffect, useRef, useState } from "react";
import baseApiUrl from "../constants/apiConsts";

export default function useSuggestions() {
    const [suggestions, setSuggestions] = useState([]);
    const maxSuggestions = useRef(82);
    const givenPerPage = useRef(10);
    const [loading, setLoading] = useState(false);

    let suggestionsObj;
    try {suggestionsObj = JSON.parse(localStorage.getItem("suggestions"));
    } catch (error) {console.log("No Suggestions in LS");}
    
    function setInfo(obj) {
        maxSuggestions.current = obj.maxSuggestions
        givenPerPage.current = obj.givenPerPage > givenPerPage.current ? obj.givenPerPage : givenPerPage.current;          
        localStorage.setItem("suggestions", JSON.stringify(obj));
        setSuggestions(obj.charactersNames)
    }

    function loadMoreSuggestions() {
        if (loading || (suggestionsObj?.charactersNames?.length >= maxSuggestions.current)) return;
        const page = Math.ceil(suggestionsObj?.charactersNames?.length / givenPerPage.current) + 1 || 1;
        setLoading(true);
        fetch(baseApiUrl + "/people/?page=" + page).then((e) => e.json()).then((res) => {
            const names = res.results.map((e) => e.name);
            const totalNames = [...suggestions, ...names];

            const infoObj = {
                maxSuggestions: res.count,
                givenPerPage: res.results.length,
                charactersNames: totalNames
            }
            
            setInfo(infoObj);                
        })
        .catch((error) => console.warn("An error has happened when loading suggestions", error))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        !suggestionsObj 
            ?loadMoreSuggestions()
            :setInfo(suggestionsObj)
    }, []);

    useEffect(() => {
        loadMoreSuggestions();
    }, [suggestions]);
    
    return { suggestions };
    
};

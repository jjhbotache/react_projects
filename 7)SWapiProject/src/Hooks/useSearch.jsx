import { useEffect, useState } from "react";
import baseApiUrl from "../constants/apiConsts";

export default function useSearch() {
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [nextUrl, setNextUrl] = useState("");

    function search(searchNext=false) {
        if(loading || !searchText || (searchNext && !nextUrl)) return;
        console.log("searching");
        setLoading(true);
        fetch(searchNext
            ? nextUrl
            : `${baseApiUrl}/people/?search=${searchText}`
        )
        .then((e) => e.json())
        .then((res) => {
            console.log(res);
            setResults(
                searchNext
                ? [...results, ...res.results]
                : res.results
            );
            setNextUrl(res.next);
        })
        .catch((error) => console.error("Error fetching initial data:", error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        const debounce = setTimeout(search, 500);
        return () => clearTimeout(debounce);
    }, [searchText]);





    return {loading, searchText, setSearchText, results, search };
};

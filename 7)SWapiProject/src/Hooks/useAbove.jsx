import { useState } from "react";


function defaultHandlerFunction() {
    return (document.documentElement.scrollTop > 2).toString();
}


export default function useAbove(handlerFunction=defaultHandlerFunction) {

    const [isAbove, setIsAbove] = useState(handlerFunction().toString() || "false");

    function checkAbove() {
        setIsAbove(handlerFunction().toString() || "false");        
    }

    return { isAbove, checkAbove };
};

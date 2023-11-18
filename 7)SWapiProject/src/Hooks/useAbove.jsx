import { useState } from "react";


function defaultHandlerFunction() {
    return (document.documentElement.scrollTop > 15).toString();
}
export default function useAbove(handlerFunction=defaultHandlerFunction) {

    const [isAbove, setIsAbove] = useState(handlerFunction.toString() || "false");

    function checkAbove() {
        setIsAbove((document.documentElement.scrollTop > 15).toString());        
    }

    return { isAbove, checkAbove };
};

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Character from './pages/Character/Character.jsx'

import { GlobalStyles } from './mainCustomStyles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/character",
    element: <Character/>,
  },
  {
    path: "*",
    element: <App />,
    errorElement: <App/>,
  }
  
]);

function gettingNames(){
  let names = 0
  try {names = JSON.parse(localStorage.getItem("charactersName")).charactersNames.length;} 
  catch (error) {console.log("no names: ",error);}

  if (localStorage.getItem("charactersName") && names < 82){
    const data = JSON.parse(localStorage.getItem("charactersName"));
    fetch(`https://swapi.dev/api/people/?page=${data.maxPageSearched + 1}`)
    .then((e) => e.json())
    .then((res) => {
      console.log("fetching new data");
      if (res.next){
        data.maxPageSearched = parseInt(data.maxPageSearched) + 1;
        data.charactersNames = [...data.charactersNames, ...res.results.map((e)=>e.name)];
        localStorage.setItem("charactersName", JSON.stringify(data));
        gettingNames();
      }else{
        console.log(data.charactersNames);
      }
    }).catch((error) => console.error("Error fetching additional data:", error))
  }else if(names>=82 || !localStorage.getItem("charactersName")){
    localStorage.setItem("charactersName", JSON.stringify({"charactersNames": [],"maxPageSearched": 0,}));
    gettingNames();
  }

}
gettingNames();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

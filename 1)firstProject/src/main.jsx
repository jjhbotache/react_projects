import React from 'react'
import ReactDOM from 'react-dom/client'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

/* root.render(
  // create a react fragment
  <React.Fragment>
    <button>
     <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m6.5 7.5h4l-6 9v-6.997l-4-.003 6-9z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 2)"/></svg>
      I'm a btn
    </button>
  </React.Fragment>
)  
 */


// you can do it in this way, but is not the right one
/* function createBtn(text) {
  return(
    <button>
      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m6.5 7.5h4l-6 9v-6.997l-4-.003 6-9z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 2)"/></svg>
      {text}
    </button>
  ) 
}
root.render(
  // create a react fragment
  <React.Fragment>
    {createBtn("hola1")}
    {createBtn("hola2")}
    {createBtn("hola3")}
  </React.Fragment>
) */


// the parameter has to be an obj
/* function ThunderBtn({text}){
  return(
    <button>
      <svg 
      height="21" 
      viewBox="0 0 21 21" 
      width="21" 
      xmlns="http://www.w3.org/2000/svg"><path 
      d="m6.5 7.5h4l-6 9v-6.997l-4-.003 6-9z" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      transform="translate(5 2)"/></svg>
      {text}
    </button>
  ) 
}
root.render(
  // create a react fragment
  <React.Fragment>
    <ThunderBtn text="hola" />
  </React.Fragment>
) */


// create a formatUserName function that adds a @ beforre an string
 function formatUserName(userName) {
  return `@${userName}`
}

// const element = <span>Soy otro elemento</span>
const element = <hr/>

const elonProps = {
  formatUserNameFunction: formatUserName,
  userName: "elonmusk",
  elementBelow: element
}

root.render(
  // create a react fragment
  <div style={{gap:10,display:"flex",flexDirection:"column"}}>
    <TwitterFollowCard formatUserNameFunction={formatUserName} /* userName="midudev" */ at="soy">hola?</TwitterFollowCard>
    <TwitterFollowCard formatUserNameFunction={formatUserName} userName="pheralb"  />
    <TwitterFollowCard formatUserNameFunction={formatUserName} userName="goncy" elementBelow={element} />
    <TwitterFollowCard {...elonProps}/>
    <TwitterFollowCard formatUserNameFunction={formatUserName} userName="vxnder"/>
  </div>
)


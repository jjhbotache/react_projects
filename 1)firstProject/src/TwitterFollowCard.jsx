// the style is an obj  
import { useState } from "react";
import './TwitterFollowCard.css'

export function TwitterFollowCard(
  {
    formatUserNameFunction,
    userName,
    at=userName,
    // following=false,
    elementBelow,
    children, //children always will be the content of the element
  }
  )
  {
  // this just happens once
  const [following, setFollowing] = useState(false);

  function changeState(){
    setFollowing(!following)
  }

  console.log(children)
  const text = following?"Siguiendo":"Seguir";
  const btnClassName = following?"tw-btn-following":"tw-btn-follow";


  return(
    <>
    <article className='tw'>
      <header className='tw'>
        <img src={`https://unavatar.io/${userName}`} alt="" className='tw'/>
        <div >
          <strong className='tw'>{userName?userName:children}</strong>
          <span className='tw'>{formatUserNameFunction(at)}</span>
        </div>
      </header>
      <aside className='tw'>
        <button className={btnClassName} onClick={changeState}>
          {text}
        </button>
      </aside>
    </article>
    <div style={{color:"white",backgroundColor:"black"}}>
      {elementBelow}
    </div>
    </>
  )
}
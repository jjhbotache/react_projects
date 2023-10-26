import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [enable, setEnable] = useState(true);
  const [ballPos, setBallPos] = useState({x:0,y:0});

  useEffect(() => {
    console.log("solo paso una vez");
  }, []);

  useEffect(() => {
    console.log(enable);
    if (enable) {
      window.addEventListener('pointermove', handleMove)
      document.body.style.cursor = 'none'
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.body.style.cursor = 'default'
      
    }

  },[enable]);
  
  function handleMove(e){
    const {clientX,clientY} = e;
    setTimeout(() => {
      setBallPos({x:clientX,y:clientY});
    }, 100);
  }

  return(
    <main>
      
      {enable && (<div id='ball' style={{
        left:ballPos.x,
        top:ballPos.y,
      }}></div>)}
      <h3>Hola</h3>
      <button type="button" onClick={()=>{setEnable(!enable)}} className="btn btn-primary">{enable?"disable":"enable"}</button>
    </main>
  )
}

export default App

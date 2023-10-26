// the style is an obj  
// import the css
import './App.css'
export function App(
  {
    img = "https://unavatar.io/kikobeats?ttl=1h",
    name = "kikobeats",
    at="@kikobeats"
  }
  ) {
  return(
    <article className='tw'>
      <header className='tw'>
        <img src={img} alt="" className='tw'/>
        <div >
          <strong className='tw'>{name}</strong>
          <span className='tw'>{at}</span>
        </div>
      </header>
      <aside className='tw'>
        <button className='tw'>
          seguir
        </button>
      </aside>
    </article>
  )
}
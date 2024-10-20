
import './App.css'
import Counter from './count'
import Team from './team'
import User from './user'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert("i love you anika, i miss you jan")
  }
  const handlerClick2=()=>{
    alert('i love you shona')

  }
  

  return (
    <>
      
      <h3>React Core Concept2</h3>
      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handlerClick2}>click2</button>
      <button onClick={() =>{alert("third handler clikc")}}>Click3</button>
   
    </>
  )
}

export default App

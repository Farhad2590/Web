import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './Users';

function App() {

  function handleClickFirst(){
    alert('First Button Pressed');
  }

  const handleClickSecond =() =>{
    alert('Second Button Pressed')
  }
  const addTo=(num)=>{
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concept 2</h3>

      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <Team></Team>


      <button onClick={handleClickFirst}>First Click</button>
      <button onClick={handleClickSecond}>Second Click</button>
      <button onClick={() =>{
        alert('Third Button Clicked')
      }}>Third Click</button>
      <button onClick={() =>{
        addTo(4);
      }}>Fourth</button>
    </>
  )
} 

export default App

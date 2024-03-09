import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Person></Person>
      <Developer></Developer>
      <Devices name="Laptop"Price="55k"></Devices>
      <Devices name="Mobile"Price="17k"></Devices>
      <Device name="Laptop"Price="55k"></Device>
      <Device name="Mobile"Price="17k"></Device>
    
    </>
  )
}
function Devices(props){
  return(
    <div>
      <h1>My Device is {props.name}, Price:{props.Price}</h1>
    </div>
  )
}
function Device({name,Price}){
  return(
    <div>
      <h1>My Device is {name}, Price:{Price}</h1>
    </div>
  )
}
function Person(){
  const age =25;
  return(
    <div className= 'person'>
    <h1>My name is Farhad Hossen , I am {age} years old and I am as Student</h1>
    </div>
  )
}
function Developer(){
  const developerStyle = {
    border: '2px solid red',
  margin: '20px',
  padding: '20px',
  borderRadius: '10px'
  }
  const age =45;
  return(
    <div style={developerStyle}>
    <h1>My name is Farhad Hossen , I am {age} years old And I am a developer</h1>
    </div>
  )
}
export default App

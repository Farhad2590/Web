import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'

function App() {
  const books =[
    {id:1, name:'physics', price:200},
    {id:2, name:'chemistry', price:200},
    {id:3, name:'biology', price:200},
    {id:4, name:'h. math', price:200},
  ]
  const actors = ['Pori', 'Naila', 'Joya', 'Tasnim']
  const singers = [
    {id:1 , name:'Pritom', age:24},
    {id:2 , name:'Momtaj', age:54},
    {id:3 , name:'Zohad', age:34},
    {id:4 , name:'Rafa', age:46},

]
  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books={books}></Bookstore>

      {
        singers.map(singer => <Singer singer= 
          {singer}></Singer>)
      }

      <Actor name={'Bapparaj'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>) 
      }

      {/* <Todo
        task="Learn React"
        isDone={true}>
      </Todo>
      <Todo
        task="Core React"
        isDone={false}>
      </Todo>
      <Todo
        task="Core JSX"
        isDone={true}>
      </Todo> */}
      {/*
      <Person></Person>
      <Developer></Developer>
      <Devices name="Laptop"Price="55k"></Devices>
      <Devices name="Mobile"Price="17k"></Devices>
      <Device name="Laptop"Price="55k"></Device>
      <Device name="Mobile"Price="17k"></Device> */}

    </>
  )
}
function Devices(props) {
  return (
    <div>
      <h1>My Device is {props.name}, Price:{props.Price}</h1>
    </div>
  )
}
function Device({ name, Price }) {
  return (
    <div>
      <h1>My Device is {name}, Price:{Price}</h1>
    </div>
  )
}
function Person() {
  const age = 25;
  return (
    <div className='person'>
      <h1>My name is Farhad Hossen , I am {age} years old and I am as Student</h1>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    border: '2px solid red',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px'
  }
  const age = 45;
  return (
    <div style={developerStyle}>
      <h1>My name is Farhad Hossen , I am {age} years old And I am a developer</h1>
    </div>
  )
}
export default App


// import './App.css'

import { useLoaderData } from "react-router-dom"
import CoffeCard from "./Components/CoffeCard"
import { useState } from "react"
import Navbar from "./Components/Navbar"

function App() {
  const data = useLoaderData()
  const [coffees, setCofees] = useState(data)
  return (

    <div>
      <Navbar></Navbar>
      <div className="m-20">
        
        <h1 className='text-6xl text-amber-600 text-center'>Hot Coffee : {data.length}</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {
            data.map(coffe => <CoffeCard
              key={coffe._id}
              coffe={coffe}
              coffees={coffees}
              setCofees={setCofees}
            ></CoffeCard>)
          }
        </div>

      </div>
    </div>
  )
}

export default App

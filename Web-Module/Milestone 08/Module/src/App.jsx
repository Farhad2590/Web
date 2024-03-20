import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Priceoption from './Components/Priceoption/Priceoption'
import LineChart from './Components/LineChart/LineChart'

function App() {

  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-2xl text-red-400 font-bold'>Vite + React</h1>

      <Priceoption></Priceoption>
      <LineChart></LineChart>
    </>
  )
}
// import { Line, LineChart } from 'recharts'

export default App

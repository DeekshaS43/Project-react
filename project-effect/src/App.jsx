import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst]=useState(0)
// Case 1:Run on every render
  useEffect(() => {
    alert("Hey welcome to my page , i will run on every render")
  })


  useEffect(() =>{
    alert("first was changed")
  },[first])


  useEffect(() =>{
    alert("Count was changed")
  },[count])
 
  return (
    <>
    
    </>
  ) 
}          





export default App

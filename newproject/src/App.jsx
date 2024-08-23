import { useState } from 'react'

import './App.css'

function App() {
  const[counter, setCounter]=useState(0)// constant method keep inital value in state  called hooks
  //let counter=0

  // const add =()=>{
  //   setCounter(counter+1)
  
 
  // }
  const reduce=()=>{
   setCounter(counter-1)
  }

 

  return (
    <>
     <h1>Learn how to work with react  {counter} </h1>
     <h2>Count Learner:{counter}</h2>
     {/* <button onClick={add} >Add Learners</button>{" "} */}
     <button onclick ={()=>{setCounter(counter+1)}}>Add Learners</button>
     <button onClick={reduce}>Remove It</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App

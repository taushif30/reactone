import React,{useState} from 'react'
import FunctionCompo from './Component/FunctionCompo'
import ClassCompo from './Component/ClassCompo'
import './Component/Hands.css'


function App(){
  const [fState,setFState]=useState(false)
  const [cState,setCState]=useState(false)
  console.log(fState)
 
  return(
    <div >
    <h1 className='head' > Styling Using Functional and Class Component</h1>
   
    <div className='button'>
    <button onClick={()=>setFState (!fState)}>Too see styling in Functional Component</button>
    <button onClick={()=>setCState (!cState)}>Too see styling in Class Component</button>
    </div>
    
    <div className='container'>
    {fState ? <FunctionCompo/> : " "}     
    {cState ? <ClassCompo/> : ""}

    </div>

    {/* { fState && <FunctionCompo/> } */}
    </div>
  )
}

export default App;

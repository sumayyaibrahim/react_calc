import { useState } from 'react'
import './App.css'

function App() {
  const[value,setValue]=useState('');

  return (
    <>
    <div class='flex h-screen  items-center justify-center'>
    <div class="  md:h-86 w-70 md:w-86 h-80 bg-linear-to-t from-sky-500 to-indigo-500  p-5px text-right " >
         
        

            <div class="bg-white m-2 h-20 m-3 ">
              <h1 class="text-2xl p-4 ">{value}</h1>
            </div>
         
         <div className="p-1 md:p-3  ">
          <div className='flex justify-center' >
         
           
           <input type="button" value="=" className="w-15   border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white " onClick={e=>setValue(eval(value))}></input>
           <input type="button" value="DE"  className=" w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white" onClick={e=>setValue(value.slice(0,-1))}></input>
           <input type="button" value="AC" className=" w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white " onClick={e=>setValue('')}></input>

           <input type="button" value='+'  className=" w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white" onClick={e=>setValue(value+e.target.value)}></input>
           </div>
           <div className='flex justify-center'>
           <input type="button" value="7" className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value="8" className="w-15 border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value="9" className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value="-" className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           </div>
           <div className='flex justify-center' >
           <input type="button" value='1'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white" onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='2'className="w-15 border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='3'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='4'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           </div>
           <div className='flex justify-center' >
      <input type="button" value='%' className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='5' className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='6'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white" onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='*'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white" onClick={e=>setValue(value+e.target.value)}></input>
           </div>
           
           <div className='flex justify-center' >
           <input type="button" value='0'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
           <input type="button" value='.'className="w-15  border-2 border-indigo-300 rounded-full m-1 shadow-lg shadow-white"onClick={e=>setValue(value+e.target.value)}></input>
          
           </div>
          
          
         </div>








     
    </div>
    </div>
      
    </>
  )
}

export default App

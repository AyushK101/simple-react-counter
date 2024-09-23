import { useState } from "react";

import './index.css';







function App() {


function counterUp() {
  counter +=1
  //? state as a snapshot example && prevValue callback to eval the specified setVal update in-addition to last-update(defaul) explained
  setCounter(counter)
  setCounter(counter);
  setCounter(prevCounter => prevCounter+1);
  setCounter( prevCounter => prevCounter+1);
  
}

function counterDown() {
  counter -=1
  setCounter(counter);

  
}
  
  var [counter, setCounter ] = useState(0);
  return (
  <>
    <div >
      <div className="bg-slate-700 w-screen h-screen flex justify-center items-center flex-col gap-4">
        <h1 className="text-3xl text-white " >Counter App</h1>
        <div className="bg-gradient-to-br from-teal-500 to-red-400 w-24 p-5 text-white text-3xl  text-center rounded-lg" >
            {counter}
        </div>
        <button className="bg-blue-600 px-4 py-2 border-none rounded-lg font-bold text-white text-2xl" onClick={counterUp}>increase</button>
        <button className="bg-blue-600 px-4 py-2 border-none rounded-lg font-bold text-white text-2xl" onClick={counterDown}>decrease</button>
      </div>  
    </div>
  </>
  )
}

export default App;

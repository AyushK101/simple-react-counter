import { useState } from "react";









function App() {


function counterUp() {
  counter +=1
  setCounter(counter)
  
}

function counterDown() {
  counter -=1
  setCounter(counter);
}
  
  var [counter, setCounter ] = useState(0);
  return (
  <>
    <div>
      <h1>Counter App</h1>
      <div >
          {counter}
      </div>
      <button onClick={counterUp}>increase</button>
      <button onClick={counterDown}>decrease</button>
    </div>
  </>
  )
}

export default App;

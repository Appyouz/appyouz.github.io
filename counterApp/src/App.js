import './App.css';
import {useState} from 'react';




const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button type="submit" onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Increase</button>
      <button type="submit" onClick={() => setCounter((prevCounter) => prevCounter - 1)}>Decrease</button>
      <button type="submit" onClick={() => setCounter(0)}>Reset</button>
      
   </div>
  );
}

export default App;

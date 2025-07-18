import { useState } from 'react';
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(count + 1);
    if (count === 8) {
      setCount(count)
    }
  }

  return (
    <>
      <div className="container">
        <div className="counter">
          <h1>{count}</h1>
          <button onClick={Increase}>Increase</button>
          <p className='border-purple-500 text-purple-600'>hello</p>
        </div>
      </div>
    </>
  );
}


export { App }
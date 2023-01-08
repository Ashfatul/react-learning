import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decreaseCount = () => {
    const newCount = count - 1;
    if (newCount < 0) {
      alert("Negetive count is not allowed");
    } else {
      setCount(newCount);
    }
  };

  return (
    <>
      <div className="container">
        <h1 id="count">{count}</h1>
      </div>
      <div id="action">
        <button onClick={increaseCount}>Increase (+)</button>
        <button onClick={decreaseCount}>Decrease (-)</button>
      </div>
    </>
  );
}

export default App;

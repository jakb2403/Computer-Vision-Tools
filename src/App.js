import { useState } from 'react';
import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h1>Last Name: {props.lastname}</h1>
      <h1>Age: {props.age}</h1>
    </>
  )
}


const App = () => {

  const [counter, setCounter] = useState(0);

  const name = 'John';

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>

      <Person name={"John"} lastname={"Doe"} age={30}/>
      <Person name={"Mary"} lastname={"Doe"} age={24}/>
      <h1>Hello, {2 + 2}!</h1>
      {name ? (
        <>
          {name}
        </>
        
      ) : (
        <>
          <h1>Test</h1>
          <h2>there is no name</h2>
        </>
      )
      }
    </div>
  );
}

export default App;

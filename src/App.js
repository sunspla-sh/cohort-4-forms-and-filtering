import logo from './logo.svg';
import './App.css';

import { useState } from 'react';




function App() {

  const [myInput, setMyInput] = useState('');

  const [foodArray, setFoodArray] = useState(['pizza', 'banana', 'apple']);

  const [filteredFoodArray, setFilteredFoodArray] = useState(['pizza', 'banana', 'apple']);

  return (
    <div className="App">
      <div>
        <span>Search bar:</span>
        <input onChange={(event) => {
          const newList = foodArray.filter(singleFood => {
            return singleFood.toLowerCase().includes(event.target.value.toLowerCase());
          });
          console.log(newList);
          setFilteredFoodArray(newList)
        }}/>
      </div>
      <form onSubmit={(event) => {
        event.preventDefault();
        console.log('our state is ', myInput);
        const copyFoodArray = [...foodArray];
        copyFoodArray.push(myInput);
        setFoodArray(copyFoodArray);
        setFilteredFoodArray(copyFoodArray);
        setMyInput('');
      }}>
        <label>Type Here:</label>
        <input
          type="text"
          value={myInput}
          onChange={(event) => {
            console.log('it works', event.target.value)
            setMyInput(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <div>
        <ol>
          {filteredFoodArray.map(singleFood => {
            return <li>{singleFood}</li>
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;

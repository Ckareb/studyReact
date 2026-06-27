import { useState } from 'react'
import './App.css'

function App() {
  const array = [1, 2, 3];

  const person = {name: "Иван", age: 20 };

  const data = [
    "Привет",
    100,
    true,
    person,
    [1, 2, 3],
    null
];

  const listMultyplyFive = () => {
    /*const five = 5;

    return array.map(item => {
        return(
          <div>
            {item * five}
            <button>Удалить</button>
          </div>
        );
    });
    */

      return data.map(
          data => {
            if (typeof data === "object" && data !== null && !Array.isArray(data))
              return (
                <div>
                  {data.name}
                </div>
              )
          }
      )
  }
  
  return (
    <>
        {listMultyplyFive()}
    </>
  );
}

export default App

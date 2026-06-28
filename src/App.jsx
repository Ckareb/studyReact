import { useState } from 'react'
import './App.css'

function App() {

  const person = {name: "Иван", age: 20 };

  const [data, setData] = useState([
    "Привет",
    100,
    true,
    person,
    [1, 2, 3],
    null
  ]);

    /*const handlers = {
    text: (value) => value.toUpperCase(),

    number: (value) => value + 10,

    user: (value) => ({
      ...value,
      age: value.age + 1
    })
  };

  function handleUpdate() {
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        value: handlers[item.type](item.value)
      }))
    );
  } */

  const listMultyplyFive = () => {
      return data.map(
          data => {
            if (typeof data === "object" && data !== null && !Array.isArray(data))
              return (
                <div>
                  {data.name}
                </div>
              )
            
              if (typeof data === "string") {
                return (
                  <div>
                    {data}
                  </div>
                )
              }

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

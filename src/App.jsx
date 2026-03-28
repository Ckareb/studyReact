import { useState } from 'react'
import './App.css'

function App() {
  const array = [1, 2, 3];

  const listMultyplyFive = () => {
    const five = 5;

    return array.map(item => {
        return(
          <div>
            {item * five}
            <button>Удалить</button>
          </div>
        );
    });
  }
  
  return (
    <>
        {listMultyplyFive()}
    </>
  );
}

export default App

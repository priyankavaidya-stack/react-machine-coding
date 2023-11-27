import { createContext, useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'

// this file for maching coding problem
// after clicking on counter value, as counter increases, fetch will call no of counter value cards to display
// ex: counter = 2, two data cards will print
export const Context = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
      const url = `https://random-data-api.com/api/address/random_address?size=${count}`;

      async function handleData(){
        const data = await fetch(url);
        const json = await data.json();
        setData(json);
        console.log(json);
      }
      handleData();
  },[count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <Context.Provider value={{ data }}>
     <Button handleClick={handleClick} counter={count} />
     <Card />
    </Context.Provider>
  )
}

export default App

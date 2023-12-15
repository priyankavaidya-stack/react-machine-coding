import React, { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // clear timeout to avoid setting state on unmounted component
    return () => clearTimeout(timeId);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

export default Counter;


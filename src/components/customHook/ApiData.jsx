// import React, { useState, useEffect } from 'react'

// export default function ApiData() {
//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
//         .then((data) => setData(data));
//     },[]);

//   return (
//     <>
//     { data && data.map((item)=>{
//         return <p key={item.id}>{item.title}</p>
//     })}
//     </>
//   )
// }

import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    },[url]);

    return [data];
}

// for separate jsx file, export custom hook
// export default useFetch;

// custom conversion of above code

//import useFetch from './useFetch";
export default function ApiData() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
        { data && data.map((item)=>{
            return <h1 key={item.id}>{item.title}</h1>
        })}
    </>
  )
}

import React, { useCallback , useState } from 'react'


// Using useCallback() with React.memo to ensure child component doesn't re-render after first time rendered.

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    // using useCallback for handleClick is a good practice in scenarios where the callback
    // is passed down to deeply nested components or when it depends on other variables
    // to ensure optimal performance.

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[]);

    // not using useCallback as handleClick is not that complex func, so React.memo() alone cannot prevent
    // re-rendering of child component if you see the output
    // const handleClick = () => {
    //     setCount(prevCount => prevCount + 1);
    // };

    console.log('ReactMemo Parent component rendered');


  return (
    <>
      <p>{count}</p>
      <Child increment = { handleClick } />
    </>
  );
}

const Child = React.memo(({ increment }) => {
    console.log('Child component rendered');

    return (
        <button onClick = { increment }>Click</button>
    );
})

export default ReactMemo;


// Here, In this case, React.memo alone wouldn't prevent unnecessary re-renders of the Child component
// when the UseCallBack component re-renders. However, using useCallback for handleClick is a good practice 
// in scenarios where the callback is passed down to deeply nested components or when it depends on 
// other variables to ensure optimal performance. It helps to avoid recreating the callback function
// on every render and, in turn, can reduce the number of re-renders in certain situations.



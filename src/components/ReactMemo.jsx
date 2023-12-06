import React, { useCallback , useState } from 'react'

// My component re-renders when a prop is an object, array, or function 
// React compares old and new props by shallow equality: that is, it considers whether each new prop is reference-equal to the old prop. If you create a new object or array each time the parent is re-rendered, even if the individual elements are each the same, React will still consider it to be changed. Similarly, if you create a new function when rendering the parent component, React will consider it to have changed even if the function has the same definition. To avoid this, simplify props or memoize props in the parent component.

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
    // re-rendering of child component because props are functions here, for that you need to memoize function or values inside it with useCallback or useMemo
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



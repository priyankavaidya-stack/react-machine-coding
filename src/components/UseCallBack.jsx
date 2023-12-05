import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(()=>{
        // really need to use arrow function to change the state value,
        // otherwise it doen't store updated state val
        // Using an arrow function to update the state based on the previous state
        setCount(count => count + 1);
    }, []);

    console.log("Parent usecallBack() called");
  return (
    <div>
      <p>{count}</p>
      {/* Child component with the callback function passed as a prop */}
      <Child increment={ handleClick } />
    </div>
  )
}


const Child = ({ increment }) => {
    console.log("Child callback component called");
    return(
        <button onClick={ increment }>Click</button>
    );
}


export default UseCallBack;

// In your code, the handleClick function is wrapped with useCallback and has an empty dependency array ([]).
// This means that the memoized handleClick function will only be recreated if its dependencies change.
// Since there are no dependencies specified, the function should be memoized and
// remain the same between renders, unless the component's state (count in this case) changes.

// To verify that useCallback is indeed preventing unnecessary re-renders,
// you can make use of the React.memo higher-order component along with the console.log statements.
// React.memo can be applied to the Child component to memoize it and
// prevent re-renders when its props have not changed.


// output
// Parent usecallBack() called
// Child callback component called
// Parent usecallBack() called
//  .
//  .

// In ReactMemo.jsx, you can check example of using useCallback() with React.memo()
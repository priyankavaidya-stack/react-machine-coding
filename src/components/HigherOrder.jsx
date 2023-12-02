import React, { useState } from 'react';

const HigherOrder = (Component) => {
  const NewComp = () => {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return(
        <Component count={count} handleClick={ handleClick} />
    )
  }
  return NewComp;
}

export default HigherOrder

import React from 'react';
import HigherOrder from './HigherOrder';

const StudentHOC = ({ count, handleClick}) => {
  return (
    <div>
      <p style={{  paddingLeft: "10px"}}>{ count }</p>
      <button
        style={{ border: "1px solid grey", padding: "5px 10px"}}
       onClick={ handleClick }>Click Me!</button>
    </div>
  );
}

export default HigherOrder(StudentHOC);

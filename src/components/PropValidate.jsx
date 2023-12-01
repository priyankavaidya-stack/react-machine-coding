import React from 'react'
import PropTypes from 'prop-types';

const PropValidate = ({ name, optionalArray, optionalBool, optionalFunc, optionalNumber, optionalObject, optionalString, optionalSymbol }) => {

  return (
    <>
      <h1>Hello, {name ? name : PropValidate.defaultProps.name}</h1>
      <div>{optionalArray ? JSON.stringify(optionalArray) : [3,4,5]}</div>
       <div>{optionalBool ? JSON.stringify(optionalBool) : 'Value is False'}</div>
      <div>{optionalFunc ?"hii"  : "no"}</div>
      <div>{Number(optionalNumber) ? optionalNumber : PropValidate.defaultProps.optionalNumber}</div>
      <div>{optionalObject.foo}</div>
      <div>{optionalString}</div>
       <div>{optionalSymbol.toString()}</div>
    </>
  )
}

PropValidate.propTypes = {
  name: PropTypes.string,
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
}

PropValidate.defaultProps = {
  name: "John Macbeth",
  optionalArray:[3,4,5],
  optionalBool: !PropValidate.propTypes.optionalBool,
  optionalFunc: "No Function",
  optionalNumber: 123455666,
  optionalObject: "No an Object",
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
}

export default PropValidate;

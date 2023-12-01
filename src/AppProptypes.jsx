import React from 'react';
import PropValidate from './components/PropValidate';

const AppProptypes = () => {
  return (
    <div>
      <PropValidate name="Priyanka"
        optionalArray={[1, 2, 3]}
        optionalBool={true}
        optionalFunc={() => "foo" }
        optionalNumber="username"
        optionalObject={{ foo: "bar" }}
        optionalString="abc"
        optionalSymbol={Symbol("abc")} 
      />
      {/* // Passing invalid value to props, create error in console */}
    </div>
  )
}

export default AppProptypes

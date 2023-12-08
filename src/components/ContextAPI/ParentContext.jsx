import React, { createContext, useContext } from 'react'

const ThemeContext = createContext(null);
function ParentContext() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

export default ParentContext


function Form(){
    return(
        <Panel title="welcome">
            <button>Sign Up</button>
            <button>Log in</button>
        </Panel>
    );
}

function Panel({ title, children }){
    const theme = useContext(ThemeContext);
    const className = theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

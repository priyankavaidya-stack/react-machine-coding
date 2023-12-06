import React, { createContext, memo, useContext, useState } from 'react'

const ThemeContext = createContext(null);

export default function UpdateMemoizedCompUsingContext() {
    const [theme, setTheme] = useState('light');

    function handleClick() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

  return (
    <ThemeContext.Provider value={theme}>
        <button onClick={ handleClick }>Switch theme</button>
        <Parent/>
    </ThemeContext.Provider>
  )
}

const Parent = () => {
    const theme = useContext(ThemeContext);
    return(
        <div className={theme}>
            <Greeting name="Taylor" />
        </div>
    );
}

// if you have used theme here in class, then it would had re-rendered again because change in state
const Greeting = React.memo(({ name }) => {
    console.log("Greeting was rendered at", new Date().toLocaleString());
    return(
        <h3>Hello, {name}!</h3>
    );
});


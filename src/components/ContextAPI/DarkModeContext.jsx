import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);

export default function DarkModeContext() {
    const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme} className="flex-col">
      <Form title="Welcome" />
      <input type="checkbox" checked={ theme === 'dark'} onChange={(e)=> setTheme(e.target.checked ? 'dark' : 'light') } className='mr-1' />
      Dark Mode
    </ThemeContext.Provider>
  )
}


function Form({ title }){
    const theme = useContext(ThemeContext);

    const className = 'px-2 py-3 border border-gray-200 panel-' + theme;
   
    return(
        <div className={className}>
            <h1 className='mb-2 text-lg'>{ title }</h1>
            <button className='rounded border px-2 py-1 mr-1'>SignUp</button>
            <button className='rounded border px-2 py-1'>Log in</button>
        </div>
    );
}


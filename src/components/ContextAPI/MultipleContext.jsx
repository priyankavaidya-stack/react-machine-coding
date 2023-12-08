import { func } from 'prop-types';
import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MultipleContext() {
    const [theme, setTheme] = useState("light");
    const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel />
        <label>
            <input type="checkbox" checked={ theme === "dark" } onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }} />
            Dark Mode
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel(){
    const {currentUser} = useContext(CurrentUserContext);
    return(
        <Panel title="Welcome">
            {currentUser !== null ? <Greeting /> : <LoginForm />}
        </Panel>
    )
}

function Panel({ title, children }){
    const theme = useContext(ThemeContext);
    const className = "panel-"+ theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
 
function Greeting(){
    const {currentUser} = useContext(CurrentUserContext);
    return(
        <p>You logged in as {currentUser.name}.</p>
    )
}

function LoginForm(){
    const {setCurrentUser} = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const canLogin = firstName !== "" && lastName !== "";

    return(
        <>
            <label>
                First Name{': '}
                <input type="text" required value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            </label>
            <label>
                Last Name{': '}
                <input type="text" required value={lastName} onChange={(e)=> setLastName(e.target.value)} />
            </label>
            <button className='bg-slate-400 text-white px-2 py-1 border rounded-md' disabled={!canLogin} onClick={()=> setCurrentUser({ name: firstName+ " " + lastName})}>Log in</button>
            {!canLogin && <i> Fill in both fields.</i>}
        </>
    )
}

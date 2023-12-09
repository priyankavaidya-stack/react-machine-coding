import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MultipleContext2() {
    const [theme, setTheme] = useState('light');
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
        <WelcomePanel />
        <label>
            <input type="checkbox" checked={ theme === 'dark' } onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light') } />
            Use Dark Mode
        </label>
    </MyProviders>
  );
}

function MyProviders({ theme, setTheme, children }){
    const [currentUser, setCurrentUser] = useState(null);
    return(
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
                {children}
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    );
}

function WelcomePanel({ children }){
    const {currentUser} = useContext(CurrentUserContext);
    return(
        <Panel title="Welcome">
            { currentUser !== null ? <Greeting /> : <LoginForm /> }
        </Panel>
    );
}

function Greeting(){
    const {currentUser} = useContext(CurrentUserContext);
    return(
        <p>You logged in as {currentUser.name}</p>
    );
}

function LoginForm(){
    const {setCurrentUser} = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const canLogin = firstName!=="" && lastName!== "";
    return(
        <>
            <label>
                First name{': '}
                <input type="text" required value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            </label>
            <label>
                Last name{': '}
                <input type="text" required value={lastName} onChange={(e)=> setLastName(e.target.value)} />
            </label>
            <button disabled={!canLogin} onClick={()=> setCurrentUser({name: firstName+" "+lastName})}>Log in</button>
        </>
    );
}

 
function Panel({ title, children}){
    const theme = useContext(ThemeContext);
    const className = "panel-"+theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
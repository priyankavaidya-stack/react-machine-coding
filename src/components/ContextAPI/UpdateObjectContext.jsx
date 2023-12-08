import React, { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext(null);

export default function UpdateObjectContext() {
    const [currentUser, setCurrentUser] = useState(null);
    
  return (
    <CurrentUserContext.Provider value = {{ currentUser, setCurrentUser}}>
      <Form />
    </CurrentUserContext.Provider>
  )
}


function Form(){
    return(
        <Panel title="Welcome">
            <LoginButton />
        </Panel>
    );
}

function Panel({ title } ){
    return(
        <section>
            <h1>{title}</h1>
            <LoginButton />
        </section>
    )
}
function LoginButton(){
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    if(currentUser !== null){
        return <p>You logged in as {currentUser.name}.</p>
    }
    return(
        <button className='border border-gray-400 p-1' onClick={()=> setCurrentUser({name: 'Advika'})}>Log in as Advika</button>
    );
}
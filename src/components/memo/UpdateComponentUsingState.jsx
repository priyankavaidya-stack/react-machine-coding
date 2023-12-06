// Even when a component is memoized, it will still re-render when its own state changes.
// Memoization only has to do with props that are passed to the component from its parent.

import React, { useState } from 'react';

export default function UpdateComponentUsingState(){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    return(
        <>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Address:
                <input type="text" value={address} onChange={ (e) => setAddress(e.target.value)} />
            </label>
            <Child name = {name} />
        </>
    );
}

const Child = React.memo(({ name }) => {
    console.log('Greeting was rendered at', new Date().toLocaleString());
    const [greeting, setGreeting] = useState('Hello');
    return(
        <>
            <h1>{name ? `${greeting}, ${name}`: ""}</h1>
            <GrandChild value = { greeting } onChange={ setGreeting } />
        </>
    );
});

const GrandChild = ({ value, onChange }) => {
    return(
        <>
            <label>
                <input type="radio" checked={value === 'Hello'} onChange={ (e)=> onChange('Hello')}/>
                Regular greeting
            </label>
            <label>
                <input type="radio" checked={value === 'Hello and Welcome'} onChange={ (e) => onChange('Hello and Welcome') } />
                Enthusiastic greeting
            </label>
        </>
    );
}



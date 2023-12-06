// Example of usage  React.memo for memoizing the functional components to improve performance
// Skipping re-rendering when props are unchanged
import React, { useState } from 'react';

const Greeting = React.memo(function Greeting({ name }){
    console.log("Greeting was rendered at", new Date().toLocaleString());
    return <h1>{name ? `Hello,  ${name}!` : ""}</h1>
})

// export default Greeting;


export default function Memo(){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    return(
        <>
        <label>
            Name {': '}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
            Address{': '}
            <input type="text" value={address} onChange={(e) => setAddress(e.target.address)} />
        </label>
        {/*  here memoized component returned, will re-render only if name value changes not address */}
        <Greeting name={ name } />
        </>
    );
}
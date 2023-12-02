import React, { useState } from 'react';

function TernaryOperator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLoggedIn(){
        setIsLoggedIn(true);
    }

    function handleLoggedOut(){
        setIsLoggedIn(false);
    }

    return (
        <div>
            { isLoggedIn ? (
                    <>
                        <h4>Logged In Successfully !!</h4>
                        <button style={{border: "1px solid grey", padding:"5px 10px", marginTop:"5px"}} onClick={ handleLoggedOut }>Log Out</button>
                    </>
            ) : (
                <>
                    <h4>Logged Out Successfully !!</h4>
                    <button style={{border: "1px solid grey", padding:"5px 10px", marginTop:"5px"}} onClick={ handleLoggedIn }>Log In</button>
                </>
            )}
        </div>
    )
}

export default TernaryOperator

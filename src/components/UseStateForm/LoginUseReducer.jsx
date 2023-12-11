import React, { useReducer } from 'react';

function loginReducer(state, action) {
    switch(action.type){
        case "input": {
            return {
                ...state,
                [action.inputField]:action.payload
            };
        }
        case 'login': {
            return {
                ...state,
                error: '',
                isLoading: true,
                logMessage: "Logging in...",
            };
        }
        case 'success': {
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
            };
        }
        case 'error' : {
            return {
                ...state,
                error: "Incorrect username or password",
                isLoggedIn: false,
                isLoading: false,
                username: "",
                password: "",
                logMessage: "Log In",
            };
        }
        case 'logOut': {
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                logMessage: "Log In",
                username: "",
                password: "",
            }
        }
        default:
            return state;
    }
}

const initialState = {
    username: "",
    password: "",
    isLoading: false,
    error: "",
    isLoggedIn: false,
    logMessage: 'Log In'
};

function LoginUseReducer() {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, isLoading, error, isLoggedIn, logMessage } = state;

    const onSubmit = async(e) => {
        e.preventDefault();
        dispatch({ type: "login" });
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(username === "Priyanka" && password === "Vaidya")
                    resolve();
                    else
                        reject();
                },1000);
            })
            dispatch({ type: "success"});
        } catch (error) {
            dispatch({ type: "error" });
        }
    };

    return (
    <div>
      <div className='w-screen h-screen'>
        { isLoggedIn ? (
            <>
                <h1>Welcome, {username}!</h1>
                <button className=''
                 onClick={() => {
                    dispatch({ type: "logOut" });
                }}>Log Out</button>
            </>
        ) : (
            <form className='flex flex-col justify-center items-center w-screen h-screen' onSubmit={ onSubmit}>
                {error && <p className='error'>{error}</p>}
                <p className='text-red-500'>Please Login!</p>
                <input className='outline-none w-max p-1 mb-2' type="text" required placeholder='Enter username' value={username} onChange={(e) => dispatch({ type: "input", inputField: "username", payload: e.target.value,})} />
                <input className='outline-none w-max p-1 mb-2' type="text" required placeholder='Enter password' value={password} onChange={(e) => dispatch({ type: "input", inputField: "password", payload: e.target.value,})} />
                <button className={`${ isLoggedIn ? 'px-2 py-1 mt-1 text-white bg-green-200' : 'bg-green-600 px-2 py-1 mt-1 text-white rounded-md w-max'}`}
                 type="submit" disabled={isLoading}>{logMessage}</button>
            </form>
        )}
      </div>
    </div>
  )
}

export default LoginUseReducer;

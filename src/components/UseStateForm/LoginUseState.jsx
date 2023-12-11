import React, { useState } from 'react';

function LoginUseState() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, showLoader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logMsg, setLogMsg] = useState('Log In');

  const onSubmit = async(e) => {
    e.preventDefault();
    setError('');
    showLoader(true);
    setLogMsg('Logging in...')
    try {
      await new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(username === 'Priyanka' && password === 'Vaidya')
            resolve();
          else
            reject();
        },1000);
      });
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid username or password');
      showLoader(false);
      setLogMsg("Log In")
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className='relative w-full h-full'>
      { isLoggedIn ? (
        <>
          <h1>Welcome, {username}!</h1>
          <button onClick={ () => {
            setIsLoggedIn(false);
            showLoader(false);
            setLogMsg('Log In');
            setUsername('');
            setPassword('');
          }
          }>Log out</button>
        </>
      ) : (
        <form onSubmit={ onSubmit } className='flex flex-col justify-center items-center w-full h-screen'>
          {error && <p className='error'>{error}</p>}
          <p className='text- text-red-500'>Please Login!</p>
          <input className='w-max my-3 p-1 outline-none' type="text" placeholder="Enter username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className='w-max my-2 p-1 outline-none' type="password" placeholder="Enter password" autoComplete='new-password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className=
          {`${isLoggedIn ? 'px-2 py-1 mt-1 text-white bg-green-200' : 'bg-green-600 px-2 py-1 mt-1 text-white rounded-md w-max'}`}
           type="submit" 
           disabled={isLoading}>
           { logMsg }
           </button>
      </form>
      )}
    </div>
  )
}

export default LoginUseState;

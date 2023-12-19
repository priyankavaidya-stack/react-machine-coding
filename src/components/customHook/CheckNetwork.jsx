// import { useState, useEffect} from 'react';

// const Network = () => {
//     const [isOnline, setIsOnline] = useState(true);
    
//     useEffect(()=>{

//         function handleOnline(){
//             setIsOnline(true);
//         }

//         function handleOffline(){
//             setIsOnline(false);
//         }

//         window.addEventListener("online", handleOnline);
//         window.addEventListener("offline", handleOffline);
//         return () => {
//             window.removeEventListener("online", handleOnline);
//             window.removeEventListener("online", handleOnline);
//         };
//     },[isOnline]);

//     return(
//         <>
//         {isOnline ? "✅ Online" : "❌ Disconnected"}
//         </>
//     );
// }

// export default Network;




// custom hook conversion 
import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=> {

        function handleOnline(){
            setIsOnline(true);
        }

        function handleOffline(){
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline);
        }
    },[]);

    return isOnline;
 }



// import useOnlineStatus from './useOnlineStatus';

const Network = () => {
    const isOnline = useOnlineStatus();
    return(
        <>
            {isOnline ? "Online" : "Disconnected"}
        </>
    );
}

export default Network;
import React, { useState, useEffect } from 'react';

function ChatRoom({ roomId }){
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(()=> {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();

        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return(
        <div className='pt-2'>
            <label>
                Server URL{' '}
                <input 
                    value={serverUrl}
                    onChange={ e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Welcome to the { roomId } room!</h1>
        </div>
    );
}

export default function Chat(){
    const [roomId, setRoomId] = useState('general')
    const [show, setShow] = useState(false);
    return(
        <div className='mb-2'>
            <label> 
                Choose the chat room:{" "}
                <select className='border border-gray-400' value={roomId}
                       onChange={ (e) => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button className='border border-gray-400 px-1 rounded-md ml-1 bg-gray-200' onClick={() => setShow(!show)}>{ show ? 'Close chat' : 'Open chat'}</button>
            {show && <hr />}
            {show && <ChatRoom roomId={ roomId } />}
        </div>
    );
}

function createConnection(serverUrl, roomId){
    return{
        connect(){
            console.log('Connecting to "' + roomId + '" room at '+serverUrl + '...');
        },
        disconnect(){
            console.log('Disconnecting from "' + roomId + '" room at ' + serverUrl);
        }
    };
}
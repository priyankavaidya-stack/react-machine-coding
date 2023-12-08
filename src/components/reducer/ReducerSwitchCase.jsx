import React, { useReducer } from 'react';


function reducer(state, action){
    switch(action.type){
        case 'incrementAge': {
            return{
                // 🚩 Don't mutate an object in state like this:
    //          state.age = state.age + 1;
                // ✅ Instead, return a new object
                ...state,
                age: state.age + 1
            }
        }
        case 'changeName': {
            return{
                name: action.newName,
                age: state.age
            }
        }
    }
    throw Error('Unknown action:', + action.type);
}

const initialState = { name: "Priyanka", age: 24 };

export default function ReducerSwitchCase(){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleName(e){
        dispatch({ type: "changeName", newName: e.target.value})
    }

    function handleAge(){
        dispatch({
            type: "incrementAge"
        });
    }

    return(
        <>
            <input type="text" value = {state.name} onChange={ handleName } />
            <button onClick={ handleAge }>Change Age</button>
            <p>Hello, {state.name}. You are now {state.age}. </p>
        </>
    );
}

import React, { useReducer } from 'react';


function reducer(state, action){
    switch(action.type){
        case 'incrementAge': {
            return{
                name: state.name,
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

export default function ReducerSwitchCase(){
    const [state, dispatch] = useReducer(reducer, { name: "Priyanka", age: 24 });
    

    return(
        <>
            <button>Change Age</button>
            <button>Change Name</button>
        </>
    );
}

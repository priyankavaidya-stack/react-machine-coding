import { useReducer } from "react";

//The reducer function that specifies how the state gets updated.
// It must be pure, should take the state and action as arguments, 
// and should return the next state. State and action can be of any types.
function reducer (state,action){
    if(action.type === 'INCREMENT'){
        return{
            age: state.age + 1
        };
    }
    throw Error("Unknown action.");
}

function MyComponent(){
    // useReducer returns an array with exactly two items:
    // The current state of this state variable, initially set to the initial state you provided.
    // The dispatch function that lets you change it in response to interaction.
    
    // syntax for useReducer
    //const [state, dispatch] = useReducer(reducer, initialArg, init?)
    
    const [state, dispatch] = useReducer(reducer, { age: 42});
    
    function handleClick(){
        // The dispatch function returned by useReducer lets you update the state to a different
        // value and trigger a re-render. You need to pass the action as the only argument to the dispatch function:
        dispatch({ type: 'INCREMENT'});
    }
    return(
        <>
            <button type="text" onClick={ handleClick }>Increment</button>
            <p>Hello! You became {state.age}.</p>
        </>
    );
}

export default MyComponent;
import React, { useState } from 'react'

// Props Proxy HOC Example
function WithHandlers(Component){
    function NewComp(props){
        const [name, setName] = useState("");

        const handleChange = (e) => {
            setName(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form Submitted with name: ", name);
        }

        const enhancedProps = {
            name, handleChange, handleSubmit
        }

        return(
            <Component {...props} {...enhancedProps} />
        )
    }
    return NewComp;
}



function Form({ handleChange, handleSubmit, name}){
    return (
        <form onSubmit={ handleSubmit}>
            <label>
                Name:
                <input ype="text" value={ name } onChange={ handleChange } />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

const App = WithHandlers(Form);

function AppHOC() {
  return (
    <div>
      <App />
    </div>
  )
}

export default AppHOC;

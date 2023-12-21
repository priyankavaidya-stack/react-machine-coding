// import { useState } from 'react';

// export default function Form(){
//     const [firstname, setFirstName] = useState("Mary");
//     const [lastname, setLastName] = useState("Poppins");

//     function handleFirstName(e){
//         setFirstName(e.target.value);
//     }

//     function handleLastName(e){
//         setLastName(e.target.value);
//     }
    
//     return(
//         <div className='flex flex-col'>
//             <label>
//                 First name:
//                 <input value={firstname} onChange={ handleFirstName } />
//             </label>
//             <label>
//                 Last name:
//                 <input value={lastname} onChange={ handleLastName} />
//             </label>
//             <p><b>Good morning, {firstname} {lastname}.</b></p>
//         </div>
//     )
// }


// here value and function for firstname and lastname is getting repeated. 
// We will convert repetative code into custom hook;


import { useState } from 'react';

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };
    return inputProps;
}

export default function Form(){
    const firstNameProps = useFormInput("Mary");
    const lastNameProps = useFormInput("Poppins");

    return(
        <div className='flex flex-col'>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
        </div>
    );
}
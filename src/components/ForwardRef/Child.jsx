import React, { forwardRef, useState } from 'react'

const  Child = forwardRef(function Child(props, ref){
    const { label, input, ...otherprops } = props;
    const [text, setText] = useState(input);
    return(
        <label>
            {label}
            <input type="text"
                {...otherprops}
                ref={ref}
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
        </label>
    );
})

export default Child;
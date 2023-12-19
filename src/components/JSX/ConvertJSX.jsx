import React from 'react';

function ConvertJSX(){
    return React.createElement("div", null, React.createElement("p", null, "This is a list"),
                                            React.createElement("ul", null, React.createElement("li", {className: 'text-white bg-black', style:{ padding: '5px'}}, "List item 1"),
                                                                            React.createElement("li", { className: 'text-white bg-purple-700'}, "List item 2"),));
}

export default ConvertJSX;
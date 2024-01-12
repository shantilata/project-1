import React from 'react'

const Newfile = () => {
    return React.createElement('div',{classname:"div1"}, 
    React.createElement('h3',{id:"greet"},"Hello everyone"),
    React.createElement('h1',null,"Have a nice day"))
//   return (
//     <div classname="div1">
//         <h3 id="greet">Hello everyone</h3>
//         <h1>Have a nice day</h1>

//     </div>
//   )
}

export default Newfile
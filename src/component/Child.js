import React from 'react'

const Child = (props) => {
    console.log("Received data:", props)
    //let{arr}=props
    let {fname,mname,address,contactNo}=props.info
  return (
    <div>
        <p>Child works:{props.recv}
            </p>
            <hr/>
             <h1>
                {fname} {mname} {address} {contactNo}
            </h1>
            {
              props.Arr.map((index)=>(
                <p> Print the text:{index} </p>
              )
              )
            }
            
            <hr/>
            {
              props.arr.map((x,index)=>(
              <div key={index}>
              <p> {x.name} </p>
              <p> {x.roll} </p>
             </div> ))
            }  
            <hr/>
        </div>
  )
}

export default Child
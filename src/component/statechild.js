import React from 'react'

const Statechild = (props) => {
    console.log("props:",props);
    let {data,func}=props
  return (
    <>
    <h1>{data}</h1>
    <hr/>
    <button onClick={func}>Change</button>
    </>
  )
}

export default Statechild
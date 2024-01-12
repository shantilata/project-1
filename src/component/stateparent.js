import React,{useState} from 'react'
import Statechild from './statechild'

const Stateparent = () => {
    let [greet,setGreet]=useState("Good morning")
    let click=()=>(
        setGreet("Good night")
    )
  return (
    <React.Fragment>
        <Statechild data={greet} func={click}/>
    </React.Fragment>
  )
}

export default Stateparent
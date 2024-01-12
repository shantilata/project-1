import React, { useState } from 'react'

const State2 = () => {

    let [data, setData] = useState("I love React!!!")
    let [num, setNum] = useState({ positive: 0, negetive: 0 })
    let [Employee, setEmployee] = useState({ empname: "Ram", empid: 1, empaddress: "Kolkata" },
        { empname: "Ram", empid: 1, empaddress: "Kolkata" },
        { empname: "Ram", empid: 1, empaddress: "Kolkata" })
    let [arr, setarr] = useState([{ empname: "Ram", empid: 1, empaddress: "Kolkata" },
    { empname: "Ram", empid: 1, empaddress: "Kolkata" },
    { empname: "Ram", empid: 1, empaddress: "Kolkata" }])


    let clickHandler1 = () => {
        setData("I love React more!!!")
    }
    let tap1 = () => {
        setNum({ positive: num.positive + 1, negetive: num.negetive - 1 })
    }
    let click = () => {
        setEmployee({ empname: "Ram", empid: 10, empaddress: "Kolkata" }, { empname: "Ram", empid: 1, empaddress: "Kolkata" },
            { empname: "Ram", empid: 1, empaddress: "Kolkata" })
    }
    let click2 = () => {
        setarr([{ empname: "Ram", empid: 10, empaddress: "Kolkata" },
        { empname: "Ram", empid: 11, empaddress: "Kolkata" },
        { empname: "Ram", empid: 12, empaddress: "Kolkata" }])
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={clickHandler1}>Click me</button>
            <hr />
            <h2>{Employee.empid}</h2>
            <button onClick={click}>change the id</button>
            <h3>positive number:{num.positive} negetive number:{num.negetive}  </h3>
            <button onClick={tap1}>change</button>
            {
                arr.map((x, empid) => (
                    <div key={empid}>
                        <p>id:{x.empid}</p>
                        <p>name:{x.empname}</p>
                    </div>
                ))
            }
            <button onClick={click2}>click here</button>
        </div>

    )

}

export default State2
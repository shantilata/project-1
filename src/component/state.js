import React, { useState } from 'react'

const StateComp = () => {
    let [data, setData] = useState("Hello")
    let [emp, setEmp] = useState({ name: "pakhi", id: 2, address: "akpura" })
    let [color, setColor] = useState(["black", "blue", "brown"])
    let [student, setStudent] = useState([{ sName: "ram", roll: 5, class: 10 },{ sName: "ram", roll: 5, class: 10 },{ sName: "ram", roll: 5, class: 10 }])
    return (
        <div>
            <h1>{data}</h1>
            <hr/>
            {
                color.map((c, index) => (
                    <p key={index}> My fav color is:{c}</p>
                ))
            }
            <hr/>
            {
                student.map((x)=>(
                    <div>
                    <p>my name is:{x.sName}</p>
                    <p> my roll no is:{x.roll}</p>
                    </div>
                ))
            }
            <hr/>
            {
                <h2>Employee details:
                    <p>name:{emp.name},id: {emp.id},address: {emp.address}</p>
                </h2>
            }
        </div>
    )
}

export default StateComp
import React from 'react'
import Child from './Child'

export const Parent = () => {
  let send = "Good morning"
  let info = { fname: "Satyabrata", mname: "Gita", address: "Akpura", contactNo: 9635388970 }
  let Array = ["i", "love", "React"]
  let arr = [
    { name: "pakhi", roll: 1, },
    { name: "shanti", roll: 2 },
    { name: "pakhi", roll: 1, },
    { name: "shanti", roll: 2 },
    { name: "pakhi", roll: 1 },
    { name: "shanti", roll: 2 }
  ]
  return (
    <div>
      <p>Parent works:{send}
      </p>
      <Child recv={send} info={info} Arr={Array} arr={arr} />
    </div>
  )
}
export default Parent

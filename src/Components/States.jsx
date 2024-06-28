import { useState } from "react"

const States = ()=>{
    
    let [data,setData] = useState("Hi")

    let x = () =>{ setData("Hello") } //here we are creating normal function 

    return(
        <div>
            <h1>{data}</h1>
            <button onClick={x}> GREET </button>
        </div>
    )
}

export default States

// try to take one data

// let data = "HI"
// console.log(data);

// let x = () =>{
//     log(data)
//     data = "Hello"
// }
// x()
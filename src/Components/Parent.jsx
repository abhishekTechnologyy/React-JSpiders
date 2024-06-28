import Child from "./Child"
const Parent = (x)=>
{
    console.log(x);
    return(
        <div>
        <h1> <Child data1 = {x.data}/> </h1>
        </div>
    )
}

export default Parent

//parent-child relation we cover in folder Parent.jsx then child.jsx then App.jsx
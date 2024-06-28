const Child = (props)=>{
    console.log(props); //{data1 : "Hi"}
    return(
        <div>
            <h1>{props.data1} Good Morning</h1>
        </div>
    )
}
export default Child

//parent-child relation we cover in folder Parent.jsx then child.jsx then App.jsx
const PropsObj = (props)=>{

    console.log(props); //{data:[{},{},{}]}
    console.log(props.data);
    console.log(props.data[0].address.city); //do inspect and see console.. u get the o/p of console.log

    return(

        <div>
            <h1>Props Object</h1>
            <h1>{props.data[0].address.city}</h1>
        </div>
    )
}
export default PropsObj

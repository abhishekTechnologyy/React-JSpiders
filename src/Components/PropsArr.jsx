const PropsArr = (data) =>{

    console.log(data); //{arr:["hi","hello"]}

    return(
    <div>

        <h1>Props Array</h1>
        <h1>{data.arr[0]}</h1>
        <h1>{data.arr[1]}</h1>

    </div>

    )
}
export default PropsArr
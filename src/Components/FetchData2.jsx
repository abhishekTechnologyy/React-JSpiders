import { Fragment } from "react";
import posts from "./userPost.json"

const FetchData2 =()=>{
    // console.log(posts);
    return(
        <div>
        {posts.map((element,index)=>{
            console.log(index);
            return(
                <Fragment key={index} >
                <h2>TITLE {element.id}: {element.title}</h2>
                </Fragment>
            )
            })}
        </div>
    )
}
export default FetchData2
import userContent from "./userPost2.json"
import style from "./fetchdata.module.css"
const FetchData=()=>{
return(
    <div id={style.profilePage}>
        {userContent.map((element)=>{
            let sendRequest = ()=>{
                alert(`friend request sent to ${element.login}`)

            }
            return(
                <div>
                    <img src={element.avatar_url} alt="userProfilePicture" />
                    <h1>{element.login}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <button onClick={sendRequest}>ADD</button>
                    <button>MESSAGE</button>
                </div>
            )
        })}

    </div>
)
}

export default FetchData
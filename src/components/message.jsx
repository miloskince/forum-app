import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsername } from "../utilities/services";



const Message = ({ topic,user_id }) => {

    const [userID] = useState(user_id)
    const [User, setUser] = useState({})

    useEffect(() => {
        console.log(userID);
        getUsername(userID)
        .then(data => {
            console.log(data)
            setUser(data.user)
        })
    },[userID])



    let x = new Date(topic.timestamp)
    let b = x.toLocaleTimeString(topic.timestamp)
    let a = x.toLocaleDateString(topic.timestamp)

    return(
        <div>
            <p>{b}{a} {topic.message} {topic.username}<Link to ={`/profile/${User.user_id}`} key={User.user_id} >{User.username}</Link></p>
        </div>
    )
}

export default Message
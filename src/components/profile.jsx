import React, { useState, useEffect } from 'react';
import { getUsername } from '../utilities/services';


const Profile = ({ match }) => {

    const [userID] = useState(match.params.user_id)
    const [user,setUser]=useState({});
    
    useEffect(() => {
        console.log(userID);
        getUsername(userID)
        .then(data => {
            console.log(data)
            setUser(data.user)
        })
    },[userID])
    

    return(
        <>
            <p><strong>Name</strong>:   {user.name}</p>
            <p><strong>Surname</strong>:   {user.surname}</p>
            <p><strong>UserName</strong>:   {user.username}</p>
            <p><strong>Email</strong>:   {user.email}</p>
        </>
    )
}

export default Profile
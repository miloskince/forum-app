import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import { login } from "../utilities/services";

const Login = ({setUser,history}) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(){
        login({username,password})
        .then(data =>  {
            if(data.success) {
                console.log(data)
                setUser(data.user)
                history.push('/Topics')
            }
            else console.log('Login Failed')
        })


    }

    return(
        <form>
        <input type="text" placeholder="UserName" required onInput={e => {
            setUserName(e.target.value)
        }}/>
        <input type="password" placeholder="Password" required onInput={e => {
            setPassword(e.target.value)
        } }/>
        <input type="submit" value="Login" onClick={(e) => {
            e.preventDefault()
            handleSubmit()
        }} />
    </form>
    )
}

export default withRouter(Login)
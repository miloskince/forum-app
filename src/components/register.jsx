import React, { useState } from "react";
import { register } from "../utilities/services";

const Register = ({setUser, history}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm,setPwConfirm] = useState('')
    

    

    function handleSubmit(){
        if(pwConfirm !== password)
            {return console.log("pass and confirm pass not same")}
        register({name,surname,username,email,password})
        .then(data =>  {
            if(data.success) {
                console.log(data)
                setUser(data.user)
                history.push('/Topics')
            }
            else console.log("Registration failed")
            
        })


    }

    return(
            <form>
                <input type="text" placeholder="Name" required onInput={e => {
                    setName(e.target.value)
                }}/>
                <input type="text" placeholder="Surname" required onInput={e => {
                    setSurname(e.target.value)
                }}/>
    
                <input type="text" placeholder="UserName" required onInput={e => {
                    setUsername(e.target.value)
                }}/>  
                <input type="email" placeholder="Email" required onInput={e => {
                    setEmail(e.target.value)
                }}/>
                <input type="password" placeholder="Password" required onInput={e => {
                    setPassword(e.target.value)
                } }/>
                <input type="password" placeholder="Confirm Password" required onInput={e => {
                    setPwConfirm(e.target.value)
                }} />
                    
    
                <input type="submit" value="Register" onClick={e => {e.preventDefault();handleSubmit()}} />
            </form>
    )
}

export default Register
import React from "react";
import { Switch, Route } from "react-router-dom"
import StartPage from "../components/startPage";
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";
import Topics from "../components/topics";
import MessageList from "../components/messageList";


const Main = ({ setUser, user }) => {
    return(
        <main>
            <Switch>
                <Route exact path = "/" component = {StartPage} />
                <Route path = "/Login" component = {(props) => <Login setUser={setUser} {...props} />}/>
                <Route path = "/Register" component = {(props) => <Register setUser={setUser} {...props} />} />
                <Route path = "/Topics" component = {(props) => <Topics user={user} {...props} />} />
                <Route path = "/profile/:user_id" component = {Profile} />
                <Route path = "/message/:topic_id" component = {MessageList} />
            </Switch>
        </main>
    )
}

export default Main
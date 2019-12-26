import React, { useState, useEffect } from "react";
import { addTopic, getAllTopics, addTopicMessage, } from "../utilities/services";
import Themes from "./themes";
import { Link } from "react-router-dom";

const Topics = ({ user }) => {

    const [title, setTopicHL] = useState('')
    const [message, setTopicC] = useState('')
    const [topics, setTopics] = useState([])
    

    let user_id = user.user_id
    let username = user.username

    useEffect(() => {
        getAllTopics()
        .then(data => {
            setTopics(data.topics)
        })
      },[])

    function handleSubmit(){
        addTopic({user_id,title})
        .then(data => {addTopicMessage(username, data.topic.topic_id , message).then(
            data => console.log(data));getAllTopics()
            .then(data => {
                setTopics(data.topics)
            })})
        setTopicC('')
        setTopicHL('')
    }
    

    return(
        <>
        <form>
        <input type="text" placeholder="Topic Headline" value = {title} onChange={e => {
                    setTopicHL(e.target.value)
                }}/>
                <input type="text" placeholder="Topic Content" value ={message} onChange={e => {
                    setTopicC(e.target.value)
                }}/>
                <input type="submit" value="New Topic" onClick={e => {e.preventDefault();handleSubmit()}} />
        </form>
        
            <ul> {topics.map((topic) => 
                <Link to ={`/message/${topic.topic_id}`} key={topic.topic_id}><Themes key={topic.topic_id} topic={topic}/></Link>)}</ul>
        </>

    )
}

export default Topics
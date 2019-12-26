import React, { useState, useEffect } from "react";
import { getTopicMessage, getAllTopics, addTopicMessage } from "../utilities/services";
import Message from "./message";
import { Link } from "react-router-dom";

const MessageList = ({ match , user, history }) => {
    const [topics, setTopics] = useState([])
    const [message,setReply] = useState([])
    const [topic_id] = useState(match.params.topic_id)
    const [topic, setTopic] = useState([])
    let username = user.username

    useEffect(() => {
        getAllTopics()
        .then(data => {
            console.log(data.topics)
            setTopics(data.topics)
        })
      },[])

    

    useEffect(() => {
        getTopicMessage(topic_id)
        .then(data => {
            console.log(data);
            setTopic(data.messages)
        })
    },[topic_id])
    

    function handleSubmit(){
        addTopicMessage(username, topic_id, message).then(data => {
            console.log(data);
            getTopicMessage(topic_id)
            .then(data => {
            console.log(data);
            setTopic(data.messages)
        })
        setReply('')
    })}
    

    return(
        <>
        {topics.filter(x=> x.topic_id === topic_id).map(x=><Link to={'/Topics'} key={x.topic_id}><h1 key={x.topic_id}>{x.title}</h1></Link>)}
        {topic.map((top) => <Message key={top.message_id} topicID={top.topic_id} topic={top} user_id={top.user_id} />)}
        <form>
        <input type="text" placeholder="Enter Reply On Topic" value={message} onChange={e => {
                    setReply(e.target.value)
                }}/>
               <input type="submit" value="Reply" onClick={e => {e.preventDefault();handleSubmit()}} />
        </form>
        </>
    )
}

export default MessageList
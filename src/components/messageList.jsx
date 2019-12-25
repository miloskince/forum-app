import React, { useState, useEffect } from "react";
import { getTopicMessage, getAllTopics } from "../utilities/services";
import Message from "./message";

const MessageList = ({ match }) => {
    const [topics, setTopics] = useState([])
    const [reply,setReply] = useState([])
    const [topicID] = useState(match.params.topic_id)
    const [topic, setTopic] = useState([])

    useEffect(() => {
        getAllTopics()
        .then(data => {
            console.log(data.topics)
            setTopics(data.topics)
        })
      },[])

    

    useEffect(() => {
        getTopicMessage(topicID)
        .then(data => {
            console.log(data);
            setTopic(data.messages)
        })
    },[topicID])
    

    function handleSubmit(){
       console.log("hello",reply)
    }
    

    return(
        <>
        {topics.filter(x=> x.topic_id === topicID).map(x=><h1 key={x.topic_id}>{x.title}</h1>)}
        {topic.map((top) => <Message key={top.message_id} topicID={top.topic_id} topic={top} user_id={top.user_id} />)}
        <form>
        <input type="text" placeholder="Enter Reply On Topic" required onInput={e => {
                    setReply(e.target.value)
                }}/>
               <input type="submit" value="Reply" onClick={e => {e.preventDefault();handleSubmit()}} />
        </form>
        </>
    )
}

export default MessageList
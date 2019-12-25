import React, { useState, useEffect } from "react";
import { addTopic, getAllTopics, } from "../utilities/services";
import Themes from "./themes";
import { Link } from "react-router-dom";

const Topics = ({ user , history, }) => {

    const [title, setTopicHL] = useState('')
    const [topicC, setTopicC] = useState('')
    const [topics, setTopics] = useState([])

    let user_id = user.user_id
    
    

    useEffect(() => {
        getAllTopics()
        .then(data => {
            console.log(data.topics)
            setTopics(data.topics)
        })
      },[])

    function handleSubmit(){
        addTopic({user_id,title})
        .then(data =>  {
            console.log(data)
            if(data.success) {
                console.log(data)
                history.push('/Topics')
            }
            else console.log("Topic not added")
            console.log(data)
            console.log(topicC)
        })}

    return(
        <>
        <form>
        <input type="text" placeholder="Topic Headline"  onInput={e => {
                    setTopicHL(e.target.value)
                }}/>
                <input type="text" placeholder="Topic Content" onInput={e => {
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
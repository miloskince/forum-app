import React, { useState, useEffect } from "react";
import { getAllTopics } from "../utilities/services";
import Themes from "./themes";

const StartPage = () => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics()
        .then(data => {
            console.log(data.topics)
            setTopics(data.topics)
        })
      },[])

    return(
        <>
            <div>
                <h2>All Topics</h2>
            <ul>{topics.map((topic,timestamp) => <Themes key={topic.topic_id} topic={topic} timestamp={topic.timestamp} />)}</ul>
            </div>
        </>
    )
}

export default StartPage
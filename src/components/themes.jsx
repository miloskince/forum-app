import React from "react";


const Themes = ({ topic }) => {
    let x = new Date(topic.timestamp)
    let b = x.toLocaleTimeString(topic.timestamp)
    let a = x.toLocaleDateString(topic.timestamp)
    return(
        <li>
            <h2>{topic.title.toString()} {b}-{a} </h2>
        </li>
    )
}

export default Themes
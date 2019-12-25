import React from "react";


const Themes = ({ topic }) => {
    let x = new Date(topic.timestamp)
    let b = x.toLocaleTimeString(topic.timestamp)
    let a = x.toLocaleDateString(topic.timestamp)
    return(
        <li>
            {a}{b}-{topic.title}
        </li>
    )
}

export default Themes
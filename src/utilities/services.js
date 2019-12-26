const BASEURL = 'https://coetus.herokuapp.com'
const API = '/api/forum'
const USERS = '/users'
const MESSAGE = '/message'
const TOPICS = '/topics'


function login(user){
    let res = fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function register(user){
    return fetch(`${BASEURL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
}

function getAllUsers(){
    return fetch(`${BASEURL}${API}${USERS}`)
        .then(res => res.json())
}

function getAllTopics(){
    return fetch(`${BASEURL}${API}${TOPICS}`)
        .then(res => res.json())
}

function addTopic(user_id,title){
    return fetch(`${BASEURL}${API}${TOPICS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user_id,title)
    }).then(res => res.json())
}

function addTopicMessage(username, topic_id, message){
    return fetch(`${BASEURL}${API}${MESSAGE}/`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify({
            username : username,
            topic_id : topic_id, 
            message : message})
    }).then(res => res.json())
}

function getAllMessages(){
    return fetch(`${BASEURL}${API}${MESSAGE}`)
        .then(res => res.json())
}

function getUsername(id){
    return fetch(`${BASEURL}${API}${USERS}/${id}`)
            .then(res => res.json())
}

function getTopicMessage(topicID){
    return fetch(`${BASEURL}${API}${MESSAGE}/${topicID}`)
            .then(res => res.json())
}

export {
    login,register,
    getAllUsers,
    getUsername,
    getAllMessages,
    getAllTopics,
    addTopic,getTopicMessage,
    addTopicMessage
}
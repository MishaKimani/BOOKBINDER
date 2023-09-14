import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import Message from "./Message";

const Messages = ()=>{
    const { username, loadingInitial, error, getMessagesAndSubscribe, messages } = useContext(AuthContext)
    const reversed = [...messages].reverse()
    if (loadingInitial) 
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    
    if (error) {
        return (
            <div>
                <h1>Error: {error}</h1>
                <button onClick={getMessagesAndSubscribe}>Reconnect</button>
            </div>
        )
    }
    if (!messages.length) {
        return (
            <div>
                No messages
            </div>
        )
    }
    return reversed.map((message)=>{
        const isYou = message.username === username
        return <Message key={message.id} message={message} isYou={isYou}/>
    })
}

export default Messages;
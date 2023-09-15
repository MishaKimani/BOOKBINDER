import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../../context/authContext"
import Messages from "./Messages"
import MessageForm from "./MessageForm"

const Chat = ()=>{
    const [ height, setHeight ] = useState(window.innerHeight - 205)
    const { scrollRef, onScroll, scrollBottom, isOnBottom, unviewedMessageCount  } = useContext(AuthContext)

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setHeight(window.innerHeight - 205)
        })
    }, [])
    return (
        <div ref={scrollRef}>
            <Messages/>
            <MessageForm/>
        </div>
    )
}

export default Chat
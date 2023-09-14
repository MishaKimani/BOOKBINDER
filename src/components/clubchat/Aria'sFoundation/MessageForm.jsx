import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../../context/authContext"
import { supabase } from "../../../utils/SupaBaseConfig"
const MessageForm = ()=>{
    const { username, auth } = useContext(AuthContext)
    const [message, setMessage] = useState("")
    const [ isSending, setIsSending] = useState(false)
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsSending(true)
        if (!message) return;
        setMessage("")
        try {
            const{ error } = await supabase.from("messages").insert([
                {
                    username,
                    content: message,
                    created_at: new Date()
                }
            ])
            if (error) {
                console.log(error.message)
            }
            console.log("Successfully sent!")
        } catch(error) {
            console.log(error.message)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}/>
                    <button type="submit">{isSending ? "Sending" : "Send"}</button>
                </div>
            </form>

        </div>
    )
}

export default MessageForm
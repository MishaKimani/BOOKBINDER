import { truncateText } from "../../../utils"

const Message = ({message, isYou})=>{
    return (
        <div>
            <span>{message.username}</span>
            <span>{message.content}</span>
        </div>
    )
}

export default Message
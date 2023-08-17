import styles from "./chat.module.css"

const ChatPage=()=>{

    return(

        <main className={styles.chatpage}>
            <div>
            <input type='search' placeholder='Search for buddies'>

            </input>
            </div>
        </main>
    )
}

export default ChatPage
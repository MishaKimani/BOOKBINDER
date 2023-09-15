import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../clubchat.module.css'
import Chat from './Chat';
import { supabase } from "../../../utils/SupaBaseConfig"

// import "bootswatch/dist/morph/bootstrap.min.css"



const Aria=()=>{

const Aria=(()=>{

    async function init() {

        const { data: messages, error } = await supabase
        .from('messages')
        .select('*');

        console.log(messages);
    }
    

    init()

        


    return(

        <main>

            <div className={styles.title}>

                Aria's Foundation
            </div>
            <Chat/>
            {/* <Card style={{ width: '40rem' }}>

                <Card.Body className={styles.cardbody}>

                    <div>

                        <Card.Img className={styles.img} variant="top" src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                        <div>MISHA</div>

                    </div>
                    
                    <Card.Text className={styles.text}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>


                </Card.Body>

                
                <div className={styles.time}>
                    4.20pm
                </div>

            </Card> */}
        </main>
    )
}

export default Aria
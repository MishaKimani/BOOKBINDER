import { useState } from "react"
import { supabase } from "../utils/SupaBaseConfig"


import styles from "../components/Login/login.module.css"

import Spinner from 'react-bootstrap/Spinner';

        function BasicExample() {
        return (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
        }

        

const Auth=()=>{

    const [email, setEmail]=useState('')
    const [loading, setLoading]=useState(false)

    const handleChange=(e)=>{
        setEmail(e.target.value)
    }

    const handleLogin=async (e)=>{

        e.preventDefault();

        setLoading(true)

        const {error}= await supabase.auth.signInWithOtp({email})

        if (error) {
            alert(error.error_description || error.message)
        } else {
            alert('Check your email for the login link')
        }

        setLoading(false)

    }

    return(

        <form onSubmit={handleLogin}>
            <input 
                value={email}
                onChange={handleChange}
                type="email" 
                placeholder="Enter Email"
                className={styles.emails}
            />
            
            {
                loading ? 

                // <span className={styles.loader}>Loading</span>
                
                    BasicExample()
                 :

                  <button className={styles.sign}>Sign In</button>
            }
        </form>
    )
}

export default Auth
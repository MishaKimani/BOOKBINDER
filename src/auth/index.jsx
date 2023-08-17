import { useState } from "react"
import { supabase } from "../utils/SupaBaseConfig"

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
            />
            
            {
                loading ? <span>Loading</span> : <button>Sign In</button>
            }
        </form>
    )
}
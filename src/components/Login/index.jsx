import styles from "./login.module.css"

import Auth from "../../auth"

const Login=(()=>{

    return(

        <main className={styles.main}>

            <div className={styles.login}>

            <div className={styles.loginchild}>

                <div className={styles.login1}>
                    
                    <img

                    className={styles.bk}
                    src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/pexels-george-milton-7034502.jpg"
                    alt="img">
                    </img>

                </div>

                <div className={styles.login2}>

                    <div>

                        <img 
                        className={styles.logo}
                        src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/BOOKBINd.png" 
                        alt="img"
                        />

                    </div>

                    <div className={styles.slog}>
                        Welcome to BookBinder
                    </div>

                    <div>
                        <Auth/>
                    </div>

                    <div className={styles.txt}>
                        
                        After entering your email,
                         you will receive an alert to check your email for your login link.
                        
                    </div>

                </div>

            </div>

            </div>

            
        </main>
    )
})

export default Login
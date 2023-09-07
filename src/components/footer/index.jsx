import styles from "./footer.module.css"

import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer=(()=>{

    return(

        <main className={styles.footer}>

            <div>
                <div>

                    <div>
                        <b>
                        COMPANY
                        </b>
                    </div>

                    <div>About Us</div>

                    <div>Terms</div>

                    <div>Contact Us</div>

                </div>

                <div>
                    
                    <div>
                        <b>
                        WORK WITH US
                        </b>
                    </div>

                    <div>Advertise</div>

                    <div>API</div>

                    <div>Blog</div>

                </div>

                <div>
                    
                    <div>
                        <b>
                        PRICING
                        </b>
                    </div>

                    <div>Plans</div>

                    <div>Paid vs. Free</div>

                </div>

            </div>

            <div className={styles.footerchild}>
                <div>
                    <span className={styles.cr}><CopyrightIcon/></span>2023, BookBinder. All rights reserved.
                </div>

                <div className={styles.logos}>

                    <div>
                    <img src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/ig.png"></img>
                    </div>

                    <div>
                    <img src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/linkedin.png"></img>
                    </div>

                    <div>
                    <img src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/twitter.png"></img>
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Footer
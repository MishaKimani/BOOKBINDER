import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import kiterunner from '../../assets/thekiterunner.jpeg';
import twisted from '../../assets/twistedgames.jpeg';
import mephisto from '../../assets/TheMephistoThreat.jpeg';
import jack from '../../assets/JackReacher-High Heat.jpeg';

import styles from './swiper.module.css'

import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Carousel=() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className={styles.carousel}>

            <img src={kiterunner} className={styles.cover}/>

            <div className={styles.carousel2}>

                <div><b>Title</b>: The Kite Runner</div>

                <div><b>Author</b>: Khaled Hosseini</div>

                <div><b>Blurb</b>: Afghanistan, 1975:
                     Twelve-year-old Amir is desperate to win the local kite-fighting tournament
                     and his loyal friend Hassan promises to help him.
                     But neither of the boys can foresee what will happen to Hassan that afternoon, 
                     an event that is to shatter their lives.
                </div>

                <button className={styles.add}>Add To Shelf</button>

                <button className={styles.get}>Get Book</button>

                <div className={styles.rating}>
                    Rating
                    <GradeIcon/>
                    <GradeIcon/>
                    <GradeIcon/>
                    <StarHalfIcon/>
                    <StarBorderIcon/>

                </div>

            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.carousel}>

            <img src={twisted} className={styles.cover}/>

            <div className={styles.carousel2}>

                <div><b>Title</b>: Twisted Games</div>

                <div><b>Author</b>: Ana Huang</div>

                <div><b>Blurb</b>: Regal, strong-willed, and bound by the chains of duty,
                 Princess Bridget dreams of the freedom to live and love as she chooses.
                 But when her brother abdicates, she's suddenly faced with the prospect of a loveless,
                 politically expedient marriage and a throne she never wanted.
                </div>

                <button className={styles.add}>Add To Shelf</button>

                <button className={styles.get}>Get Book</button>

                <div className={styles.rating}>
                    Rating
                    <GradeIcon/>
                    <GradeIcon/>
                    <StarHalfIcon/>
                    <StarBorderIcon/>
                    <StarBorderIcon/>

                </div>

            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.carousel}>

            <img src={mephisto} className={styles.cover}/>

            <div className={styles.carousel2}>

                <div><b>Title</b>: The Mephisto Threat</div>

                <div><b>Author</b>: E.V. Seymour</div>

                <div><b>Blurb</b>: Ex-army. Ex-police. Unofficial MI5 spook. Meet Paul Tallis - a spy for the 21st Century.
                 In Istanbul, crime journalist Garry Morello is executed in cold blood. 
                 Moments before his death...
                 
                </div>

                <button className={styles.add}>Add To Shelf</button>

                <button className={styles.get}>Get Book</button>

                <div className={styles.rating}>
                    Rating
                    <GradeIcon/>
                    <GradeIcon/>
                    <GradeIcon/>
                    <StarBorderIcon/>
                    <StarBorderIcon/>

                </div>

            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.carousel}>

            <img src={jack} className={styles.cover}/>

            <div className={styles.carousel2}>

                <div><b>Title</b>: High Heat</div>

                <div><b>Author</b>: Lee Child</div>

                <div><b>Blurb</b>: July 1977. Jack Reacher is almost seventeen,
                 and he stops in New York on his way from South Korea to visit his brother at West Point. 
                 The summer heat is suffocating, fires are raging in the Bronx, the city is bankrupt,
                 and the mad gunman known as Son of Sam is still on the loose.
                 Reacher meets a woman with a problem, and agrees to help her . . . 


                </div>

                <button className={styles.add}>Add To Shelf</button>

                <button className={styles.get}>Get Book</button>

                <div className={styles.rating}>
                    Rating
                    <GradeIcon/>
                    <GradeIcon/>
                    <GradeIcon/>
                    <StarHalfIcon/>
                    <StarBorderIcon/>

                </div>

            </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Carousel
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Box from '@mui/material/Box';

import styles from './styles';

const SlideContent: React.FC = ({ url }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'red',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src={url} />
    </Box>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
};
const PreviousSlideButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      Slide to the previous slide
    </button>
  );
};

const FullSlider: React.FC = () => {
  return (
    <Box sx={styles}>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
      >
        <SwiperSlide>
          <SlideContent url="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent url="" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent url="" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent url="" />
        </SwiperSlide>
        <PreviousSlideButton />
        <SlideNextButton />
      </Swiper>
    </Box>
  );
};

export default FullSlider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';
import { Box } from '@mui/material';

import 'swiper/css/navigation';

const SlideContent: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'red', minHeight: '80vh', display: 'flex' }}>
      Cool Life
    </Box>
  );
};

const FullSlider: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        padding: '1rem',
        position: 'relative',
        '& .swiper-button-next:after': {
          color: 'black',
          fontSize: '20px'
        },
        '& .swiper-button-prev:after': {
          color: 'black',
          fontSize: '20px'
        }
      }}
    >
      <Swiper
        style={{ height: '100%', width: '100%' }}
        modules={[Navigation]}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default FullSlider;

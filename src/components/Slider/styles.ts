const styles = {
  maxWidth: '100%',
  padding: '1rem',
  position: 'relative',
  '& .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction':
    { bottom: '2rem' },
  '& .swiper-pagination-bullet': { backgroundColor: 'blue' },
  '& .swiper-button-next:after': {
    color: 'black',
    fontSize: '20px'
  },
  '& .swiper-button-prev:after': {
    color: 'black',
    fontSize: '20px'
  }
};

export default styles;

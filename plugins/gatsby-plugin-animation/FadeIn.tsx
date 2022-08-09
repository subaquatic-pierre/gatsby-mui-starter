import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.PropsWithChildren {
  down?: boolean;
  right?: boolean;
  up?: boolean;
  left?: boolean;
  delay?: number;
  duration?: number;
}

const getHidden = (direction?: string) => {
  switch (direction) {
    case 'down':
      return { opacity: 0, y: '-100%' };
    case 'right':
      return { opacity: 0, x: '100%' };
    case 'up':
      return { opacity: 0, y: '100%' };
    case 'left':
      return { opacity: 0, x: '-100%' };

    default:
      return { opacity: 0 };
  }
};

const getShow = (duration = 0.5, delay = 0.3) => {
  return {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration, delay }
  };
};

const fadeIn = (direction?: string, duration?: number, delay?: number) => {
  return {
    hidden: getHidden(direction),
    show: getShow(duration, delay)
  };
};

const FadeIn: React.FC<Props> = ({
  down,
  right,
  up,
  left,
  delay,
  duration,
  children
}) => {
  let direction;
  if (down) {
    direction = 'down';
  } else if (right) {
    direction = 'right';
  } else if (up) {
    direction = 'up';
  } else if (left) {
    direction = 'left';
  }

  return (
    <motion.div
      variants={fadeIn(direction, duration, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

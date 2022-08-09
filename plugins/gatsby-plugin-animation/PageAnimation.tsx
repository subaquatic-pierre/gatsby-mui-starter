import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = React.PropsWithChildren;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren'
    }
  }
};

const AnimationContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default AnimationContainer;

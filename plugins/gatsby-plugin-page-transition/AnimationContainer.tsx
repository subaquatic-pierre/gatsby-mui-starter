import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = React.PropsWithChildren;

const AnimationContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default AnimationContainer;

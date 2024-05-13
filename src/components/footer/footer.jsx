import React from 'react';
import Form from '../form/email';
import BottomNav from './bottomNav';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const footer = () => {
  return (
    <footer id="">
      {/* <motion.div variants={container} {...set} className='grid place-items-center text-center bg-softblue py-16 text-white '>
    <motion.p variants={item(0.3)} className='text-[0.75rem] uppercase tracking-[0.46em]'>35,000+ already joined</motion.p>
    <motion.p variants={item(0.5)} className='max-w-[22ch] heading my-6'>Stay up-to-date with what we’re doing</motion.p>
    <motion.div variants={item(0.7)}> 
    <Form />  
    </motion.div>
    </motion.div> */}
      <BottomNav />
    </footer>
  );
};

export default footer;

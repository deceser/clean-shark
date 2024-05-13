import { useState } from 'react';
import Banner from './banner';
import Button from '../ui/PrimaryBtn';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const faq = () => {
  return (
    <motion.section
      variants={container}
      {...set}
      id="КОНТАКТИ"
      className="grid place-items-center px-4 my-[7rem]">
      <motion.h1
        variants={item(0.5)}
        className="heading text-center">
        Контакти
      </motion.h1>
      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        Наші Контакти телефон
      </motion.p>

      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        Наші Контакти телеграм
      </motion.p>

      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        Наші Контакти інста
      </motion.p>
    </motion.section>
  );
};

export default faq;

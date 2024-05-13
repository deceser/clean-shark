import React from 'react';
import HeroText from '../../layout/heroText';
import Button from '../ui/PrimaryBtn';

// import animations
import { motion } from 'framer-motion';
import { container, item, set, image } from '../../utils/motion.js';

const tab = ({ id, activeTab, title, description, img }) => {
  return activeTab === id ? (
    <motion.div
      variants={container}
      {...set}
      className="flex md:justify-center justify-between items-center md:my-12 max-md:flex-col gap-14">
      <motion.div
        variants={image(-100)}
        {...set}
        className=" w-full max-w-[538px] max-h-[347px] max-md:my-12 max-md:px-8 ">
        <img
          src={img}
          alt="tab1"
          className="object-contain pl-8"
        />
      </motion.div>

      <motion.article
        variants={container}
        {...set}
        className="md:w-[48ch] px-8 max-md:text-center max-md:pl-0 max-md:p-2">
        <motion.h1
          variants={item(0.5)}
          className="heading">
          {title}
        </motion.h1>
        <motion.p
          variants={item(0.7)}
          className="paraf">
          {description}
        </motion.p>
        {/* <motion.div variants={item(0.9)}>
          <Button title="More Info" />
        </motion.div> */}
      </motion.article>
    </motion.div>
  ) : null;
};

export default tab;

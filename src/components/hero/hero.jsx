import React from 'react';
import heroimg from '../../assets/images-shark/shark-3.jpg';
import Button from '../ui/PrimaryBtn';
import Button2 from '../ui/SecondaryBtn';
import HeroText from '../../layout/heroText';

// import all animation
import { motion } from 'framer-motion';
import { container, set, item, image } from '../../utils/motion.js';

const hero = () => {
  return (
    <section className="flex flex-col justify-center lg:gap-16 md:justify-between lg:justify-center md:flex-row-reverse mt-[5rem] items-center overflow-hidden">
      <motion.div
        variants={image(100)}
        {...set}
        // className="w-full bg-1  max-w-[657px] max-h-[446px]"
      >
        <img
          src={heroimg}
          alt="Hero Img"
          className="object-cover w-80"
        />
      </motion.div>

      <HeroText>
        <motion.div
          variants={container}
          {...set}>
          <motion.h1
            variants={item(0.5)}
            className="text-5xl font-medium">
            Акула
          </motion.h1>
          <motion.p
            variants={item(0.7)}
            className="paraf">
            якись текст рандомний про вас якись текст рандомний про вас якись текст рандомний про вас якись текст
            рандомний про вас якись текст рандомний про вас якись текст рандомний про вас якись текст рандомний про вас
            якись текст рандомний про вас
          </motion.p>
        </motion.div>
      </HeroText>
    </section>
  );
};

export default hero;

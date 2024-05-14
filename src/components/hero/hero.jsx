import React from 'react';
import heroimg from '../../assets/images-shark/shark-3.jpg';
import Button from '../ui/PrimaryBtn';
import Button2 from '../ui/SecondaryBtn';
import HeroText from '../../layout/heroText';
import banner from '../../assets/images/banner.jpg';

// import all animation
import { motion } from 'framer-motion';
import { container, set, item, image } from '../../utils/motion.js';

const hero = () => {
  return (
    <>
      <img
        src={banner}
        alt="banner"
        className="object-cover w-full"
      />

      <section className="flex flex-col justify-center lg:gap-16 md:justify-between lg:justify-center md:flex-row-reverse mt-[5rem] items-center overflow-hidden">
        <motion.div
          variants={image(100)}
          {...set}
          // className="w-full bg-1  max-w-[657px] max-h-[446px]"
        >
          <img
            src={heroimg}
            alt="Hero Img"
            className="object-cover w-72"
          />
        </motion.div>

        <HeroText>
          <motion.div
            variants={container}
            {...set}>
            <motion.h1
              variants={item(0.5)}
              className="text-5xl font-medium">
              Akula czystości
            </motion.h1>
            <motion.p
              variants={item(0.7)}
              className="paraf">
              Oferujemy czyszczenie chemiczne mebli i czyszczenie zasłon, rolet, namiotów
            </motion.p>
            <motion.p
              variants={item(0.7)}
              className="paraf">
              -Wszystkie rodzaje tapicerki (od materiałów syntetycznych po naturalne tkaniny)
            </motion.p>
            <motion.p
              variants={item(0.7)}
              className="paraf">
              -Mocny sprzęt (pompa 9 bar) Santoemma, Chemspec
            </motion.p>
            <motion.p
              variants={item(0.7)}
              className="paraf">
              -Usuwanie plam bezpiecznie dla mebli
            </motion.p>
            <motion.p
              variants={item(0.7)}
              className="paraf">
              -Usuwanie pleśni z namiotów
            </motion.p>
          </motion.div>
        </HeroText>
      </section>
    </>
  );
};

export default hero;

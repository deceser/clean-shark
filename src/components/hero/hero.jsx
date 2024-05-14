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
  const [isMobile, setIsMobile] = React.useState(false);

  // Проверка на мобильные устройства (ширина до 767px)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767); // Проверяем ширину экрана при загрузке компонента
    };

    checkScreenSize(); // Проверяем ширину экрана при первой загрузке
    window.addEventListener('resize', checkScreenSize); // Добавляем слушателя события изменения размера экрана

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Удаляем слушателя при размонтировании компонента
    };
  }, []);
  return (
    <>
      <img
        src={banner}
        alt="banner"
        className="object-cover w-full"
      />

      {isMobile && (
        <section className="flex flex-col justify-center lg:gap-16 md:justify-between lg:justify-center md:flex-row-reverse mt-[5rem] items-center overflow-hidden p-6">
          <motion.h1
            variants={item(0.5)}
            className="text-2xl font-medium">
            Czyszczenie chemiczne mebli, zasłon, namiotów.
          </motion.h1>

          <motion.p
            variants={item(0.7)}
            className="paraf">
            Bielawa, Dzierżoniów, Świdnica, Łagiewniki, Mościsko, Niemcza, Pieszyce, Piława Górna, okoliczne
            miejscowości +45 km
          </motion.p>
        </section>
      )}

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
            {!isMobile && (
              <motion.p
                variants={item(0.7)}
                className="paraf">
                -Bielawa, Dzierżoniów, Świdnica, Łagiewniki, Mościsko, Niemcza, Pieszyce, Piława Górna, okoliczne
                miejscowości +45 km
              </motion.p>
            )}
          </motion.div>
        </HeroText>
      </section>
    </>
  );
};

export default hero;

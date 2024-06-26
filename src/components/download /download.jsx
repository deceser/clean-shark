import React from 'react';

// import price1 from '../../assets/price/price-1.jpg';
// import price2 from '../../assets/price/price-2.jpg';
// import price3 from '../../assets/price/price-3.jpg';
// import price4 from '../../assets/price/price-4.jpg';
// import price5 from '../../assets/price/price-5.jpg';

import price1 from '../../assets/price/new-price-1.jpg';
import price2 from '../../assets/price/new-price-2.jpg';
import price3 from '../../assets/price/new-price-3.jpg';
import price4 from '../../assets/price/new-price-4.jpg';
import price5 from '../../assets/price/new-price-5.jpg';
import price6 from '../../assets/price/new-price-6.jpg';
import price7 from '../../assets/price/new-price-7.jpg';
import price8 from '../../assets/price/new-price-8.jpg';

import Card from './card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const user = true;

const download = () => {
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
      {!isMobile ? (
        <motion.section
          id="USŁUGI"
          variants={container}
          {...set}
          className="grid place-items-center mt-[13rem] px-8 mb-10">
          <motion.h1
            variants={item(0.3)}
            className="heading text-center">
            Nasze usługi i ceny
          </motion.h1>

          <motion.div
            variants={container}
            {...set}
            className="flex gap-12 justify-center items-center flex-col md:flex-row mt-12 w-full h-auto">
            <Card
              img={price1}
              platform="Chrome"
              version="62"
              flex="self-start"
              delay={0.7}
            />
            <Card
              img={price2}
              platform="Firefox"
              version="55"
              // flex="self-center md:mt-[2.6875rem] lg:self-start"
              delay={0.9}
            />
            <Card
              img={price3}
              platform="Opera"
              version="46"
              // flex="self-end md:mt-[4.75rem] lg:self-start"
              delay={1.1}
            />
            <Card
              img={price4}
              platform="Opera"
              version="46"
              // flex="self-end md:mt-[4.75rem] lg:self-start"
              delay={1.3}
            />
            <Card
              img={price5}
              platform="Opera"
              version="46"
              // flex="self-end md:mt-[4.75rem] lg:self-start"
              delay={1.5}
            />{' '}
            <Card
              img={price6}
              platform="Opera"
              version="46"
              // flex="self-end md:mt-[4.75rem] lg:self-start"
              delay={1.5}
            />{' '}
            <Card
              img={price7}
              platform="Opera"
              version="46"
              // flex="self-end md:mt-[4.75rem] lg:self-start"
              delay={1.5}
            />{' '}
            <Card
              img={price8}
              platform="Opera"
              version="46"
              // flex="self-end md:mt-[4.75rem] lg:self-start"
              delay={1.5}
            />
          </motion.div>
        </motion.section>
      ) : (
        <div
          className="py-6 px-2"
          id="USŁUGI">
          <motion.h1
            variants={item(0.3)}
            className="heading text-center mb-5">
            Nasze usługi i ceny
          </motion.h1>

          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <img
                src={price1}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price2}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price3}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price4}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price5}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price6}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price7}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={price8}
                alt="platform"
                className="object-cover w-full h-96 mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default download;

import { useState } from 'react';
import TabContent from './tabContent';
import TabNav from './tabNav';

import { arrTab } from './arrTab.js';

import { Swiper, SwiperSlide } from 'swiper/react';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const features = () => {
  return (
    <motion.section
      variants={container}
      {...set}
      id="PRÓBKI PRAC"
      className="mt-20">
      <div className="py-6 px-2">
        <motion.h1
          variants={item(0.3)}
          className="heading text-center mb-5">
          Przykład pracy
        </motion.h1>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          onSwiper={(swiper) => console.log(swiper)}>
          {arrTab.map((el) => (
            <SwiperSlide className="!w-[300px] !h-[450px]">
              <img
                key={el.image}
                src={el.image}
                alt="platform"
                className="object-cover w-full h-full mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div
        variants={item(0.9)}
        className="grid place-items-center px-4 mt-20">
        <motion.h1
          variants={item(0.5)}
          className="heading">
          Opis procedury
        </motion.h1>
        <motion.p
          variants={item(0.7)}
          className="paraf">
          Dobieramy niezbędną chemię i jej proporcje do konkretnej tkaniny i plamy, krok po kroku nanosząc na produkt
          środki czyszczące, a w razie potrzeby aplikując odplamiacze
        </motion.p>
        <motion.p
          variants={item(0.7)}
          className="paraf">
          👨‍🔬 W arsenale mistrza można znaleźć ponad 10 środków czyszczących i odplamiaczy do różnych rodzajów tkanin i
          plam. (Z napojów, śluzów, rysunków, plasteliny, moczu, gumy do żucia, krwi, tłuszczu, farby, kosmetyków, rdzy
          itp. - wszystko to usuwamy w 98% przypadków)
        </motion.p>
        <motion.p
          variants={item(0.7)}
          className="paraf">
          ❤️ Warto wiedzieć, że do usuwania resztek środków chemicznych z tkanin używamy specjalnych neutralizatorów
          kwasów, NIEMOŻLIWE jest zmycie wszystkich zasad po czyszczeniu samą wodą, odpowiednia neutralizacja pomoże
          utrzymać tapicerkę w czystości przez znacznie dłuższy czas, a w większości przypadków co ważne, będzie
          bezpieczne dla Twojego zdrowia
        </motion.p>
        <motion.p
          variants={item(0.7)}
          className="paraf">
          🌬 Końcowym etapem jest suszenie mebli, jeden z ważnych aspektów technologii czyszczenia chemicznego mebli,
          tak, możemy wysuszyć Twoje meble od razu, będą prawie suche i gotowe do użycia. (Usługa suszenia mebli
          dostępna jest za dodatkową opłatą)
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default features;

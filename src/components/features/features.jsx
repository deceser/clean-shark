// import all components
import { useState } from 'react';
import TabContent from './tabContent';
import TabNav from './tabNav';

// import all images for tabContent
import tab1 from '../../assets/images-example/ex-1.jpg';
import tab2 from '../../assets/images-example/ex-2.jpg';
import tab3 from '../../assets/images-example/ex-3.jpg';
import tab4 from '../../assets/images-example/ex-4.jpg';
import tab5 from '../../assets/images-example/ex-5.jpg';
import tab6 from '../../assets/images-example/ex-6.jpg';
import tab7 from '../../assets/images-example/ex-7.jpg';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const features = () => {
  // set default usestate
  const [activeTab, setActiveTab] = useState('1');

  return (
    <motion.section
      variants={container}
      {...set}
      id="PRÓBKI PRAC"
      className="mt-20 ">
      {/* tabnav for navigating between panel, change the active states to id using useState hooks*/}
      <motion.nav
        variants={item(0.3)}
        className="flex max-md:flex-col justify-center text-center mx-8 mt-8">
        <TabNav
          id="1"
          title="Przykład pracy"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabNav
          id="2"
          title="Przykład pracy"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabNav
          id="3"
          title="Przykład pracy"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </motion.nav>

      {/* tabcontent get the id and activetab states to render a current tabpanel*/}
      <div>
        <TabContent
          id="1"
          activeTab={activeTab}
          // title="Приклад - 1"
          // description="Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись
          // текст з описом"
          img1={tab4}
          img2={tab2}
        />
        <TabContent
          id="2"
          activeTab={activeTab}
          // title="Приклад - 2"
          // description="Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись
          // текст з описом"
          img1={tab1}
          img2={tab5}
        />
        <TabContent
          id="3"
          activeTab={activeTab}
          // title="Приклад - 3"
          // description="Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись
          // текст з описом"
          img1={tab6}
          img2={tab7}
        />
      </div>

      <motion.div
        variants={item(0.9)}
        className="grid place-items-center px-4 mt-40">
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
